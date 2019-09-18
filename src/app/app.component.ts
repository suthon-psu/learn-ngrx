import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, delayIncrement } from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  count$: Observable<number>

  constructor(private store: Store<{count: number}>){
    this.count$ = store.pipe(select('count'))
  }

  increment(incBy: number){
    this.store.dispatch(increment({incBy}))
  }
  
  delayIncrement(incBy: number){
    this.store.dispatch(delayIncrement({incBy}))
  }
}
