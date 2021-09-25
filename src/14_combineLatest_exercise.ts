import { of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

const fruitsObject: { [key: string]: any } = {
    apple: {
        name: "apple",
        icon: "🍎",
        isFresh: true
    },
    banana: {
        name: "banana",
        icon: "🍎",
        isFresh: true
    },
    strawberry: {
        name: "strawberry",
        icon: "🍎",
        isFresh: true
    }
};

const likedFruitsObject: { [key: string]: number } = {
    apple: 5,
    banana: 7,
    strawberry: 3
};

const fruitsSource$ = of(fruitsObject);
const likesSource$ = of(likedFruitsObject);
/* const result$ = combineLatest([fruitsSource$, likesSource$]).pipe(
    map(([source1, source2]) => {
        for (let key in source1) {
            source1[key].likes = source2[key];
        }

        return source1;
    })
); */
const result$ = combineLatest([fruitsSource$, likesSource$]).pipe(
    map(
        ([fruitsObject, likedFruitsObject]) => {
            return Object.entries(fruitsObject).reduce((newObject: { [key: string]: any }, [name, fruit]) => {
                newObject[name] = { ...fruit, likes: likedFruitsObject[name] };
                return newObject;
            }, {});
        }
    )
)

result$.subscribe({
    next: (value) => console.log(value)
});