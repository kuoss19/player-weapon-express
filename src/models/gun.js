import Weapon from "./weapon";

export default class Gun extends Weapon {
  constructor() {
    super("총", 20);
    this.ammo = 5;
  }
  attack() {
    if (this.ammo > 0) {
      console.log(this.name + "으로 공격했습니다");
      this.ammo--;
      return this.power;
    } else {
      console.log("총알이 없습니다.[재장전]");
      this.ammo = 5;
      return 0;
    }
  }
}
