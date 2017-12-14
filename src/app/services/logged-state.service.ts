import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoggedStateService {
  // Observable string sources
  private emitChangeSource = new Subject<any>();

  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();

  // Service message commands
  emitChange(change: boolean) {
    this.emitChangeSource.next(change);
  }
}
