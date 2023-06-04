import express from "express";
import postService from "./postService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const result = await postService.index(filters);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error in postRoutes.get: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await postService.show(id);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error in postRoutes.get: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await postService.update(id, data);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error in postRoutes.patch: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const result = await postService.create(data);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error in postRoutes.post: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await postService.delete(id);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error in postRoutes.delete: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
