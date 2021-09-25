import { from } from 'rxjs';
import { scan } from 'rxjs/operators';

const source$ = from([1, 2, 3, 4]);
const result$ = source$.pipe(
    scan((sum: number, num: number) => sum + num, 0)
);

result$.subscribe({
    next: (sum) => console.log(sum)
});