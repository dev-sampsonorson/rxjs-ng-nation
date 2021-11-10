import { Observable } from "rxjs";
import { share, tap } from 'rxjs/operators';

// single event stream shared for all suscribers old and new

const source$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);

    setTimeout(() => subscriber.next(3));
    // setTimeout(() => subscriber.complete());
}).pipe(
    tap(x => console.log('from tap => ', x)),
    share(),
);

source$.subscribe(result => {
    console.log('observer1 => ', result);
});

source$.subscribe(result => {
    console.log('observer2 => ', result);
});

setTimeout(() => {
    source$.subscribe(result => {
        console.log('observer3 => ', result);
    });
}, 500);