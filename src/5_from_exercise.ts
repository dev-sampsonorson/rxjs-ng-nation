import { Observable, from } from 'rxjs';

interface Fruit {
    name: string;
    icon: string;
    isFresh: boolean;
};

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
        isFresh: true,
    },
];

function processData(source: Observable<Fruit>) {
    source.subscribe({
        next(fruit) { console.log(`${fruit.icon} => ${fruit.name}`) }
    })
}

// processData(from(fruits));

const fruits$ = from(fruits);
processData(fruits$);