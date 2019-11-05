import Gun from './Gun.js'
import Knife from './Knife.js'

export default class Player{
    constructor(name,power,hp){
        this.name = name;
        this.power = power;
        this.hp = hp;
        this.wp = null;
    }
    attack(Player2){
        let t = this.power;
        console.log(this.name+"이 ");
        if(this.wp != null)
            t += this.wp.attack();
        else
            console.log("주먹으로 때렸습니다.");
        Player2.hp -= t;
    }
    setGun(){
        this.wp = new Gun();
    }
    setKnife(){
        this.wp = new Knife();
    }
}