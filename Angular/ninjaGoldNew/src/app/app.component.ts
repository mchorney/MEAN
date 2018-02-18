import { Component, DoCheck } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  goldCount: number = 0;

  constructor(private _dataService: DataService) { }

  ngDoCheck() {
    this.goldCount = this._dataService.updatedGold();
  }
}
