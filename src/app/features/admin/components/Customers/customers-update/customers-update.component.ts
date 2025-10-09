import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SubscriptionService } from '../../../../../core/services/subscription.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customers-update',
  imports: [ReactiveFormsModule],
  templateUrl: './customers-update.component.html',
  styleUrl: './customers-update.component.css',
})
export class CustomersUpdateComponent {
  id!: any;
  constructor(
    private serv: SubscriptionService,
    private fb: FormBuilder,
    private toster: ToastrService,
    private activedroute: ActivatedRoute,
    private router: Router
  ) {
    this.id = activedroute.snapshot.paramMap.get('id');
    serv.getById(this.id).subscribe((data: any) => {
      this.subscriptionForm.patchValue(data);
    });
    this.createForm();
  }
  subscriptionForm!: FormGroup;
  createForm() {
    this.subscriptionForm = this.fb.group({
      fullname: ['', [Validators.required]],
      birth: ['', [Validators.required]],
      beg_subscription: ['', [Validators.required]],
      end_subscription: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }
  update() {
    this.serv
      .put(this.subscriptionForm.value, this.id)
      .subscribe((data: any) => {
        this.toster.success('', 'Update Successfuly');
        this.router.navigateByUrl('/admin/sl');
      });
  }
}
