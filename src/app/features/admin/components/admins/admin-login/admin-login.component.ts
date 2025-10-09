import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminsService } from '../../../../../core/services/admins.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule , RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  protected adminEmail!: string;
  protected adminPassword!: string;
  constructor(private router: Router, private serv: AdminsService , private toster : ToastrService ) {}
  onSubmit(){
    this.serv.get().subscribe((data:any)=>{
      let admin = data.find((userData : any)=>{
        return userData.email == this.adminEmail && userData.password == this.adminPassword
      })
      if(admin){
        localStorage.setItem('adminData',admin)
        this.router.navigateByUrl('/admin/home')
        this.toster.success("Welcome Back!")
        setTimeout(() => {
      window.location.reload()
    }, 300);
      }else{
        this.toster.error("Wrong Email Or Password")
      }

    })
  }
}
