import { ReplaySubject } from "rxjs";

let rsub$ = new ReplaySubject<number>(2);
rsub$.next(2);
rsub$.next(3);
rsub$.next(4);
rsub$.subscribe(console.log)
rsub$.next(5);
rsub$.next(6);