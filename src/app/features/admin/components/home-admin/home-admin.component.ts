import { Component } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  imports: [],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {
constructor(){
}
refresh(){
  if(localStorage.getItem("adminData")){
  }
}
}
