import { fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';


const incrementEl = document.getElementById('increment')!;
const decrementEl = document.getElementById('decrement')!;
const counterEl = document.getElementById('counter')!;

const incrementSource$ = fromEvent(incrementEl, 'click');
const decrementSource$ = fromEvent(decrementEl, 'click');

merge(incrementSource$, decrementSource$).pipe(
    map((event: Event) => +counterEl.innerText + +(event.target as HTMLInputElement).value)
).subscribe({
    next: counter => counterEl.innerText = counter.toString()
});