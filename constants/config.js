const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://triptalk-liart.vercel.app/",
    "https://triptalk-git-main-harshas-projects-402d176d.vercel.app/",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
