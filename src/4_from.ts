import { from } from 'rxjs';

let observable$ = from([[1, 2], 2, 3]);

observable$.subscribe({
    next: (value) => console.log(value)
})
