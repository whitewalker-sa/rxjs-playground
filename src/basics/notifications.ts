import {Observable} from "rxjs";


const observable$ = new Observable(subscriber => {
    console.log('Observable executed');
    subscriber.next('alice');
    subscriber.next('Bob');
    setTimeout(() => {
        subscriber.error(new Error('Failure'));
    }, 2000);
    setTimeout(() => {
        subscriber.next('Charlie');
        subscriber.complete();
    }, 4000);


    // teardown logic is used to clean up memory or cancellation logic

    return () => {
        console.log('Teardown');
    }
})


const handler = {
    next: (value: string) => console.log(value),
    error: (error: Error) => console.log(error.message),
    complete: () => console.log('Completed')
}

console.log("Before subscribe");
observable$.subscribe(handler);
console.log('After subscribe');

