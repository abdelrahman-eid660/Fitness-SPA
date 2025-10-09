import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminsService } from '../../../../../core/services/admins.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-update.component.html',
  styleUrl: './admin-update.component.css'
})
export class AdminUpdateComponent {
  id : any
  constructor (private activedroute : ActivatedRoute , private serv : AdminsService , private fb : FormBuilder , private router : Router){
    this.id = this.activedroute.snapshot.paramMap.get('id')
    serv.getById(this.id).subscribe((data)=>{
      this.adminsForm.patchValue(data)
    })
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
  update(){
    this.serv.put(this.adminsForm.value , this.id).subscribe((data : any)=>{
      this.router.navigateByUrl("/admin/al")
    })
  }
}
