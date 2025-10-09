import { Component } from '@angular/core';
import { FitnessService } from '../../../../core/services/fitness.service';
import { share } from 'rxjs';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  allData: any[] = [];
  showAll = false;
  constructor(private serv: FitnessService) {
    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    });
  }
  get visibleData() {
    return this.showAll ? this.allData : this.allData.slice(0, 6);
  }
  toggleView() {
    this.showAll = !this.showAll;
  }
}
