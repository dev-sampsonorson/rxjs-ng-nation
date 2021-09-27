import { Observable } from 'rxjs';

const interval$ = new Observable(observer => {
    let count = 0;

    const interval = setInterval(() => {
        // the interval will still fire even after
        // unsubscription
        console.log(`interval ${count}`);
        observer.next(count++);
    }, 1000);

    /**
     * Cleanup function
     */
    return () => {
        clearInterval(interval);
    };
});

const subscription = interval$.subscribe(value => console.log(value));

setTimeout(() => subscription.unsubscribe(), 5000);