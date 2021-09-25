import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

interface ServerFruit {
    name: string,
    icon: string,
    isFresh: boolean,
}

interface Fruit {
    name: string;
}

const serverFruit1: ServerFruit = {
    name: 'apple',
    icon: '🍎',
    isFresh: true
}

const source$ = from([serverFruit1]);
const fruitResult$ = source$.pipe(
    map(
        (fruit: ServerFruit) => ({ name: `(${fruit.icon}) ${fruit.name}` })
    )
);

fruitResult$.subscribe({
    next: (fruit: Fruit) => console.log('Transformed fruit', fruit)
});