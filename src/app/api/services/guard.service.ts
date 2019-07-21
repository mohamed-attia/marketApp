import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.services";

@Injectable({
  providedIn: "root"
})
export class GuardService implements CanActivate {
  constructor(private authService: AuthService, private router:Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | Observable<boolean> | Promise<boolean> {
      return new Promise(resolve=>{
          this.authService.user.subscribe(user=>{
              if(user) resolve(true)
              else {
                  resolve(false);
                  this.router.navigate(['/login'])
              }
          })
      })

  }
}
