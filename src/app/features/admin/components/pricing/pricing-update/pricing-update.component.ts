import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PricingService } from '../../../../../core/services/pricing.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pricing-update',
  imports: [ReactiveFormsModule],
  templateUrl: './pricing-update.component.html',
  styleUrl: './pricing-update.component.css'
})
export class PricingUpdateComponent {
  id! : any
  constructor(private serv : PricingService , private fb :FormBuilder , private toster : ToastrService , private activatedroute : ActivatedRoute , private router : Router){
  this.id = this.activatedroute.snapshot.paramMap.get('id')
  this.serv.getById(this.id).subscribe((data:any)=>{
    this.pricingForm.patchValue(data)
  })
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
    this.serv.put(this.pricingForm.value , this.id).subscribe((data : any)=>{
      this.router.navigateByUrl('/admin/pl')
      this.toster.success("success","Pricing Plane Update Successfuly",{
        timeOut : 3000
      })
    })
  }
}
