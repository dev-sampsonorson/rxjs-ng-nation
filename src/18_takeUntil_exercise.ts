import { fromEvent } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

const sendSource$ = fromEvent(document.getElementById('send')!, 'click');
const stopTrigger$ = fromEvent(document.getElementById('stop')!, 'click');

const logging$ = sendSource$.pipe(
    tap(
        (event: Event) => console.log('Time: ', new Date())
    ),
    takeUntil(stopTrigger$)
);

logging$.pipe(
    takeUntil(stopTrigger$)
).subscribe();



/* import { fromEvent } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

const sendSource$ = fromEvent(document.getElementById('send')!, 'click');
const stopTrigger$ = fromEvent(document.getElementById('stop')!, 'click');

const result$ = sendSource$.pipe(
    map(
        (event: Event) => Date.now()
    ),
    takeUntil(stopTrigger$)
);

result$.subscribe({
    next: (date: number) => console.log(date),
    complete: () => console.log('Stream stopped')
}); */