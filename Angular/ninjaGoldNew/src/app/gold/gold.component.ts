import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-gold',
    templateUrl: './gold.component.html',
    styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
    message = [];

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        console.log(this.message);
    }
    ngDoCheck() {
        this.message = this._dataService.updatedMessage();
    }

}