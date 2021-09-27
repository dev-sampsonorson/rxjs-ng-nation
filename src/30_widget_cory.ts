import { fromEvent } from 'rxjs';
import { mergeWith, map, scan } from 'rxjs/operators';

const increamentClicks$ = fromEvent(document.getElementById('increment')!, 'click');
const decrementClicks$ = fromEvent(document.getElementById('decrement')!, 'click');

const clicks$ = increamentClicks$.pipe(
    mergeWith(decrementClicks$),
    map((event: any) => parseInt(event.target.value, 10)),
);

const total$ = clicks$.pipe(
    scan((total, value) => total + value, 0)
)

total$.subscribe(total => document.getElementById('counter')!.innerText = total.toString());