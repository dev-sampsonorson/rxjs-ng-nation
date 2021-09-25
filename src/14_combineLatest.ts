import { fromEvent, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

const input1$ = fromEvent(document.getElementById('input1')!, 'input');
const input2$ = fromEvent(document.getElementById('input2')!, 'input');

const result$ = combineLatest([
    input1$,
    input2$
]).pipe(
    map(([value1, value2]) => (value1.target as HTMLInputElement)?.value === (value2.target as HTMLInputElement)?.value)
);

result$.subscribe({
    next: (isEqual) => console.log(`Are values equal: ${isEqual}`)
});





