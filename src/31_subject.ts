import { Observable, Subject } from "rxjs";

/**
 * Subject lets you use rxjs like a messaging system
 * where you push a value to the stream to be emitted
 * using the next function
 */

const observable = new Subject();

observable.subscribe(v => console.log('1', v));

observable.next(1);
observable.next(2);
observable.next(3);

observable.subscribe(v => console.log('2', v));

observable.next(4);