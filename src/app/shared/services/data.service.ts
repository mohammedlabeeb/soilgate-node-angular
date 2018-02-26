import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private title = new BehaviorSubject<string>('');

  constructor() { }

  getTitle(): Observable<string> {
    return this.title.asObservable();
  }
  updateTitle(title: string) {
    this.title.next(title);
  }
}
