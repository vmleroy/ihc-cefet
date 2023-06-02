import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log("frontend is requesting");
  res.status(200).send({ message: "backend is responding" });
});

export default router;
