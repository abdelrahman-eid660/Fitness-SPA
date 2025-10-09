import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubscriptionService } from '../../../../../core/services/subscription.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers-list',
  imports: [RouterLink],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.css'
})
export class CustomersListComponent {
  allData! : any
  constructor(private serv : SubscriptionService , private toster : ToastrService){
    this.showData()
  }
  showData(){
    this.serv.get().subscribe((data : any)=>{
      this.allData = data
    })
  }
remove(id : any){
  this.serv.delete(id).subscribe((data : any)=>{
    this.toster.error("","Remove Successful")
    this.showData()
  })
}
}
