import { Observable } from 'rxjs';

let instance = 0;

const interval$ = new Observable(observer => {
    instance++;
    let count = 0;

    const interval = setInterval(() => {
        // the interval will still fire even after
        // unsubscription
        // console.log(`interval ${count}`);
        observer.next(`${instance} ${count++}`);
    }, 1000);

    /**
     * Cleanup function
     */
    return () => {
        clearInterval(interval);
    };
});

interval$.subscribe(value => console.log(1, value));
interval$.subscribe(value => console.log(2, value));
// interval$.subscribe(value => console.log(3, value));
