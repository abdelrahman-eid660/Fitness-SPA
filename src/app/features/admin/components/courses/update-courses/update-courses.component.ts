import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FitnessService } from '../../../../../core/services/fitness.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-courses',
  imports: [ReactiveFormsModule ],
  templateUrl: './update-courses.component.html',
  styleUrl: './update-courses.component.css',
})
export class UpdateCoursesComponent {
  id: any;

  constructor(
    private serv: FitnessService,
    private fb: FormBuilder,
    private router: Router,
    private activedroute: ActivatedRoute
  ) {
    this.id = this.activedroute.snapshot.paramMap.get('id');
    this.serv.getById(this.id).subscribe((data) => {
      this.fitnessForm.patchValue(data);
    });

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
    this.serv.put(this.fitnessForm.value, this.id).subscribe((data: any) => {
      this.router.navigateByUrl('/admin/cl');
    });
  }
}
