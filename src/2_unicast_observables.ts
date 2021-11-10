import { Observable, of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError, tap } from 'rxjs/operators';

// 1. Emits a separate set of values for each observer that subscribes
// 2. All of the operators in a pipe will be executed for each separate 
//    observer that subscribes
// 3. Can easily lead to bad behavior

/* const http$ = fromFetch('https://jsonplaceholder.typicode.com/todos/1', { selector: res => res.json() }).pipe(
    switchMap(response => {
        console.log('switchMap response => ', response)
        return response.json();
    }),
    catchError(error => {
        return of('catchError => ', error)
    })
); */

const source$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);

    setTimeout(() => subscriber.next(3));
}).pipe(
    tap(x => console.log('from tap => ', x))
);

source$.subscribe(result => {
    console.log('observer1 => ', result);
});

source$.subscribe(result => {
    console.log('observer2 => ', result);
});