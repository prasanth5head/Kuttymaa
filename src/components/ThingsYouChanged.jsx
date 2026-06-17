import { useState, useEffect, useRef } from "react";
import { Box, Typography, Container, Card } from "@mui/material";
import { motion } from "framer-motion";

export default function ThingsYouChanged() {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef({});

  const notes = [
    { id: 1, text: "You made me look forward to ordinary days." },
    { id: 2, text: "You made distance feel smaller." },
    { id: 3, text: "You taught me that trust can feel effortless." },
    { id: 4, text: "You showed me love isn't just a feeling, it's a choice." },
    { id: 5, text: "You made my quietest thoughts feel valuable." },
    { id: 6, text: "You changed how I see myself." },
    { id: 7, text: "You taught me that being vulnerable isn't weakness." },
    { id: 8, text: "You made me believe in second chances." },
  ];

  useEffect(() => {
    const observers = {};
    
    notes.forEach((note) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [note.id]: true }));
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.3 }
      );

      if (cardRefs.current[note.id]) {
        observer.observe(cardRefs.current[note.id]);
      }
      observers[note.id] = observer;
    });

    return () => {
      Object.values(observers).forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f5e4f5 100%)",
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 700,
              color: "#c2185b",
              mb: 2,
              fontFamily: "'Outfit', sans-serif",
              fontSize: { xs: "1.8rem", md: "2.8rem" },
            }}
          >
            🌹 Things You Changed Without Knowing
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#d81b60",
              mb: 6,
              fontFamily: "'Outfit', sans-serif",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              fontStyle: "italic",
            }}
          >
            Scroll down to see how you've quietly transformed my world...
          </Typography>
        </motion.div>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
          {notes.map((note, index) => (
            <div
              key={note.id}
              ref={(el) => {
                cardRefs.current[note.id] = el;
              }}
            >
              <motion.div
                initial={{ opacity: 0, rotateY: -20, y: 30 }}
                animate={
                  visibleCards[note.id]
                    ? { opacity: 1, rotateY: 0, y: 0 }
                    : { opacity: 0, rotateY: -20, y: 30 }
                }
                transition={{
                  duration: 0.8,
                  delay: visibleCards[note.id] ? 0.1 * (index % 2) : 0,
                  ease: "easeOut",
                }}
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                }}
              >
                <Card
                  sx={{
                    p: 3.5,
                    background: "linear-gradient(135deg, #fff5f8, #fff0f5)",
                    border: "2px solid rgba(233, 30, 99, 0.2)",
                    borderRadius: 2,
                    boxShadow: "0 10px 30px rgba(233, 30, 99, 0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
                    position: "relative",
                    minHeight: 180,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px) rotateZ(2deg)",
                      boxShadow: "0 15px 40px rgba(233, 30, 99, 0.15), inset 0 1px 0 rgba(255,255,255,0.5)",
                    },
                    overflow: "hidden",
                  }}
                >
                  {/* Paper texture effect */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: "url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.9%22 numOctaves=%222%22 result=%22noise%22 /%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 fill=%22%23fff%22 filter=%22url(%23noise)%22 opacity=%22.05%22/%3E%3C/svg%3E')",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Corner fold effect */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: 0,
                      height: 0,
                      borderLeft: "40px solid transparent",
                      borderTop: "40px solid rgba(255,192,203,0.3)",
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: { xs: "1.3rem", md: "1.6rem" },
                      color: "#c2185b",
                      fontWeight: 600,
                      lineHeight: 1.6,
                      position: "relative",
                      zIndex: 1,
                      letterSpacing: 0.5,
                    }}
                  >
                    {note.text}
                  </Typography>
                </Card>
              </motion.div>
            </div>
          ))}
        </Box>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{ textAlign: "center", marginTop: 80 }}
        >
          <Typography
            sx={{
              fontFamily: "'Caveat', cursive",
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: "#d81b60",
              fontWeight: 600,
            }}
          >
            And you did it all without even knowing. 💕
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
