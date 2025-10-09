import { Component } from '@angular/core';
import { FitnessService } from '../../../../../core/services/fitness.service';
import { Router, RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-courses-list',
  imports: [RouterLink , TitleCasePipe],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  allData! :any
  constructor(private fitnessData : FitnessService , private router : Router){
    this.showData()
  }
  showData(){
    this.fitnessData.get().subscribe((data : any)=>{
      this.allData = data
    })
  }
  remove(id : any){
    this.fitnessData.delete(id).subscribe((data : any)=>{
      this.router.navigateByUrl('/admin/cl')
      this.showData()
    })
  }
}
