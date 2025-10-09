import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminsService } from '../../../../../core/services/admins.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-create',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-create.component.html',
  styleUrl: './admin-create.component.css'
})
export class AdminCreateComponent {
  constructor (private serv : AdminsService , private fb : FormBuilder , private router : Router , private toster : ToastrService){
    this.createAdmins()
  }
  adminsForm! : FormGroup
  createAdmins(){
    this.adminsForm = this.fb.group({
      username : ['',[Validators.required]],
      lastname : ['',[Validators.required]],
      email : ['',[Validators.required]],
      phone : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }
  get controls(){
    return this.adminsForm.controls
  }
  register(){
    this.serv.post(this.adminsForm.value).subscribe((data)=>{
      this.toster.success("","Create Account Successful")
      this.router.navigateByUrl('/admin/login')
    })
  }
}
