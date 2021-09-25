import { from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface Fruit {
    name: string;
    icon: string;
    isFresh: boolean;
}

const fruits: Fruit[] = [
    {
        name: "apple",
        icon: "🍎",
        isFresh: true,
    },
    {
        name: "banana",
        icon: "🍌",
        isFresh: true,
    },
    {
        name: "stawberry",
        icon: "🍓",
        isFresh: false,
    },
];

const source$ = from(fruits);
const result$ = source$.pipe(
    map(fruit => {
        if (!fruit.isFresh) {
            throw new Error(`fruit is not fresh: ${fruit}`);
        }
        return fruit;
    }),
    catchError(error => {
        return from([]);
    })
);

result$.subscribe({
    next: value => console.log(value)
});