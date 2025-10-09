import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PricingService } from '../../../../core/services/pricing.service';
import { CurrencyPipe } from '@angular/common';
import { first } from 'rxjs';
import { SubscriptionService } from '../../../../core/services/subscription.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription',
  imports: [ReactiveFormsModule, CurrencyPipe, RouterLink],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css',
})
export class SubscriptionComponent {
  dis: boolean = true;
  subscriptionData!: any;
  userData: any = JSON.parse(localStorage.getItem('subscription') ?? 'null');
  id!: any;
  constructor(
    private serv: PricingService,
    private servSub: SubscriptionService,
    activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private toster: ToastrService
  ) {
    this.id = activatedroute.snapshot.paramMap.get('id');
    this.serv.getById(this.id).subscribe((data: any) => {
      this.subscriptionData = data;
    });
    this.createForm();
    this.setSubscriptionDates();
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
  setSubscriptionDates() {
    let startDate = new Date();
    let endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    // تنسيق التاريخ بشكل yyyy-mm-dd
    let formattedStart = startDate.toISOString().split('T')[0];
    let formattedEnd = endDate.toISOString().split('T')[0];
    console.log(formattedStart);

    this.subscriptionForm.patchValue({
      beg_subscription: formattedStart,
      end_subscription: formattedEnd,
    });

    this.subscriptionForm
      .get('beg_subscription')
      ?.valueChanges.subscribe((newDate) => {
        let newStartDate = new Date(newDate);
        let newEndDate = new Date(newStartDate);
        newEndDate.setMonth(newEndDate.getMonth() + 1);
        let newFormattedEnd = newEndDate.toISOString().split('T')[0];
        this.subscriptionForm.patchValue({
          end_subscription: newFormattedEnd,
        });
      });
  }

Onsubmit() {
  if (this.subscriptionForm.invalid) {
    this.toster.error('Please Fill The Fields');
    return;
  }

  this.servSub.post(this.subscriptionForm.value).subscribe((data: any) => {
    this.toster.success('', 'Purchase Successfully');

    const subscription = { ...this.subscriptionForm.value, id: data.id };
    localStorage.setItem('subscription', JSON.stringify(subscription));

  });
}


cancelSubscription(id: any) {
  if (!confirm('Are you sure you want to cancel your subscription?')) return;

  this.servSub.delete(id).subscribe({
    next: () => {
      localStorage.removeItem('subscription');
      this.toster.success('', 'Subscription cancelled successfully');
    },
    error: (err) => {
      console.error(err);
      this.toster.error('Failed to cancel subscription');
    }
  });
}



}
