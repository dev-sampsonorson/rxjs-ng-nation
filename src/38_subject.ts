import { Subject } from "rxjs";

let sub$ = new Subject();

sub$.next(2);
sub$.subscribe(console.log);
sub$.next(3);