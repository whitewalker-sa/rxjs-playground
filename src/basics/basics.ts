import {Observable} from 'rxjs';

const observable$ = new Observable<string>(subscriber => {
    console.log("Observable executed");
    subscriber.next("Alice");
    setTimeout(() => subscriber.next("Bob"), 2000);
    setTimeout(() => subscriber.next("Charlie"), 4000);
});

const observer = {
    next: (value: string) => console.log(value)
}

console.log("Subscription 1 started");
observable$.subscribe(value => console.log('Subscription 1', value));


setTimeout(()=>{
    console.log("Subscription 2 started");
    observable$.subscribe(value => console.log('Subscription 2', value));
}, 1000);
