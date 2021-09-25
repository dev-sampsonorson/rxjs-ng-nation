import { from } from 'rxjs';
import { scan } from 'rxjs/operators';

interface Fruit {
    name: string,
    icon: string
}
const fruit1: Fruit = {
    name: 'apple',
    icon: '🍎'
}
const fruit2: Fruit = {
    name: 'strawberry',
    icon: '🍓'
}
const fruit3: Fruit = {
    name: 'banana',
    icon: '🍌'
}

const source$ = from([fruit1, fruit2, fruit3]);
const result$ = source$.pipe(
    scan((map: { [name: string]: Fruit }, fruit: Fruit) => {
        return {
            ...map,
            [fruit.name]: fruit
        }
    }, {})
);

result$.subscribe({
    next: (result) => console.log('Fruits', result)
});