import { Observable } from 'rxjs';
export interface IApiFunction {
  get(): Observable<any>;

  getById(id: any): Observable<any>;

  post(body: any): Observable<any>;

  put(body: any, id: any): Observable<any>;

  delete(id: any): Observable<any>;
}
