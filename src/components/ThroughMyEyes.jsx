import { useState, useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function ThroughMyEyes() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const comparisons = [
    {
      yourPerspective: "You notice your flaws.",
      myPerspective: "I notice your kindness.",
    },
    {
      yourPerspective: "You worry you're difficult.",
      myPerspective: "I see someone worth understanding.",
    },
    {
      yourPerspective: "You think you're not enough.",
      myPerspective: "You're everything to me.",
    },
    {
      yourPerspective: "You see your insecurities.",
      myPerspective: "I see your strength.",
    },
    {
      yourPerspective: "You doubt your worth.",
      myPerspective: "I see your infinite value.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f3e5f5 100%)",
        py: 6,
        px: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
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
            ✨ If You Could See Yourself Through My Eyes
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
              mb: 6,
              fontFamily: "'Outfit', sans-serif",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              fontStyle: "italic",
            }}
          >
            Scroll slowly to see the perspective shift...
          </Typography>
        </motion.div>

        {/* Comparison sections */}
        {comparisons.map((comparison, index) => (
          <Box
            key={index}
            sx={{
              mb: 8,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
              alignItems: "center",
            }}
          >
            {/* Your Perspective (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Box
                sx={{
                  p: 4,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
                  border: "2px solid rgba(33, 33, 33, 0.2)",
                  borderRadius: 3,
                  backdropFilter: "blur(10px)",
                  textAlign: "center",
                  minHeight: 150,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    color: "#666",
                    fontWeight: 500,
                    lineHeight: 1.6,
                  }}
                >
                  {comparison.yourPerspective}
                </Typography>
              </Box>
            </motion.div>

            {/* Arrow indicator */}
            <motion.div
              animate={{ x: scrollProgress * 20 }}
              transition={{ type: "spring", stiffness: 100 }}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "2rem",
              }}
            >
              ↔️
            </motion.div>

            {/* My Perspective (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Box
                sx={{
                  p: 4,
                  background: "linear-gradient(135deg, #fff0f5, #ffe0eb)",
                  border: "2px solid #ff4081",
                  borderRadius: 3,
                  boxShadow: "0 10px 40px rgba(255, 64, 129, 0.15)",
                  textAlign: "center",
                  minHeight: 150,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Animated glow effect */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle, rgba(255,64,129,0.1), transparent)",
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: { xs: "1.4rem", md: "1.7rem" },
                    color: "#d81b60",
                    fontWeight: 600,
                    lineHeight: 1.6,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {comparison.myPerspective}
                </Typography>
              </Box>
            </motion.div>
          </Box>
        ))}

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          style={{ textAlign: "center", marginTop: 80 }}
        >
          <Box
            sx={{
              p: 4,
              background: "linear-gradient(135deg, #fff0f5, #f3e5f5)",
              border: "2px solid rgba(233, 30, 99, 0.3)",
              borderRadius: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Caveat', cursive",
                fontSize: { xs: "1.6rem", md: "2.2rem" },
                color: "#c2185b",
                fontWeight: 700,
                mb: 2,
              }}
            >
              The difference between who you think you are
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Caveat', cursive",
                fontSize: { xs: "1.6rem", md: "2.2rem" },
                color: "#d81b60",
                fontWeight: 700,
              }}
            >
              and who I see... that's where love lives. ❤️
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
