let latestMessage = "";

export default function handler(req, res) {
    if (req.method === "POST") {
        latestMessage = req.body.message || "";
        return res.status(200).json({ success: true });
    }

    res.status(405).json({ error: "Method not allowed" });
}

export { latestMessage };
