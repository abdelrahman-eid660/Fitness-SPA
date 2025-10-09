import { Component } from '@angular/core';
import { AdminHeaderComponent } from "../../shared/admin-header/admin-header.component";
import { AdminFooterComponent } from "../../shared/admin-footer/admin-footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet , AdminHeaderComponent, AdminFooterComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
