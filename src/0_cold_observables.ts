import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// event stream recreated for each new subscriber

const source$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);

    setTimeout(() => subscriber.next(3));
}).pipe(
    tap(x => console.log('from tap => ', x))
);

source$.subscribe(result => {
    console.log('observer1 => ', result);
});

source$.subscribe(result => {
    console.log('observer2 => ', result);
});