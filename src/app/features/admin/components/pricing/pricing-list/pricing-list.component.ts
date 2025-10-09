import { Component } from '@angular/core';
import { PricingService } from '../../../../../core/services/pricing.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pricing-list',
  imports: [RouterLink , CurrencyPipe],
  templateUrl: './pricing-list.component.html',
  styleUrl: './pricing-list.component.css'
})
export class PricingListComponent {
  allData! : any
  constructor(private serv : PricingService , private router : Router , private toster : ToastrService){
    this.showData()
  }
  showData(){
    this.serv.get().subscribe((data : any)=>{
      this.allData = data
    })
  }
  remove(id : any){
    this.serv.delete(id).subscribe((data)=>{
      this.toster.error('Remove Successful')
      this.showData()
    })
  }
}
