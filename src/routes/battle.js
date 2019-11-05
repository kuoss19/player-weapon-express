import Player from "../models/player";
import express from "express";

const router = express.Router();

let p1;
let p2;

// index.html에서 submit시 여기로 와서 데이터를 battle.ejs로 넘겨줌
router.post("/battle", (req, res) => {
  console.log("Connected to Battle");

  p1 = new Player(
    req.body.Name1,
    Number(req.body.Power1),
    Number(req.body.Hp1)
  );
  p2 = new Player(
    req.body.Name2,
    Number(req.body.Power2),
    Number(req.body.Hp2)
  );

  if (req.body.w1 === "Gun") {
    p1.setGun();
  } else if (req.body.w1 === "Knife") {
    p1.setKnife();
  }

  if (req.body.w2 === "Gun") {
    p2.setGun();
  } else if (req.body.w2 === "Knife") {
    p2.setKnife();
  }

  res.render("battle", {
    pl1: p1,
    pl2: p2
  });
});

// 공격하기 누르면 호출되는 것
router.get("/battle", (req, res) => {
  if (req.query.a == "공격1") {
    p1.attack(p2);
  } else {
    p2.attack(p1);
  }

  res.render("battle", {
    pl1: p1,
    pl2: p2
  });
});

export default router;