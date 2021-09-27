import { AsyncSubject } from "rxjs";

let asub$ = new AsyncSubject<number>();

asub$.next(1);
asub$.subscribe(console.log);
asub$.next(2);
asub$.next(3); // only this last value would be sent to subscribers
asub$.complete();
