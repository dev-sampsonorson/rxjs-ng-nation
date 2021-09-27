import { Observable } from 'rxjs';

const observable = new Observable(observer => {
    setTimeout(() => {
        observer.next('hello from observable');
    }, 2000);
});

observable.subscribe(value => console.log(value));