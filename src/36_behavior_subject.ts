import { BehaviorSubject } from "rxjs";

let bsub$ = new BehaviorSubject<number>(200);
bsub$.next(2);
bsub$.subscribe(console.log);
bsub$.next(3);