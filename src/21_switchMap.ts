import { interval, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';


const source$ = timer(0, 2000);
const result$ = source$.pipe(
    switchMap(x => timer(0, 1000))
);

result$.subscribe({
    next: x => console.log(x)
});