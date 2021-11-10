import { interval, shareReplay, take } from "rxjs";

const casted$ = interval(100).pipe(take(10), shareReplay(1));

// publish() => multicast(new Subject())
// publishReplay(...args) => multicast(new ReplaySubject(...args))
// share() => publish() + refCount()

casted$.subscribe((x) => console.log('c1 => ', x));
setTimeout(() => {
    casted$.subscribe((x) => console.warn('c2 => ', x));
}, 200);

setTimeout(() => {
    casted$.subscribe((x) => console.warn('c3 => ', x));
}, 2000);