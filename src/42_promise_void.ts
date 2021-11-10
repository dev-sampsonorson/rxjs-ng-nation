import { from, map, mergeMap } from "rxjs";



let func = async function (): Promise<void> {
    return;
}

let source$ = from(func())
    .pipe(mergeMap(() => from('k')),
        map(user => 't'));;


source$.subscribe({
    next: console.log
})