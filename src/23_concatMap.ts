import { concat, timer } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const source$ = timer(0, 1000);
const result$ = source$.pipe(
    concatMap(
        x => timer(0, 5000) // executes for every incrementing the returned value
    )
);

result$.subscribe({
    next: x => console.log(x)
});