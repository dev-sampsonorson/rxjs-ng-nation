import { from, concat, BehaviorSubject, of, Subject } from 'rxjs';
import { debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, map, share, shareReplay, switchMap, take, tap, toArray } from 'rxjs/operators';


interface IUser {
    id: number;
    name: string;
}

const EMPTY_USER = { id: 0, name: '' } as IUser;
let user1 = { id: 1, name: 'user 1' } as IUser;
let user2 = { id: 2, name: 'user 2' } as IUser;
let user3 = { id: 3, name: 'user 3' } as IUser;

type MayUser = IUser | null;

// 1 - concatenates any number of observables in order
// 2 - data stream creation operator
// 3 - if any obserable does not complete, 
//     subsequent are never subscribed to
// 4 - allows scheduler to be supplied to 
//     contorl emmission of notifications

let subject1 = new BehaviorSubject<MayUser>(user1);

let firstFunc = () => {
    return concat(
        subject1.pipe(
            // take will trigger the `subject` observable
            // to complete so that the next observable in
            // concat is subscribed to
            take(1),

            // filter out null values (false)
            // convert null to false
            filter(x => !!x)
        ),

        // the `of` observable will automatically complete
        // so the next observable in concate will be
        // subscribed to
        of(user2).pipe(
            filter(x => !!x),

            // we will get here if the value is not null
            tap(x => subject1.next(x))
        ),
        subject1.asObservable()
    ).pipe(
        switchMap(x => x === null ? of(EMPTY_USER) : of(x)),
        distinctUntilKeyChanged('id'),
        switchMap(x => x.id === EMPTY_USER.id ? of(null) : of(x)),
        tap(x => console.log('executing...'))
    );
};

let secondFunc = () => {
    return firstFunc().pipe(
        map(x => x ? x.name : '<no-name>')
    );
};

let thirdFunc = () => {
    return from(firstFunc()).pipe(
        map(x => x && x.name)
    );
};

firstFunc().subscribe(res => {
    console.log('final => ', res);
});

secondFunc().subscribe(res => {
    console.log('second => ', res);
});


/* subject1.subscribe((subValue) => {
    console.log('subValue', subValue);
}); */
subject1.next(user3);

setTimeout(() => subject1.next(null));