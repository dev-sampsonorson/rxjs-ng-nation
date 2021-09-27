import { Observable, interval, timer } from "rxjs";
import { map } from "rxjs/operators";

const takeEveryNth = (n: number) => {
    return <T>(source: Observable<T>): Observable<T> => {
        return new Observable(observer => {
            let count = 0;
            return source.subscribe({
                next(x) {
                    if (count++ % n === 0) observer.next(x);
                },
                error(error: any) {
                    observer.error(error);
                },
                complete() {
                    observer.complete();
                }
            })
        });
    }
}

timer(0, 1000).pipe(
    takeEveryNth(2),
    // map(x => x + x)
).subscribe({
    next: console.log
});