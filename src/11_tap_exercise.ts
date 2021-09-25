import { from } from 'rxjs';
import { tap } from 'rxjs/operators';

const numberSource$ = from([4, 3, 7, 5, 3, 7]);
const resultSource$ = numberSource$.pipe(
    tap({
        next: (value: number) => {
            if (value > 5)
                console.log(`Number is ${value} greater than 5`);
        }
    })
);

resultSource$.subscribe();