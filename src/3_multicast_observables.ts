
import { BehaviorSubject, from, merge, Observable, of, share, Subject, tap } from "rxjs";


// 1. emit a single set of values for all observers that subscribe
// 2. all of the operators in a pipe are executed just once
// 3. the observable will be 'reset' if it get 'completed' or 'errored'
//    and another subscriber is added, it reverts the observable to a unicast state
// 4. quickly runs into issues with a later subscriber not seeing earlier 
//    events


const subject1 = new BehaviorSubject<number>(0);
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


/* let counter = 0;
setInterval(() => {
    subject1.next(++counter);
}, 500); */



/* setTimeout(() => {
    // subject1.complete();
    source$.subscribe(result => {
        console.log('3 => ', result);
    });
}, 3000); */