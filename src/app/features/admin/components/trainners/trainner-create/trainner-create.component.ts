import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrainnerService } from '../../../../../core/services/trainner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainner-create',
  imports: [ReactiveFormsModule],
  templateUrl: './trainner-create.component.html',
  styleUrl: './trainner-create.component.css'
})
export class TrainnerCreateComponent {
alldata! : any
  constructor(private serv : TrainnerService , private fb : FormBuilder , private router : Router){
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
    this.serv.post(this.traineerForm.value).subscribe((data : any)=>{
      this.router.navigateByUrl('/admin/tl')
    })
  }

}
