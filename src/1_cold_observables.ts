import { Observable } from 'rxjs';

let observable1$ = Observable.create((observer: any) => {
    let counter = 0;

    observer.next('Observer 1 => alive');
    setInterval(() => {
        observer.next('Observer 1: ' + ++counter);
    }, 3000);
});

let observable2$ = Observable.create((observer: any) => {
    let counter = 0;

    observer.next('Observer 2 => alive');
    setInterval(() => {
        observer.next('Observer 2: ' + ++counter);
    }, 3000);
});

let subscription1 = observable1$.subscribe(
    (value: any) => console.log(1, ' => ', value)
);

let subscription2 = observable2$.subscribe(
    (value: any) => console.log(2, ' => ', value)
);

setTimeout(() => {
    /**
     * this subscribe will get counter = 1 even
     * though it subscribed late
     */
    let subscription3 = observable2$.subscribe(
        (value: any) => console.log(3, ' => ', value)
    );
}, 9000);