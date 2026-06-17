import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Snackbar,
  Fade,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LockIcon from "@mui/icons-material/Lock";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import LockOpenIcon from "@mui/icons-material/LockOpen";


const MOMENT_CARDS = [
  {
    title: "This photo I looked at when I missed you.",
    detail: "Every time I saw this, it felt like you were right there beside me, even when we were far away.",
  },
  {
    title: "This message made my entire week.",
    detail: "Your words turned a normal day into one I replayed in my mind for days.",
  },
  {
    title: "This was the day I realized you had become important to me.",
    detail: "That moment changed everything. Suddenly every future plan felt brighter because you were in it.",
  },
];

const RELIVE_TIMELINE = [
  { time: "9:00 AM", note: "I woke up excited because I knew I'd talk to you." },
  { time: "11:43 PM", note: "I didn't want the conversation to end." },
  { time: "2:15 PM", note: "A random memory you shared made me smile for the whole afternoon." },
  { time: "8:30 PM", note: "I replayed your voice message and felt like we were together." },
];

const LOCKED_MEMORIES = [
  { title: "The first thing I noticed about you.", detail: "The way your eyes lit up when you laughed — it was effortless and unforgettable." },
  { title: "The moment I became protective of you.", detail: "When I saw someone hurt your feelings, I wanted to stand between you and the world." },
  { title: "The memory I revisit most often.", detail: "That quiet night when we stayed up until sunrise sharing our dreams." },
];

const MOOD_OPTIONS = [
  {
    id: "happy",
    label: "Happy 😊",
    emoji: "😊",
    title: "A Warm Happy Heart",
    message: "When you're happy, the whole world feels brighter. Every laugh of yours is my favorite sound. Keep shining, love.",
    bg: "linear-gradient(135deg, #ff8a65, #ffccbc)",
  },
  {
    id: "sad",
    label: "Sad 😢",
    emoji: "😢",
    title: "A Gentle Comfort",
    message: "I wish I could take your sadness away. You're never alone — I'm always right beside you.",
    bg: "linear-gradient(135deg, #90caf9, #e3f2fd)",
  },
  {
    id: "angry",
    label: "Angry 😤",
    emoji: "😤",
    title: "A Calm After Fire",
    message: "It's okay to feel angry. I'm here to listen, understand, and make things better with all my heart.",
    bg: "linear-gradient(135deg, #ef9a9a, #ffccbc)",
  },
  {
    id: "missing",
    label: "Missing You ❤️",
    emoji: "❤️",
    title: "A Sweet Missing Note",
    message: "Every moment apart makes me love you more. I close my eyes and count the seconds until I see you again.",
    bg: "linear-gradient(135deg, #f48fb1, #fce4ec)",
  },
];

const HIDDEN_NOTES = [
  { title: "This was the moment I almost told you...", detail: "The silence felt full, and I wanted to say everything with just one look." },
  { title: "This photo made my entire day.", detail: "It reminded me that the smallest moments with you become the biggest memories." },
  { title: "I still smile when I remember this.", detail: "That awkward, sweet word you said in the middle of the night — I carry it with me always." },
];

const HEART_BEATS = ["You", "Are", "My", "Favorite", "Person"];
const NOTIFICATIONS = [
  "Reminder: Someone misses you.",
  "Alert: Your smile is currently being thought about.",
  "System Warning: Cute girl detected.",
  "Update: Your laugh is the highlight of today.",
];

const CONFETTI_STEPS = Array.from({ length: 18 }, (_, idx) => ({
  id: idx,
  left: `${10 + idx * 5}%`,
  delay: `${idx * 0.1}s`,
  size: 6 + Math.random() * 8,
  color: ["#ff4081", "#ff80ab", "#ffd54f", "#81c784", "#4fc3f7"][idx % 5],
}));

function RomanticExtras() {
  const [openMoment, setOpenMoment] = useState(null);
  const [unlockedCount, setUnlockedCount] = useState(0);
  const [activeMood, setActiveMood] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [hiddenActive, setHiddenActive] = useState(Array(HIDDEN_NOTES.length).fill(false));
  const [heartbeatIndex, setHeartbeatIndex] = useState(0);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimelineVisible(true);
      },
      { threshold: 0.25 }
    );
    if (timelineRef.current) observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prev) => {
        const next = NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)];
        const id = Date.now();
        return [...prev.slice(-2), { id, text: next }];
      });
    }, 11000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartbeatIndex((prev) => (prev < HEART_BEATS.length ? prev + 1 : prev));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const unlockMemory = () => {
    setUnlockedCount((prev) => Math.min(prev + 1, LOCKED_MEMORIES.length));
  };

  const dismissNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <Box sx={{ animation: "fadeInUp 0.6s ease", mt: 2, pb: 10, position: "relative" }}>
      <Box sx={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.18 }}>
        {CONFETTI_STEPS.map((piece) => (
          <Box
            key={piece.id}
            sx={{
              position: "absolute",
              top: `${piece.id * 3}%`,
              left: piece.left,
              width: piece.size,
              height: piece.size,
              bgcolor: piece.color,
              borderRadius: "50%",
              animation: "float 8s ease-in-out infinite",
              opacity: 0.75,
              animationDelay: piece.delay,

            }}
          />
        ))}
      </Box>

      <Box sx={{ mb: 6, position: "relative", zIndex: 1 }}>
        <Typography variant="h4" sx={{ fontFamily: "'Pacifico', cursive", color: "#ff4081", textAlign: "center", mb: 1 }}>
          🌟 Romantic Extras
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: "'Outfit', sans-serif", color: "#4a4a4a", textAlign: "center", maxWidth: 720, mx: "auto" }}>
          New independent modules created to keep the original site untouched. Enjoy hidden memories, click-to-reveal cards, mood moments, and a cinematic heartbeat experience.
        </Typography>
      </Box>

      <Box sx={{ mb: 8, position: "relative", zIndex: 1 }}>
        <Typography variant="h5" sx={{ fontFamily: "'Outfit', sans-serif", color: "#c62828", fontWeight: "bold", mb: 3 }}>
          🌹 MOMENTS YOU NEVER KNEW ABOUT
        </Typography>
        <Grid container spacing={3}>
          {MOMENT_CARDS.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 5,
                  background: "linear-gradient(135deg, rgba(255, 235, 238, 0.9), rgba(255, 255, 255, 0.98))",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
                  <MenuBookIcon sx={{ color: "#d81b60", fontSize: 28 }} />
                  <Typography fontWeight="bold" sx={{ fontFamily: "'Outfit', sans-serif", color: "#d81b60" }}>
                    Sealed Memory
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ fontFamily: "'Outfit', sans-serif", color: "#374151", mb: 3, minHeight: 72 }}>
                  {item.title}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => setOpenMoment(item)}
                  sx={{ bgcolor: "#ff4081", color: "#fff", borderRadius: 20, textTransform: "none" }}
                >
                  Open the letter
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog open={!!openMoment} onClose={() => setOpenMoment(null)} fullWidth maxWidth="sm" PaperProps={{ sx: { borderRadius: 4, overflow: "hidden" } }}>
          <DialogTitle sx={{ bgcolor: "#ffebee", color: "#d81b60", fontFamily: "'Outfit', sans-serif" }}>
            {openMoment?.title}
            <IconButton onClick={() => setOpenMoment(null)} sx={{ position: "absolute", right: 12, top: 12 }} size="small">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ background: "#fff0f5", p: 4 }}>
            <Typography sx={{ fontFamily: "'Outfit', sans-serif", color: "#424242", lineHeight: 1.8 }}>
              {openMoment?.detail}
            </Typography>
          </DialogContent>
        </Dialog>
      </Box>

      <Box sx={{ mb: 8, position: "relative", zIndex: 1 }} ref={timelineRef}>
        <Typography variant="h5" sx={{ fontFamily: "'Outfit', sans-serif", color: "#7b1fa2", fontWeight: "bold", mb: 3 }}>
          ⏰ IF WE COULD RELIVE ONE DAY
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {RELIVE_TIMELINE.map((item, index) => (
            <Card
              key={index}
              sx={{
                p: 3,
                borderRadius: 5,
                background: "rgba(255,255,255,0.95)",
                border: "1px solid rgba(124, 77, 255, 0.15)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
                opacity: timelineVisible ? 1 : 0,
                transform: timelineVisible ? "none" : "translateY(24px)",
                transition: `opacity 0.65s ease ${index * 0.12}s, transform 0.65s ease ${index * 0.12}s`,
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#d81b60", mb: 1, fontFamily: "'Outfit', sans-serif" }}>
                {item.time}
              </Typography>
              <Typography sx={{ color: "#424242", fontFamily: "'Outfit', sans-serif", lineHeight: 1.8 }}>
                {item.note}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 8, position: "relative", zIndex: 1 }}>
        <Typography variant="h5" sx={{ fontFamily: "'Outfit', sans-serif", color: "#2e7d32", fontWeight: "bold", mb: 3 }}>
          🗝️ THINGS I NEVER SAID OUT LOUD
        </Typography>
        <Grid container spacing={3}>
          {LOCKED_MEMORIES.map((item, index) => {
            const locked = index >= unlockedCount;
            return (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    p: 4,
                    minHeight: 220,
                    borderRadius: 5,
                    background: locked ? "rgba(238,238,238,0.95)" : "linear-gradient(135deg, rgba(255,240,245,0.95), rgba(255,255,255,0.98))",
                    border: "1px solid rgba(233,30,99,0.16)",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
                    cursor: locked ? "pointer" : "default",
                  }}
                  onClick={locked ? unlockMemory : undefined}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: "bold", fontFamily: "'Outfit', sans-serif", color: "#424242" }}>
                        {item.title}
                      </Typography>
                    </Box>
                    <Box>
                      {locked ? <LockIcon sx={{ color: "#b0bec5" }} /> : <LockOpenIcon sx={{ color: "#d81b60" }} />}
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ fontFamily: "'Outfit', sans-serif", color: locked ? "#9e9e9e" : "#424242", lineHeight: 1.8 }}>
                    {locked ? "Tap to unlock the next memory." : item.detail}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button variant="outlined" onClick={unlockMemory} sx={{ borderRadius: 20, color: "#d81b60", borderColor: "#d81b60", textTransform: "none" }}>
            Unlock next memory
          </Button>
        </Box>
      </Box>

      <Box sx={{ mb: 8, position: "relative", zIndex: 1 }}>
        <Typography variant="h5" sx={{ fontFamily: "'Outfit', sans-serif", color: "#6a1b9a", fontWeight: "bold", mb: 3 }}>
          🧸 MOOD SELECTOR
        </Typography>
        <Grid container spacing={2}>
          {MOOD_OPTIONS.map((mood) => (
            <Grid item xs={12} sm={6} md={3} key={mood.id}>
              <Button
                fullWidth
                onClick={() => setActiveMood(mood)}
                sx={{
                  minHeight: 120,
                  borderRadius: 4,
                  bgcolor: mood.bg,
                  color: "#424242",
                  textTransform: "none",
                  boxShadow: "0 14px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.25s ease",
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 18px 35px rgba(0,0,0,0.14)' },
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h4">{mood.emoji}</Typography>
                  <Typography sx={{ mt: 1, fontWeight: "bold", fontFamily: "'Outfit', sans-serif" }}>{mood.label}</Typography>
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>
        <Dialog open={!!activeMood} onClose={() => setActiveMood(null)} fullWidth maxWidth="sm" PaperProps={{ sx: { borderRadius: 5 } }}>
          <DialogTitle sx={{ background: "#fff0f5", color: "#d81b60", fontFamily: "'Outfit', sans-serif" }}>
            {activeMood?.title}
            <IconButton onClick={() => setActiveMood(null)} sx={{ position: "absolute", right: 12, top: 12 }} size="small">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ pb: 4, pt: 3, background: activeMood?.bg || "#f8bbd0" }}>
            <Typography variant="body1" sx={{ fontFamily: "'Outfit', sans-serif", color: "#424242", mb: 3, lineHeight: 1.8 }}>
              {activeMood?.message}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "'Outfit', sans-serif", color: "#616161" }}>
              Each mood has a memory written just for you — press the button again whenever you want to feel it again.
            </Typography>
          </DialogContent>
        </Dialog>
      </Box>

      <Box sx={{ mb: 8, position: "relative", zIndex: 1 }}>
        <Typography variant="h5" sx={{ fontFamily: "'Outfit', sans-serif", color: "#d81b60", fontWeight: "bold", mb: 3 }}>
          📱 FAKE NOTIFICATIONS
        </Typography>
        <Typography variant="body2" sx={{ color: "#616161", mb: 4, fontFamily: "'Outfit', sans-serif" }}>
          Little floating reminders appear from time to time — close them when you want.
        </Typography>
        <Box sx={{ minHeight: 120, position: "relative" }}>
          {notifications.map((notification) => (
            <Fade key={notification.id} in timeout={500}>
              <Card
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: `${20 + notification.id % 3 * 18}%`,
                  transform: "translateX(-50%)",
                  p: 2,
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(233,30,99,0.18)",
                  width: { xs: "92%", md: "70%" },
                  boxShadow: "0 14px 30px rgba(0,0,0,0.08)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <NotificationsActiveIcon sx={{ color: "#d81b60" }} />
                    <Typography sx={{ fontFamily: "'Outfit', sans-serif", color: "#424242" }}>
                      {notification.text}
                    </Typography>
                  </Box>
                  <IconButton onClick={() => dismissNotification(notification.id)} size="small">
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Card>
            </Fade>
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 8, position: "relative", zIndex: 1 }}>
        <Typography variant="h5" sx={{ fontFamily: "'Outfit', sans-serif", color: "#6a1b9a", fontWeight: "bold", mb: 3 }}>
          📚 THINGS YOU'LL NEVER KNOW
        </Typography>
        <Grid container spacing={3}>
          {HIDDEN_NOTES.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                onClick={() => setHiddenActive((prev) => prev.map((value, i) => (i === index ? !value : value)))}
                sx={{
                  p: 4,
                  minHeight: 220,
                  borderRadius: 5,
                  cursor: "pointer",
                  background: "rgba(255,255,255,0.96)",
                  border: "1px solid rgba(124,77,255,0.16)",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
                }}
              >
                <Box sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                  <HeartBrokenIcon sx={{ color: "#7b1fa2" }} />
                  <Typography fontWeight="bold" sx={{ fontFamily: "'Outfit', sans-serif", color: "#424242" }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontFamily: "'Outfit', sans-serif", color: hiddenActive[index] ? "#424242" : "#9e9e9e", lineHeight: 1.8, minHeight: 80 }}>
                  {hiddenActive[index] ? item.detail : "Tap to reveal the hidden note."}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mb: 8, position: "relative", zIndex: 1 }}>
        <Typography variant="h5" sx={{ fontFamily: "'Outfit', sans-serif", color: "#c2185b", fontWeight: "bold", mb: 3 }}>
          ❤️ HEARTBEAT PAGE
        </Typography>
        <Card sx={{ p: 5, borderRadius: 6, background: "linear-gradient(135deg, rgba(255,240,245,0.95), rgba(255,255,255,0.98))", boxShadow: "0 18px 40px rgba(0,0,0,0.08)", overflow: "hidden", position: "relative" }}>
          <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(255,64,129,0.04)", pointerEvents: "none" }} />
          <Box sx={{ position: "relative", zIndex: 1, minHeight: 320, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, animation: "heartbeat 1.4s ease-in-out infinite" }}>
              <FavoriteIcon sx={{ color: "#d81b60", fontSize: 38 }} />
              <Typography variant="h6" sx={{ fontFamily: "'Outfit', sans-serif", fontWeight: "bold", color: "#d81b60" }}>
                Feel the rhythm
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontFamily: "'Pacifico', cursive", color: "#c2185b", textAlign: "center", minHeight: 80 }}>
              {heartbeatIndex > 0 ? HEART_BEATS[heartbeatIndex - 1] : "..."}
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "'Outfit', sans-serif", color: "#424242", textAlign: "center", maxWidth: 520 }}>
              {heartbeatIndex >= HEART_BEATS.length ? "You are my favorite person." : "A new word reveals with every beat."}
            </Typography>
          </Box>
        </Card>
      </Box>

      {notifications.map((notification) => (
        <Snackbar
          key={notification.id}
          open
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          message={notification.text}
          action={
            <Button color="inherit" size="small" onClick={() => dismissNotification(notification.id)}>
              Dismiss
            </Button>
          }
          sx={{ mb: 2 }}
        />
      ))}
    </Box>
  );
}

export default RomanticExtras;
