import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-users-layout',
  imports: [RouterOutlet ,HeaderComponent, FooterComponent],
  templateUrl: './users-layout.component.html',
  styleUrl: './users-layout.component.css'
})
export class UsersLayoutComponent {

}
