import {Observable, observable} from "rxjs";

const interval$ = new Observable<number>(subscriber => {
    let counter = 1;
    const intervalId = setInterval(() => {
        console.log("Emitted", counter);
        subscriber.next(counter++);
    }, 2000);

    return () => {
        clearInterval(intervalId);
    }
})


const observer = {
    next: (value: number) => console.log(value)
}

const subscription = interval$.subscribe(observer);

setTimeout(() => {
    console.log('Unsubscribe');
    subscription.unsubscribe();
}, 7000);