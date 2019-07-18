import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/api/services/auth.services";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public isOpen: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
  public logOut() {
    this.authService.logOut();
  }
}
