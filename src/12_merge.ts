import { fromEvent, merge } from 'rxjs';
import { mergeWith } from 'rxjs/operators';

const source1$ = fromEvent(document.getElementById('input1')!, 'click');
const source2$ = fromEvent(document.getElementById('input2')!, 'input');

const result$ = merge(
    source1$, // ClickEvent, ClickEvent, ClickEvent
    source2$  // InputEvent, InputEvent, InputEvent
);

result$.subscribe({
    next: (value: Event) => console.log(value) // ClickEvent, InputEvent, ClickEvent, InputEvent, ClickEvent, InputEvent
});

