import { map, Observable, Subject, tap, zip } from "rxjs";


type Sharwama = ["flat bread", "meat", "tomato", "cabbage", "sauce"];

let sharwama$: Observable<Sharwama>;

let flatBreadCounter: number = 0;
let meatCounter: number = 0;
let tomatoCounter: number = 0;
let cabbageCounter: number = 0;
let sauceCounter: number = 0;

let flatBread$ = new Subject<"flat bread">();
let meat$ = new Subject<"meat">();
let tomato$ = new Subject<"tomato">();
let cabbage$ = new Subject<"cabbage">();
let sauce$ = new Subject<"sauce">();

// includes the earliest value from all Subjects in an array
sharwama$ = zip(
    flatBread$.pipe(map((value) => `${value}-${++flatBreadCounter}`), tap(console.log)),
    meat$.pipe(map((value) => `${value}-${++meatCounter}`), tap(console.log)),
    tomato$.pipe(map((value) => `${value}-${++tomatoCounter}`), tap(console.log)),
    cabbage$.pipe(map((value) => `${value}-${++cabbageCounter}`), tap(console.log)),
    sauce$.pipe(map((value) => `${value}-${++sauceCounter}`), tap(console.log))
);

sharwama$.subscribe({
    next: console.log
});

setTimeout(() => flatBread$.next("flat bread"), 100);
setTimeout(() => meat$.next("meat"), 1500);
setTimeout(() => tomato$.next("tomato"), 800);
setTimeout(() => cabbage$.next("cabbage"), 3000);
setTimeout(() => sauce$.next("sauce"), 2500);