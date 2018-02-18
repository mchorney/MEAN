import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { NinjasComponent } from './ninjas/ninjas.component';
import { GoldComponent } from './gold/gold.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    NinjasComponent,
    GoldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
