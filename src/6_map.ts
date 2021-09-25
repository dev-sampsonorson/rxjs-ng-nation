import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

const source$ = from([true, false, true, false]);
const result$ = source$.pipe(
    map(
        (value: boolean) => value ? 'Yes' : 'No'
    )
);

result$.subscribe({
    next: (value: string) => console.log(value)
});