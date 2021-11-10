import { from, concat } from 'rxjs';
import { tap } from 'rxjs/operators';

// https://www.youtube.com/watch?v=Svs5SafLBBI
// 1 - concatenates any number of observables in order
// 2 - data stream creation operator
// 3 - if any obserable does not complete, 
//     subsequent are never subscribed to
// 4 - allows scheduler to be supplied to 
//     contorl emmission of notifications

let source$ = concat(
    from(['a', 'b']),
    'y'
);

var result$ = source$.pipe(
    tap(x => console.log('tap - ', x))
);

result$.subscribe({
    next: value => console.log(value)
});