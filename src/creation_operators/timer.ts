import {Observable, timer} from "rxjs";


console.log('App start');

const handler = {
    next:(value:any)=> console.log(value),
    complete: ()=>console.log('Completed')
}

const timer$ = new Observable<number>(subscriber => {
    const timeoutID = setTimeout(()=>{
        console.log('Timeout!')
        subscriber.next(0);
        subscriber.complete();
    }, 2000);

    return () => clearTimeout(timeoutID);

})

const subscription = timer(2000).subscribe(handler);


setTimeout(()=>{
    subscription.unsubscribe();
    console.log('Unsubscribe');
}, 2000);