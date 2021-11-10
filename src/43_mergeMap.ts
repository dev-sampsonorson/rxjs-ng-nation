import { from, mergeMap, of } from "rxjs";


let source$ = from(['a', 'b']).pipe(
    mergeMap(
        x => of('c')
    )
);

source$.subscribe({
    next: console.log
})