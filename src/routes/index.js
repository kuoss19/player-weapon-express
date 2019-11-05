import express from "express";

import battle from "./battle";

const router = express.Router();

// 기본으로 접속하면 띄워줄 페이지
router.get("/", (req, res) => {
  console.log("Client Connected");
  res.render("input.html");
});

export { battle };
export default router;
