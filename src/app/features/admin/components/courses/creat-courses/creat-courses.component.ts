import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FitnessService } from '../../../../../core/services/fitness.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-courses',
  imports: [ReactiveFormsModule],
  templateUrl: './creat-courses.component.html',
  styleUrl: './creat-courses.component.css',
})
export class CreatCoursesComponent {
  constructor(
    private serv: FitnessService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createCourse();
  }
  fitnessForm!: FormGroup;
  createCourse() {
    this.fitnessForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      cotch: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      date: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      time: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      description: ['', [Validators.required]],
      img: ['', [Validators.required]],
      profile_img: ['', [Validators.required]],
    });
  }
  get controls() {
    return this.fitnessForm.controls;
  }
  onSubmit() {
    this.serv.post(this.fitnessForm.value).subscribe((data: any) => {
      this.router.navigateByUrl('/admin/cl');
    });
  }
}
