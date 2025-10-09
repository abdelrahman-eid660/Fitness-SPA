import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IApiFunction } from '../interface/Api-interface';

@Injectable({
  providedIn: 'root'
})
export class ApifunctionsService implements IApiFunction {

  constructor(@Inject(String) protected baseUrl : string ,  protected http: HttpClient) {}
  get() {
    return this.http.get(this.baseUrl);
  }
  getById(id : any){
    return this.http.get(this.baseUrl + `/${id}`)
  }
  post(obj : any){
    return this.http.post(this.baseUrl , obj)
  }
  put(obj : any , id : any){
    return this.http.put(this.baseUrl + `/${id}` , obj)
  }
  delete(id : any){
    return this.http.delete(this.baseUrl + `/${id}`)
  }
  auth(){
    if(!localStorage.getItem("adminData")){
      location.replace("/admin/login")
    }
  }
}
