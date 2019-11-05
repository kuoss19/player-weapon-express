import Weapon from "./weapon";

export default class Knife extends Weapon {
  constructor() {
    super("칼", 20);
  }
  attack() {
    console.log(this.name + "로 찔렀습니다.");
    return this.power;
  }
}
