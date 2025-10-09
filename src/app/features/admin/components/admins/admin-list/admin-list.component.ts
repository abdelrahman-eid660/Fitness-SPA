import { Component } from '@angular/core';
import { AdminsService } from '../../../../../core/services/admins.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  imports: [RouterLink],
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css'
})
export class AdminListComponent {
  alldata! : any
  constructor(private serv : AdminsService){
    this.showData()
  }
  showData(){
    this.serv.get().subscribe((data)=>{
      this.alldata = data
    })
  }
  remove(id : any){
    this.serv.delete(id).subscribe((data : any)=>{
      this.showData()
    })
  }
}
