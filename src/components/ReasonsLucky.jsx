import { useState, useEffect, useRef } from "react";
import { Box, Typography, Container, IconButton, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export default function ReasonsLucky() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  const reasons = [
    "Because you trusted me with your thoughts.",
    "Because you stayed when you could have walked away.",
    "Because talking to you feels like coming home.",
    "Because your smile changes everything.",
    "Because you make me want to be better.",
    "Because you understand me without words.",
    "Because you laugh at my jokes (even the bad ones).",
    "Because you chose me.",
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reasons.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoScrolling, reasons.length]);

  // Handle touch swipe
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    if (touchStart && e.changedTouches[0].clientX) {
      if (touchStart - e.changedTouches[0].clientX > 50) {
        // Swiped left
        setCurrentIndex((prev) => (prev + 1) % reasons.length);
      } else if (e.changedTouches[0].clientX - touchStart > 50) {
        // Swiped right
        setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
      }
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f3e5f5 100%)",
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
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
            🫂 Reasons I Feel Lucky
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#d81b60",
              mb: 4,
              fontFamily: "'Outfit', sans-serif",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              fontStyle: "italic",
            }}
          >
            Swipe or click to discover the reasons...
          </Typography>
        </motion.div>

        {/* Carousel */}
        <Box
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          sx={{
            perspective: 1200,
            mb: 4,
            minHeight: 350,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              style={{
                perspective: 1200,
                transformStyle: "preserve-3d",
              }}
            >
              <Box
                sx={{
                  p: 5,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,240,245,0.9))",
                  backdropFilter: "blur(20px)",
                  border: "2px solid rgba(255,64,129,0.3)",
                  borderRadius: 4,
                  boxShadow:
                    "0 20px 60px rgba(255, 64, 129, 0.2), inset 0 1px 0 rgba(255,255,255,0.5)",
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "grab",
                  userSelect: "none",
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(255,192,203,0.2), transparent)",
                      "radial-gradient(circle at 100% 100%, rgba(255,192,203,0.2), transparent)",
                      "radial-gradient(circle at 0% 0%, rgba(255,192,203,0.2), transparent)",
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                  }}
                />

                {/* Floating hearts */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-20, 20, -20],
                      x: Math.sin(i) * 20,
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      position: "absolute",
                      fontSize: "2rem",
                      zIndex: 1,
                    }}
                  >
                    ❤️
                  </motion.div>
                ))}

                <Typography
                  sx={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: { xs: "1.6rem", md: "2rem" },
                    color: "#d81b60",
                    fontWeight: 700,
                    lineHeight: 1.8,
                    mb: 3,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {reasons[currentIndex]}
                </Typography>

                {/* Card number indicator */}
                <Typography
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                    color: "#c2185b",
                    fontWeight: 600,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {currentIndex + 1} / {reasons.length}
                </Typography>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Navigation controls */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mb: 4,
            flexWrap: "wrap",
          }}
        >
          <IconButton
            onClick={goToPrevious}
            sx={{
              bgcolor: "#ff4081",
              color: "#fff",
              "&:hover": { bgcolor: "#e91e63" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          {/* Dot indicators */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {reasons.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: i === currentIndex ? 1.3 : 1,
                  backgroundColor: i === currentIndex ? "#ff4081" : "#ffb3d9",
                }}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={goToNext}
            sx={{
              bgcolor: "#ff4081",
              color: "#fff",
              "&:hover": { bgcolor: "#e91e63" },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>

        {/* Auto-scroll toggle */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
            startIcon={isAutoScrolling ? <PauseIcon /> : <PlayArrowIcon />}
            sx={{
              borderRadius: 20,
              bgcolor: "#ff4081",
              color: "#fff",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": { bgcolor: "#e91e63" },
            }}
          >
            {isAutoScrolling ? "Pause" : "Auto-Scroll"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
