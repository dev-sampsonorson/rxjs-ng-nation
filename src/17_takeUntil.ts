import { fromEvent } from "rxjs";
import { takeUntil } from 'rxjs/operators';

const inputSource$ = fromEvent(document.getElementById('input1') ?? [], 'input');
const trigger$ = fromEvent(document.getElementById('btn-stop') ?? [], 'click');

const result$ = inputSource$.pipe(
    takeUntil(trigger$)
);

result$.subscribe({
    next: (event: Event) => console.log(`Input value => ${(event.target as HTMLInputElement).value}`),
    complete: () => console.log('Stream stopped') // executed when btn-stop is click
});