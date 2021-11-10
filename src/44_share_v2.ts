import { interval, of, share, take } from "rxjs";

const casted$ = interval(100).pipe(take(10), share());

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



// Values are not shared when you use `of`

/* const casted$ = of(1, 2, 3, 4, 5).pipe(
  share()
);

casted$.subscribe((x) => console.log('c1 => ', x));
setTimeout(() => {
  casted$.subscribe((x) => console.warn('c2 => ', x));
}, 2); */

// Use the `connect` operator to make it shared

/* of(1, 2, 3, 4, 5)
  .pipe(
    connect((casted) => {
      return merge(
        casted.pipe(tap((x) => console.log('c1 => ', x))),
        casted.pipe(tap((x) => console.warn('c2 => ', x)))
      );
    })
  )
  .subscribe(); */