import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new Subject<any>();
  constructor() { }

  sharedData(object: any) {
    this.subject.next({ data: object });
  }

  getSharedData(): Observable<any> {
    return this.subject.asObservable();
  }

}
