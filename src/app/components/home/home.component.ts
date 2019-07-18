import { Component, OnInit, OnDestroy } from "@angular/core";
import { GoodModel } from "src/app/api/models/goods.interface";
import { HomeService } from "src/app/api/services/home.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  public goods: GoodModel[];
  public unSubscribeData = new Subscription();

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getAllGoods();
  }

  public addtoCart(i) {
    console.log(i);
  }

  public getAllGoods() {
    this.unSubscribeData = this.homeService.getAllGoods().subscribe(data => {
      this.goods = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      });
      // this.goods = data;
    });
  }
  ngOnDestroy() {
    this.unSubscribeData.unsubscribe();
  }
}
