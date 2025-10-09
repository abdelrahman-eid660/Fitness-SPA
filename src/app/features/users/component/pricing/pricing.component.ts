import { Component } from '@angular/core';
import { PricingService } from '../../../../core/services/pricing.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pricing',
  imports: [CurrencyPipe],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  allData! : any
  constructor(private serv : PricingService , private router : Router){
    this.showData()
  }
  showData(){
    this.serv.get().subscribe((data : any)=>{
      this.allData = data
    })
  }
  Join(id : any){
      this.router.navigateByUrl('/users/subscription/' + id)
    }
}
