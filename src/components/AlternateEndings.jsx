import { useState } from "react";
import { Box, Typography, Container, Card, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function AlternateEndings() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [showEnding, setShowEnding] = useState(false);

  const stories = [
    {
      id: 1,
      title: "If we met earlier",
      emoji: "⏰",
      content: "If we met earlier, we would have had more time. But perhaps the timing was perfect—not a moment sooner, not a moment later. Every day before you led me closer to the day I found you.",
    },
    {
      id: 2,
      title: "If we met later",
      emoji: "🌙",
      content: "If we met later, I would have waited. The universe could have delayed our meeting by years, and it wouldn't have changed what I feel. True connections transcend time.",
    },
    {
      id: 3,
      title: "If we lived in the same city",
      emoji: "🏙️",
      content: "If we lived in the same city, I'd see you every day. But even now, with the distance between us, you're the first thought in my mind every morning and my last before sleep.",
    },
    {
      id: 4,
      title: "If we never met",
      emoji: "❌",
      content: "If we never met, I would have spent my whole life searching without knowing what I was looking for. But in every lifetime, across every possibility, I'd still search for you.",
    },
  ];

  const commonEnding = "I'd still search for you.";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f3e5f5 100%)",
        py: 6,
        px: 2,
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
            📖 Alternate Endings
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
            Every story leads to the same conclusion...
          </Typography>
        </motion.div>

        {/* Story cards grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 3,
            mb: 6,
          }}
        >
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateZ: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  onClick={() => {
                    setSelectedStory(story);
                    setShowEnding(false);
                  }}
                  sx={{
                    p: 4,
                    background: "linear-gradient(135deg, #fff5f8, #fff0f5)",
                    border: "2px solid rgba(233, 30, 99, 0.2)",
                    borderRadius: 3,
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 220,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 15px 40px rgba(233, 30, 99, 0.2)",
                      borderColor: "#ff4081",
                    },
                  }}
                >
                  {/* Corner fold */}
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
                      fontSize: "3rem",
                      mb: 2,
                    }}
                  >
                    {story.emoji}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Outfit', sans-serif",
                      color: "#c2185b",
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {story.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    Click to read...
                  </Typography>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </Box>

        {/* Story modal/detail view */}
        <AnimatePresence>
          {selectedStory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
                padding: 16,
              }}
              onClick={() => setSelectedStory(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                transition={{ duration: 0.5, type: "spring" }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  perspective: 1200,
                  transformStyle: "preserve-3d",
                }}
              >
                <Card
                  sx={{
                    p: { xs: 3, md: 5 },
                    maxWidth: 500,
                    background: "linear-gradient(135deg, #fff5f8, #fff0f5)",
                    border: "2px solid rgba(233, 30, 99, 0.3)",
                    borderRadius: 4,
                    boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Book page header */}
                  <Box sx={{ mb: 3, pb: 3, borderBottom: "2px solid rgba(233, 30, 99, 0.2)" }}>
                    <Typography
                      sx={{
                        fontSize: "2.5rem",
                        mb: 1,
                      }}
                    >
                      {selectedStory.emoji}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Outfit', sans-serif",
                        color: "#c2185b",
                        fontWeight: 700,
                      }}
                    >
                      {selectedStory.title}
                    </Typography>
                  </Box>

                  {/* Story content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "1.1rem",
                        color: "#333",
                        lineHeight: 1.8,
                        mb: 4,
                        fontStyle: "italic",
                      }}
                    >
                      {selectedStory.content}
                    </Typography>
                  </motion.div>

                  {/* Ending reveal */}
                  <AnimatePresence>
                    {!showEnding && (
                      <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Button
                          onClick={() => setShowEnding(true)}
                          fullWidth
                          sx={{
                            borderRadius: 20,
                            bgcolor: "#ff4081",
                            color: "#fff",
                            fontWeight: 700,
                            textTransform: "none",
                            fontSize: "1rem",
                            "&:hover": { bgcolor: "#e91e63" },
                          }}
                        >
                          Turn the page...
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {showEnding && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Caveat', cursive",
                          fontSize: "1.8rem",
                          color: "#d81b60",
                          fontWeight: 700,
                          textAlign: "center",
                          mb: 3,
                          pt: 2,
                        }}
                      >
                        {commonEnding}
                      </Typography>

                      <Button
                        onClick={() => setSelectedStory(null)}
                        fullWidth
                        sx={{
                          borderRadius: 20,
                          bgcolor: "#fff",
                          color: "#ff4081",
                          border: "2px solid #ff4081",
                          fontWeight: 700,
                          textTransform: "none",
                          fontSize: "1rem",
                          "&:hover": { bgcolor: "#fff0f5" },
                        }}
                      >
                        Close story
                      </Button>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
}
