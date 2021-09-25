import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

interface ServerFruit {
    name: string,
    icon: string,
    isFresh: boolean,
}

const serverFruit: ServerFruit = {
    name: 'apple',
    icon: '🍎',
    isFresh: true
};

interface Fruit {
    name: string;
};

const fruitSource$ = from([serverFruit]);
const fruitResult$ = fruitSource$.pipe(
    filter(
        (fruit: ServerFruit) => fruit.isFresh
    )
);

fruitResult$.subscribe({
    next: fruit => console.log('Fresh fruit', fruit)
});