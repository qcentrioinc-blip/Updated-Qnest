import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config(); // works locally, env vars come from cPanel in prod

const apiKey = process.env.SAMBANOVA_API_KEY;
if (!apiKey) {
    throw new Error("SAMBANOVA_API_KEY environment variable is not set");
}

const client = new OpenAI({
    apiKey,
    baseURL: "https://api.sambanova.ai/v1",
});

const app = express();

const PORT = Number(process.env.PORT);

const allowedOrigins = [
    "https://qnestglobal.com",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:3000",
];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g. server-to-server, curl, Postman)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST"],
}));

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Backend server is running 🚀");
});

/* ---------------- CHAT ---------------- */
app.post("/api/chat", async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const response = await client.chat.completions.create({
            model: "Meta-Llama-3.3-70B-Instruct",
            messages: [
                { role: "system", content: "Keep the response between 15 to 20 words." },
                { role: "user", content: prompt },
            ],
        });

        res.json({ text: response.choices[0]?.message?.content ?? "" });

    } catch (error: any) {
        console.error("Chat error:", error);
        res.status(500).json({ error: "Failed to generate response" });
    }
});

/* ---------------- STREAM ---------------- */
app.post("/api/chat/stream", async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");
        res.flushHeaders(); // 🔥 REQUIRED for Passenger

        const stream = await client.chat.completions.create({
            model: "Meta-Llama-3.3-70B-Instruct",
            messages: [
                { role: "system", content: "Keep the response between 15 to 20 words." },
                { role: "user", content: prompt },
            ],
            stream: true,
        });

        for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content;
            if (text) {
                res.write(`data: ${JSON.stringify({ text })}\n\n`);
            }
        }

        res.write("data: [DONE]\n\n");
        res.end();

    } catch (error: any) {
        console.error("Stream error:", error);
        res.end();
    }
});

/* ---------------- SEARCH ---------------- */
app.post("/api/chat/search", async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const response = await client.chat.completions.create({
            model: "Meta-Llama-3.3-70B-Instruct",
            messages: [
                { role: "system", content: "Keep the response between 15 to 20 words." },
                { role: "user", content: prompt },
            ],
        });

        res.json({ text: response.choices[0]?.message?.content ?? "" });

    } catch (error: any) {
        console.error("Search error:", error);
        res.status(500).json({ error: "Search failed" });
    }
});

app.listen(PORT, () => {
    console.log("Server started on Passenger port");
});
