import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PerformanceService {

  constructor() {
  }

  public runPerformanceTest(data): Observable<any> {
    return Observable.create((observer) => {
      observer.next(data);
    });
  }
}
