import { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function LastBeforeSleep() {
  const [isNightTime, setIsNightTime] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  const nightMessage =
    "If today was difficult, I'm proud of you for making it through. Goodnight. See you in my thoughts.";

  // Check if it's after 10 PM
  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      setIsNightTime(hour >= 22 || hour < 5); // 10 PM to 5 AM
    };
    checkTime();
    const timer = setInterval(checkTime, 60000); // Check every minute
    return () => clearInterval(timer);
  }, []);

  // Generate stars
  useEffect(() => {
    const newStars = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
    }));
    setStars(newStars);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    let timer;

    const type = () => {
      if (index <= nightMessage.length) {
        setDisplayedText(nightMessage.slice(0, index));
        index++;
        timer = setTimeout(type, 50);
      }
    };

    if (isNightTime) {
      type();
    }

    return () => clearTimeout(timer);
  }, [isNightTime]);

  // Shooting stars effect
  useEffect(() => {
    if (!isNightTime) return;

    const createShootingStar = () => {
      const newStar = {
        id: Date.now(),
        startX: Math.random() * 100,
        startY: Math.random() * 50,
      };
      setShootingStars((prev) => [...prev.slice(-3), newStar]);
    };

    const interval = setInterval(createShootingStar, 3000);
    return () => clearInterval(interval);
  }, [isNightTime]);

  if (!isNightTime) {
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
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#c2185b",
                mb: 3,
                fontFamily: "'Outfit', sans-serif",
                fontSize: { xs: "1.8rem", md: "2.8rem" },
              }}
            >
              🌙 Last Thing Before Sleep
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#d81b60",
                fontFamily: "'Outfit', sans-serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.8,
              }}
            >
              This special section appears after 10 PM... Come back later tonight to discover a cozy goodnight message just for you. 💙
            </Typography>
          </motion.div>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0f2c 0%, #16213e 50%, #1a1a3e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
        px: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Starfield background */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            background: "#fff",
            boxShadow: `0 0 ${star.size * 2}px #fff, 0 0 ${star.size * 4}px rgba(255,255,255,0.5)`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((shootingStar) => (
        <motion.div
          key={shootingStar.id}
          initial={{
            x: `${shootingStar.startX}vw`,
            y: `${shootingStar.startY}vh`,
            opacity: 1,
          }}
          animate={{
            x: `${shootingStar.startX + 100}vw`,
            y: `${shootingStar.startY + 100}vh`,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
            ease: "easeIn",
          }}
          style={{
            position: "fixed",
            width: 2,
            height: 2,
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 0 20px rgba(255,255,255,0.8)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      ))}

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Soft glow background */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(100, 200, 255, 0.3), transparent)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        />

        {/* Moon */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            fontSize: "4rem",
            marginBottom: 30,
            position: "relative",
            zIndex: 1,
          }}
        >
          🌙
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#a8d8ff",
              mb: 4,
              fontFamily: "'Outfit', sans-serif",
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              textShadow: "0 0 20px rgba(168, 216, 255, 0.3)",
            }}
          >
            Before You Sleep...
          </Typography>
        </motion.div>

        {/* Typewriter message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <Typography
            sx={{
              fontFamily: "'Caveat', cursive",
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: "#fff",
              lineHeight: 2,
              minHeight: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              mb: 4,
              fontWeight: 600,
            }}
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{
                display: "inline-block",
                width: 3,
                height: "1.2em",
                backgroundColor: "#fff",
                marginLeft: 8,
              }}
            />
          </Typography>
        </motion.div>

        {/* Sleep prompt */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <Typography
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              color: "#a8d8ff",
              fontStyle: "italic",
              mt: 4,
            }}
          >
            Rest well. Dream of peaceful moments. 💙
          </Typography>
        </motion.div>
      </Container>

      {/* Ambient audio suggestion text (for accessibility) */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(168, 216, 255, 0.6)",
          fontSize: "0.9rem",
          fontFamily: "'Outfit', sans-serif",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "inherit", color: "inherit" }}>
          Imagine soft ambient music playing quietly... 🎵
        </Typography>
      </Box>
    </Box>
  );
}
