import { Component } from '@angular/core';
import { TrainnerService } from '../../../../../core/services/trainner.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trainner-list',
  imports: [RouterLink],
  templateUrl: './trainner-list.component.html',
  styleUrl: './trainner-list.component.css'
})
export class TrainnerListComponent {
  alldata! : any
  constructor(private serv : TrainnerService){
    this.showData()
  }
  showData(){
    this.serv.get().subscribe((data)=>{
      this.alldata = data
    })
  }
  remove(id : any){
    this.serv.delete(id).subscribe((data)=>{
      this.showData()
    })
  }
}
