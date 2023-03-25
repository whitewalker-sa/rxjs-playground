import {interval, Observable} from "rxjs";


console.log('App start');

const handler = {
    next:(value:any)=> console.log(value),
    complete: ()=>console.log('Completed')
}

const interval$ = new Observable<number>(subscriber => {
    let counter = 0;
    const intervalID = setInterval(()=>{
        subscriber.next(counter++);
    }, 1000);

    return () => clearInterval(intervalID);

})

const subscription = interval(1000).subscribe(handler);


setTimeout(()=>{
    subscription.unsubscribe();
    console.log('Unsubscribe');
}, 5000);