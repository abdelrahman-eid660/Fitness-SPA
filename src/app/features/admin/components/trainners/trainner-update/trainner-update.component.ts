import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrainnerService } from '../../../../../core/services/trainner.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-trainner-update',
  imports: [ReactiveFormsModule],
  templateUrl: './trainner-update.component.html',
  styleUrl: './trainner-update.component.css'
})
export class TrainnerUpdateComponent {
  id : any
  constructor(private serv : TrainnerService , private activedroute : ActivatedRoute , private fb : FormBuilder , private router : Router){
    this.id = this.activedroute.snapshot.paramMap.get('id')
    this.serv.getById(this.id).subscribe((data)=>{
      this.traineerForm.patchValue(data)
    })
    this.creatForm()
  }
  traineerForm! : FormGroup
  creatForm(){
    this.traineerForm = this.fb.group({
      name : ['',[Validators.required]],
      description : ['',[Validators.required]],
      img : ['',[Validators.required]],
    })
  }
  onsubmit(){
    this.serv.put(this.traineerForm.value , this.id).subscribe((data : any)=>{
      this.router.navigateByUrl('/admin/tl')
    })
  }

}
