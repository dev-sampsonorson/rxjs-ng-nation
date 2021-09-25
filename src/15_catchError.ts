import { from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const source$ = from([1, 2, 3]);
const result$ = source$.pipe(
    map(value => {
        if (value % 2 === 0) {
            throw new Error('Unexpected even number ' + value);
        }

        return value * 2;
    }),
    catchError((x, source) => {
        console.error(x);
        return from([-1]);
    })
);

result$.subscribe({
    next: (value) => console.log(value)
});