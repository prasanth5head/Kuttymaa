import { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function SafePlace() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [particles, setParticles] = useState([]);

  const messages = [
    "When the world becomes too much...",
    "You don't have to be strong here.",
    "You don't have to pretend here.",
    "You can simply be yourself.",
  ];

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 4,
      size: 4 + Math.random() * 8,
    }));
    setParticles(newParticles);
  }, []);

  // Cycle through messages
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3500);
    return () => clearTimeout(timer);
  }, [messageIndex]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8dce6 0%, #fce4ec 50%, #f3e5f5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: 4,
      }}
    >
      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-20, 20, -20], opacity: [0, 0.6, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: `rgba(233, 30, 99, 0.${Math.floor(Math.random() * 5) + 2})`,
            zIndex: 1,
          }}
        />
      ))}

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Breathing animation background circle */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,192,203,0.15), transparent)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        />

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#c2185b",
              mb: 6,
              fontFamily: "'Outfit', sans-serif",
              fontSize: { xs: "1.8rem", md: "2.8rem" },
              textShadow: "0 2px 10px rgba(193, 24, 91, 0.1)",
            }}
          >
            {messages[0]}
          </Typography>
        </motion.div>

        {/* Cycling messages */}
        <Box sx={{ minHeight: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <motion.div
            key={messageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#d81b60",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                lineHeight: 1.8,
                fontSize: { xs: "1.2rem", md: "1.6rem" },
              }}
            >
              {messages[messageIndex]}
            </Typography>
          </motion.div>
        </Box>

        {/* Soft ambient text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#c2185b",
              mt: 6,
              fontFamily: "'Outfit', sans-serif",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              fontStyle: "italic",
              opacity: 0.8,
            }}
          >
            This is your safe space. Breathe. Rest. Just be. ❤️
          </Typography>
        </motion.div>

        {/* Breath indicator dots */}
        <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", mt: 6 }}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [0.7, 1.2, 0.7], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2.5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#ff4081",
              }}
            />
          ))}
        </Box>
      </Container>

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </Box>
  );
}
