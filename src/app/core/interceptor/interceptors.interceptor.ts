import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { BusyService } from '../services/busy.service';
import { finalize } from 'rxjs';

export const interceptorsInterceptor: HttpInterceptorFn = (req, next) => {
  const ServBusy = inject(BusyService)
  ServBusy.show()
  return next(req).pipe(finalize(()=>{ServBusy.hide()}))
};
