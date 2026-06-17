import { useState, useEffect } from "react";
import { Box, Typography, Container, Button, Slider } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export default function FinalSecretPage() {
  const [isActive, setIsActive] = useState(false);
  const [stage, setStage] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const [showConfetti, setShowConfetti] = useState(false);

  const textStages = [
    "You're not my favorite part of the day.",
    "You're the reason many days become my favorite.",
    "From the moment you entered my life,",
    "everything changed in the most beautiful way.",
    "You make ordinary moments extraordinary.",
    "You make difficult days bearable.",
    "You make lonely nights feel less lonely.",
    "You are home.",
    "You are safety.",
    "You are love.",
    "You are everything.",
  ];

  // Auto-advance through stages
  useEffect(() => {
    if (!isActive || stage >= textStages.length) return;

    const delay = stage === 0 ? 2000 : 3500;
    const timer = setTimeout(() => {
      setStage((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [isActive, stage, textStages.length]);

  // Trigger confetti at the end
  useEffect(() => {
    if (stage === textStages.length && !showConfetti) {
      setShowConfetti(true);
      // Play celebratory sound
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [523, 659, 784, 987]; // C, E, G, B (major chord)
        notes.forEach((freq, i) => {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          osc.connect(gain);
          gain.connect(audioContext.destination);

          const startTime = audioContext.currentTime + i * 0.15;
          osc.frequency.setValueAtTime(freq, startTime);
          gain.gain.setValueAtTime(0, startTime);
          gain.gain.linearRampToValueAtTime(0.2, startTime + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);

          osc.start(startTime);
          osc.stop(startTime + 0.4);
        });
      } catch (e) {
        console.log("Audio not available");
      }
    }
  }, [stage, textStages.length, showConfetti]);

  // Confetti particles
  const Confetti = () => {
    const particles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 2.5 + Math.random() * 1.5,
      color: ["#ff4081", "#ff80ab", "#ffd54f", "#81c784", "#4fc3f7"][i % 5],
    }));

    return (
      <Box sx={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: 0, x: 0, opacity: 1 }}
            animate={{ y: "100vh", x: Math.sin(p.id) * 100, opacity: 0 }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: "easeIn",
            }}
            style={{
              position: "absolute",
              left: `${p.left}%`,
              top: 0,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: p.color,
              boxShadow: `0 0 10px ${p.color}`,
            }}
          />
        ))}
      </Box>
    );
  };

  if (!isActive) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f3e5f5 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
          px: 2,
          position: "relative",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#c2185b",
                mb: 4,
                fontFamily: "'Outfit', sans-serif",
                fontSize: { xs: "1.8rem", md: "2.8rem" },
              }}
            >
              ❤️ A Final Question
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#d81b60",
                fontFamily: "'Outfit', sans-serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                mb: 6,
                lineHeight: 1.8,
              }}
            >
              There's something I want to show you. Something I've been holding in my heart. Are you ready to see what you mean to me?
            </Typography>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Button
              onClick={() => setIsActive(true)}
              sx={{
                fontSize: "1.1rem",
                fontWeight: 700,
                padding: "18px 50px",
                borderRadius: 50,
                background: "linear-gradient(135deg, #ff4081, #ff80ab)",
                color: "#fff",
                boxShadow: "0 10px 40px rgba(255, 64, 129, 0.4)",
                textTransform: "none",
                fontFamily: "'Outfit', sans-serif",
                border: "2px solid #ff4081",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 15px 60px rgba(255, 64, 129, 0.6)",
                },
              }}
            >
              What do you mean to me? 💕
            </Button>
          </motion.div>
        </Container>
      </Box>
    );
  }

  return (
    <>
      <AnimatePresence>
        {showConfetti && <Confetti />}
      </AnimatePresence>

      {/* Dark overlay during reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: stage > 0 ? 0.95 : 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          zIndex: stage > 0 ? 1 : -1,
          pointerEvents: stage > 0 ? "auto" : "none",
        }}
      />

      <Box
        sx={{
          minHeight: "100vh",
          background: stage > 0 ? "#000" : "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f3e5f5 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
          px: 2,
          position: "relative",
          transition: "background 1s ease",
          zIndex: stage > 0 ? 10 : 1,
        }}
      >
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              style={{ width: "100%" }}
            >
              <Container maxWidth="md" sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#c2185b",
                    mb: 4,
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: { xs: "1.8rem", md: "2.8rem" },
                  }}
                >
                  ✨ Just for You
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.1rem",
                    color: "#d81b60",
                    fontStyle: "italic",
                    mb: 4,
                  }}
                >
                  Let me share something... 💕
                </Typography>

                <Button
                  onClick={() => setStage(1)}
                  sx={{
                    borderRadius: 20,
                    bgcolor: "#ff4081",
                    color: "#fff",
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "1rem",
                    padding: "12px 40px",
                    "&:hover": { bgcolor: "#e91e63" },
                  }}
                >
                  Begin 🚀
                </Button>
              </Container>
            </motion.div>
          )}

          {stage > 0 && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              style={{ width: "100%" }}
            >
              <Container maxWidth="md" sx={{ textAlign: "center" }}>
                {stage <= textStages.length && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Typography
                      sx={{
                        fontFamily: stage <= 2 ? "'Outfit', sans-serif" : "'Caveat', cursive",
                        fontSize:
                          stage <= 2
                            ? { xs: "1.4rem", md: "1.8rem" }
                            : { xs: "1.6rem", md: "2.2rem" },
                        color: "#fff",
                        lineHeight: 2,
                        mb: 4,
                        fontWeight: stage > 2 ? 700 : 500,
                        textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                      }}
                    >
                      {textStages[stage - 1]}
                    </Typography>
                  </motion.div>
                )}

                {stage === textStages.length + 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                        color: "#ff4081",
                        fontWeight: 900,
                        mb: 6,
                        textShadow: "0 0 30px rgba(255, 64, 129, 0.5)",
                      }}
                    >
                      Forever Yours. ❤️
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "1.1rem",
                        color: "rgba(255,255,255,0.8)",
                        mb: 6,
                        fontStyle: "italic",
                      }}
                    >
                      With all my love...
                    </Typography>
                  </motion.div>
                )}
              </Container>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Music controls - visible when dark background */}
        {stage > 0 && stage <= textStages.length && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              position: "fixed",
              bottom: 40,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 20,
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: 20,
              padding: "16px 24px",
              border: "1px solid rgba(255,255,255,0.2)",
              minWidth: 280,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <button
                onClick={() => setIsMuted(!isMuted)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  padding: 4,
                }}
              >
                {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </button>
              <Slider
                value={isMuted ? 0 : volume}
                onChange={(e, val) => setVolume(val)}
                min={0}
                max={100}
                sx={{
                  flex: 1,
                  color: "#ff4081",
                  "& .MuiSlider-thumb": {
                    background: "#ff4081",
                  },
                  "& .MuiSlider-track": {
                    background: "#ff4081",
                  },
                  "& .MuiSlider-rail": {
                    background: "rgba(255,255,255,0.2)",
                  },
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Imagine soft music playing... 🎵
            </Typography>
          </motion.div>
        )}

        {/* Navigation buttons */}
        {stage > 0 && stage < textStages.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{
              position: "fixed",
              bottom: 40,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 20,
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: 20,
              padding: "12px 24px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <Button
              onClick={() => setStage((prev) => prev + 1)}
              sx={{
                color: "#fff",
                fontWeight: 700,
                textTransform: "none",
                fontSize: "0.95rem",
                fontFamily: "'Outfit', sans-serif",
                "&:hover": { opacity: 0.8 },
              }}
            >
              Next ➜
            </Button>
          </motion.div>
        )}

        {/* Final action button */}
        {stage === textStages.length + 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              position: "fixed",
              bottom: 40,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 20,
            }}
          >
            <Button
              onClick={() => {
                setIsActive(false);
                setStage(0);
              }}
              sx={{
                borderRadius: 20,
                bgcolor: "#ff4081",
                color: "#fff",
                fontWeight: 700,
                textTransform: "none",
                fontSize: "1rem",
                padding: "12px 40px",
                fontFamily: "'Outfit', sans-serif",
                "&:hover": { bgcolor: "#e91e63" },
              }}
            >
              Back Home 💕
            </Button>
          </motion.div>
        )}
      </Box>
    </>
  );
}
