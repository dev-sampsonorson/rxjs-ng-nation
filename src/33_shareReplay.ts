import { interval, range, timer } from "rxjs";
import { debounceTime, delay, share, shareReplay } from "rxjs/operators";


let obs$ = timer(0, 1000).pipe(
    shareReplay()
);

obs$.subscribe({
    next: (value) => console.log(`Sub 1 => ${value}`)
});

let subscription2: any;
setTimeout(() => {
    subscription2 = obs$.subscribe({
        next: (value) => console.log(`Sub 2 => ${value}`)
    });
}, 5000);


setTimeout(() => {
    subscription2.unsubscribe();
}, 15000);
