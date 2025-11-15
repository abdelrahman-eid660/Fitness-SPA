import { Injectable } from '@angular/core';
import { ApifunctionsService } from './apifunctions.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService extends ApifunctionsService{

  constructor(protected override http : HttpClient) {
    super("https://fitness.eida0556.workers.dev/subscriptions" , http)
   }
}
