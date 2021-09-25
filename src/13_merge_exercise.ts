import { fromEvent, merge } from 'rxjs';

const back1$ = fromEvent(document.getElementById('back1')!, 'click');
const back2$ = fromEvent(document.getElementById('back2')!, 'click');

const result$ = merge(
    back1$,
    back2$
);

result$.subscribe({
    next: (_) => window.history.back()
});