import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { GoodService } from "src/app/api/services/good.service";
import { GoodModel } from "src/app/api/models/goods.interface";

@Component({
  selector: "app-good",
  templateUrl: "./good.component.html",
  styleUrls: ["./good.component.css"]
})
export class GoodComponent implements OnInit {
  @ViewChild("image") goodImage: ElementRef;
  constructor(private goodService: GoodService) {}

  ngOnInit() {}
  addNewGood(form: NgForm) {
    this.goodService.addNewGood(
      form.value.name,
      form.value.price,
      this.goodImage.nativeElement.files[0]
    ).then(res=>console.log(res))
  }
}
