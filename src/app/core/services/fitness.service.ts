import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApifunctionsService } from './apifunctions.service';

@Injectable({
  providedIn: 'root',
})
export class FitnessService extends ApifunctionsService {
  constructor(protected override http: HttpClient) {
    super("http://localhost:3000/Courses" , http)
  }

}
