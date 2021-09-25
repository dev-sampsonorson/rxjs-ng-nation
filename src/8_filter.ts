import { Observable, from } from "rxjs";
import { filter } from "rxjs/operators";

const source$ = from([1, 2, 3, 4]);
const result$ = source$.pipe(
    filter(
        x => x % 2 === 0
    )
);

result$.subscribe({
    next: value => console.log(value)
});