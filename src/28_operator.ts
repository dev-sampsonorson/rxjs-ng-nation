import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


/**
 * The generic type number tells the observable what type
 * it's going to be emitting
 */
const interval$ = new Observable<number>(observer => {
    let count = 0;
    const interval = setInterval(() => {
        observer.next(count++);
    }, 1000);

    /**
     * Cleanup function
     */
    return () => {
        clearInterval(interval);
    };
});

interval$.pipe(
    map(value => value * value),
    filter(value => value % 2 === 0), // filter out odd values
).subscribe({
    next: value => console.log(value)
});

/**
 * Marble diagram 👇 
 */

// -----1-----2-----3-----4----->
//         map => x * x
// -----1-----4-----9-----16---->
//     filter => x % 2 === 0
// -----------4-----------16---->