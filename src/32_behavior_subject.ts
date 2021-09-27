import { Observable, share, shareReplay, BehaviorSubject } from "rxjs";

/**
 * Behavior subject will give late subscribers the last value 
 * that was emitted even though the subscriber wasn't around when that value 
 * was emitted
 */

const observable = new BehaviorSubject(2);

observable.subscribe(v => console.log('1', v));

observable.next(1);
observable.next(2);
observable.next(3);

observable.subscribe(v => console.log('2', v));

observable.next(4);