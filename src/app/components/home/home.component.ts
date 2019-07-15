import { Component, OnInit } from "@angular/core";
import { GoodModel } from "src/app/api/models/goods.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public goods: GoodModel[] = [
    {
      name: "orange",
      price: "5",
      photoUrl: "assets/imgs/1.jpg"
    },
    {
      name: "apple",
      price: "6",
      photoUrl: "assets/imgs/2.jpg"
    },
    {
      name: "kiwi",
      price: "7",
      photoUrl: "assets/imgs/3.jpg"
    },
    {
      name: "strawberry",
      price: "7",
      photoUrl: "assets/imgs/4.jpg"
    }
  ];
  constructor() {}

  ngOnInit() {}

  public addtoCart(i){
    console.log(i)
  }
}
