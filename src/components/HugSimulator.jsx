import { useState, useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function HugSimulator() {
  const [isHugging, setIsHugging] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [hearts, setHearts] = useState([]);

  const messages = [
    "Everything will be okay.",
    "I'm here.",
    "Take your time.",
    "You're not alone.",
    "You're loved.",
    "This will pass.",
    "I believe in you.",
    "You've got this.",
  ];

  // Generate floating hearts
  useEffect(() => {
    if (!isHugging) return;

    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 3,
      delay: Math.random() * 0.5,
    }));
    setHearts(newHearts);

    // Play heartbeat sound
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const playHeartbeat = () => {
        const now = audioContext.currentTime;
        for (let i = 0; i < 8; i++) {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          osc.connect(gain);
          gain.connect(audioContext.destination);

          const beatTime = now + i * 0.8;
          osc.frequency.setValueAtTime(120 + (i % 2) * 30, beatTime);
          osc.frequency.exponentialRampToValueAtTime(20, beatTime + 0.15);

          gain.gain.setValueAtTime(0, beatTime);
          gain.gain.linearRampToValueAtTime(0.3, beatTime + 0.01);
          gain.gain.exponentialRampToValueAtTime(0.01, beatTime + 0.15);

          osc.start(beatTime);
          osc.stop(beatTime + 0.15);
        }
      };
      playHeartbeat();
    } catch (e) {
      console.log("Audio not available");
    }
  }, [isHugging]);

  // Cycle through messages
  useEffect(() => {
    if (!isHugging) return;
    const timer = setTimeout(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [messageIndex, isHugging]);

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
        overflow: "hidden",
      }}
    >
      {/* Warm overlay when hugging */}
      <AnimatePresence>
        {isHugging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "radial-gradient(circle at center, rgba(255, 192, 203, 0.5), rgba(255, 128, 171, 0.2))",
              zIndex: 9998,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>

      {/* Floating hearts */}
      <AnimatePresence>
        {isHugging &&
          hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ y: "100vh", x: 0, opacity: 1 }}
              animate={{ y: "-100vh", x: Math.sin(heart.id) * 50, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: heart.duration,
                delay: heart.delay,
                ease: "easeOut",
              }}
              style={{
                position: "fixed",
                left: `${heart.left}%`,
                bottom: 0,
                fontSize: "2rem",
                zIndex: 9997,
                pointerEvents: "none",
              }}
            >
              ❤️
            </motion.div>
          ))}
      </AnimatePresence>

      <Container maxWidth="md" sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <AnimatePresence mode="wait">
          {!isHugging ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.6 }}
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
                Need a Hug? 🤗
              </Typography>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Button
                  onClick={() => setIsHugging(true)}
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    padding: "20px 60px",
                    borderRadius: 50,
                    background: "linear-gradient(135deg, #ff4081, #ff80ab)",
                    color: "#fff",
                    boxShadow: "0 10px 40px rgba(255, 64, 129, 0.4)",
                    textTransform: "none",
                    fontFamily: "'Outfit', sans-serif",
                    transition: "all 0.3s ease",
                    border: "2px solid #ff4081",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 15px 60px rgba(255, 64, 129, 0.6)",
                    },
                  }}
                >
                  Hold Me 💕
                </Button>
              </motion.div>

              <Typography
                variant="body2"
                sx={{
                  color: "#d81b60",
                  mt: 4,
                  fontFamily: "'Outfit', sans-serif",
                  fontStyle: "italic",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                Sometimes we all need a moment of comfort...
              </Typography>
            </motion.div>
          ) : (
            <motion.div
              key="hug-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Warm hug glow */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: "absolute",
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255, 64, 129, 0.3), transparent)",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                }}
              />

              {/* Heartbeat circle */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(255, 64, 129, 0.2), rgba(255, 128, 171, 0.1))",
                  border: "3px solid rgba(255, 64, 129, 0.3)",
                  margin: "0 auto 40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ fontSize: "3rem" }}
                >
                  💕
                </motion.div>
              </motion.div>

              {/* Messages */}
              <Box sx={{ minHeight: 100, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <motion.div
                  key={messageIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                      color: "#d81b60",
                      fontWeight: 700,
                      mb: 4,
                    }}
                  >
                    {messages[messageIndex]}
                  </Typography>
                </motion.div>
              </Box>

              {/* Close button */}
              <Button
                onClick={() => setIsHugging(false)}
                sx={{
                  mt: 4,
                  borderRadius: 20,
                  bgcolor: "#fff",
                  color: "#ff4081",
                  fontWeight: 700,
                  border: "2px solid #ff4081",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontFamily: "'Outfit', sans-serif",
                  "&:hover": {
                    bgcolor: "#fff0f5",
                  },
                }}
              >
                I'm ready to go back
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
}
