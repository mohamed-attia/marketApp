import { Component, OnInit, OnDestroy } from "@angular/core";
import { GoodModel } from "src/app/api/models/goods.interface";
import { HomeService } from "src/app/api/services/home.service";
import { Subscription } from "rxjs";
import { CartService } from "src/app/api/services/cart.service";
import { AuthService } from "src/app/api/services/auth.services";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  public goods: GoodModel[];
  public unSubscribeData = new Subscription();
  public add: number = -1;

  constructor(private router:Router, private authService: AuthService, private homeService: HomeService, private cartService: CartService) {}

  ngOnInit() {
    this.getAllGoods();
  }

  public addtoCart(i: number) {
    if(this.authService.userId) this.add = +i;
    else this.router.navigate(['/login'])
  }

  public getAllGoods() {
    this.unSubscribeData = this.homeService.getAllGoods().subscribe(data => {
      console.log(data)
      this.goods = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      });
    });
  }
  public buy(amount: number) {
    let selectedGood = this.goods[this.add];
    let data = {
      name:selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    }
    this.cartService.addToCart(data).then(res=>{
      this.add = -1
    })
  }
  ngOnDestroy() {
    this.unSubscribeData.unsubscribe();
  }
}
