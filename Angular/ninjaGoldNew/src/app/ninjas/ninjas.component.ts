import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-ninjas',
    templateUrl: './ninjas.component.html',
    styleUrls: ['./ninjas.component.css']
})
export class NinjasComponent implements OnInit {
    farmgold;
    cavegold;
    casinogold;
    housegold;
    // @Output() myEvent = new EventEmitter();
    constructor(private _dataService: DataService) { }

    ngOnInit() {

    }
    clickFarm() {
        this._dataService.farmNumbers();
    }
    clickCave() {
        this._dataService.caveNumbers();
    }
    clickCasino() {
        this._dataService.casinoNumbers();
    }
    clickHouse() {
        this._dataService.houseNumbers();
    }
}