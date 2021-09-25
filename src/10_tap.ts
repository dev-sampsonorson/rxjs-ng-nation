import { from } from 'rxjs';
import { tap } from 'rxjs/operators';

const source$ = from([true, false, true, false]);
const result$ = source$.pipe(
    tap({
        next: value => console.log('Show/hide HTML'),
        error: value => console.log('Show error message'),
        complete: () => console.log('Show sucess')
    })
);

result$.subscribe({
    next: (value) => console.log(value)
});