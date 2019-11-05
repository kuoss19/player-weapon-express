import Player from "../models/player";

let p1 = new Player("재환", 5, 300);
p1.setGun();
let p2 = new Player("수진", 40, 300);

while (p1.hp > 0 && p2.hp > 0) {
  p1.attack(p2);
  p2.attack(p1);
}

if (p1.hp > p2.hp) {
  console.log(`${p1.name}의 승리`);
} else {
  console.log(`${p2.name}의 승리`);
}
