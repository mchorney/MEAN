import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    goldCount = 0;
    message = [];
    constructor() { }
    farmNumbers() {
        let farmNum = Math.floor(Math.random() * (6 - 2) + 2);
        this.goldCount += farmNum;
        this.message.push("You've earned", farmNum, "gold at the farm")
        return this.message;
    }
    caveNumbers() {
        let caveNum = Math.floor(Math.random() * (11 - 5) + 5);
        this.goldCount += caveNum;
        this.message.push("You've earned", caveNum, "gold at the farm")
        return this.message;
    }
    casinoNumbers() {
        let casinoNum = Math.floor(Math.random() * (101 - 1) + 1);
        this.goldCount += casinoNum;
        this.message.push("You've earned", casinoNum, "gold at the farm")
        return this.message;
    }
    houseNumbers() {
        let houseNum = Math.floor(Math.random() * (16 - 7) + 7);
        this.goldCount += houseNum;
        this.message.push("You've earned", houseNum, "gold at the farm")
        return this.message;
    }
    updatedGold() {
        return this.goldCount;
    }
    updatedMessage() {
        return this.message;
    }
}