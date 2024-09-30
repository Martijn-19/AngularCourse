import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { City } from "../shared/city.models";
import { IFoodType } from "../shared/foodtype.models";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'firstapp';
  name: string = '';
  city: string = '';
  cities: City[] = [];
  foodtype?: IFoodType;



  constructor() {
    this.city = '';
    this.foodtype = {foodId: 0, foodName: '', foodDescription: ''};
  }

  ngOnInit() {
    this.name = 'Martijn';
    this.city = 'Sittard';
    this.cities = [
      new City(1, 'Sittard', 'limburg', 20000),
      new City(2, 'Gulpen', 'limburg', 4000),
      new City(3, 'Drachten', 'Groningen', 3)
    ];

    this.foodtype = {
      foodId: 1,
      foodName: 'Pizza',
      foodDescription: 'Italian food'
    }
  }

  showDetails(city: City) {
    console.log(city.id, city.name, city.population);
  }
}
