import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/api/services/cart.service";
import { CartInterface } from "src/app/api/models/cart.interface";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  public carts: Array<CartInterface> = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(data => {
      this.carts = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      });
    });
  }
  public deleteCart(i) {
    this.cartService.deleteCart(this.carts[i].id);
  }
  public saveCart(i) {
    this.cartService.saveCart(this.carts[i].id, this.carts[i].amount);
  }
}
