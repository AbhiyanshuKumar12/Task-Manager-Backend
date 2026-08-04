import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
    console.log(req.body);

    res.json({
        message: "User data received successfully",
        data: req.body,
    });
});

export default router;