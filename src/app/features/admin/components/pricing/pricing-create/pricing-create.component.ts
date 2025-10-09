import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PricingService } from '../../../../../core/services/pricing.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing-create',
  imports: [ReactiveFormsModule],
  templateUrl: './pricing-create.component.html',
  styleUrl: './pricing-create.component.css'
})
export class PricingCreateComponent {
  constructor(private serv : PricingService , private fb :FormBuilder , private toster : ToastrService , private router : Router){
    this.createForm()
  }
  pricingForm! : FormGroup
  createForm(){
    this.pricingForm = this.fb.group({
      name : ['',[Validators.required]],
      img : ['',[Validators.required]],
      long : ['',[Validators.required]],
      price : ['',[Validators.required]],
      feature1 : ['',[Validators.required]],
      feature2 : ['',[Validators.required]],
      feature3 : ['',[Validators.required]],
      feature4 : ['',[Validators.required]],
      feature5 : ['',[Validators.required]],
    })
  }
  get controls (){
   return this.pricingForm.controls
  }
  onSubmit(){
    this.serv.post(this.pricingForm.value).subscribe((data)=>{
      this.router.navigateByUrl('/admin/pl')
      this.toster.success("success","Pricing Plane Create Successfuly",{
        timeOut : 3000
      })
    })
  }
}
