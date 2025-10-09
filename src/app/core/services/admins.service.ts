import { Injectable } from '@angular/core';
import { ApifunctionsService } from './apifunctions.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminsService extends ApifunctionsService {

  constructor(protected override http : HttpClient) {
    super("http://localhost:3000/admins" , http )
   }
}
