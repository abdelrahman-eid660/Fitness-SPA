import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TrainnerService } from '../../../../core/services/trainner.service';

@Component({
  selector: 'app-team',
  imports: [RouterLink],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
alldata! : any
  constructor(private serv : TrainnerService){
    this.showData()
  }
  showData(){
    this.serv.get().subscribe((data)=>{
      this.alldata = data
    })
  }
  }
