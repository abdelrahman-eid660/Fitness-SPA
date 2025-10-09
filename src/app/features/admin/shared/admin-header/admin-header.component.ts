import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-header',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
   loginData : any = localStorage.getItem("adminData")
  constructor(private toster : ToastrService , private router : Router){

  }
  loginOut(){
    localStorage.removeItem("adminData")
    window.location.reload()
    this.toster.success("","Login Out Successful")
    this.router.navigateByUrl("/admin/login")
  }
}
