import { fromEvent, interval, of, tap, timer } from 'rxjs';
import { concatMapTo, delay, exhaustMap, map, takeUntil } from 'rxjs/operators';
console.clear();

let click$ = fromEvent(document, 'click');
let source$ = interval(100).pipe(
    exhaustMap((x) => {
        return timer(3000).pipe(map((_) => x));
    }),
    takeUntil(click$)
);

source$.subscribe((value) => {
    console.log('value => ', value);
});