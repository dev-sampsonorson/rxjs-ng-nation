import { bufferCount, interval } from "rxjs";

/**
 * buffer operators collect values in an
 * array and occationally emit the array
 */

const source$ = interval(400);


// get 3 values and spit it out
source$.pipe(
    bufferCount(3)
).subscribe(console.log)