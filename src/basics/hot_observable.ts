import {Observable} from "rxjs";

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable<MouseEvent>(subscriber => {
    helloButton.addEventListener('click' ,(event:MouseEvent)=>{
        subscriber.next(event);
    })
});

const handler1 = {
    next: (event:MouseEvent) => console.log('Sub 1', event.type, event.x, event.y)
}
const handler2 = {
    next: (event:MouseEvent) => console.log('Sub 2', event.type, event.x, event.y)
}

helloClick$.subscribe(handler1);

setTimeout(()=>{
    console.log('Subscription 2 starts')
    helloClick$.subscribe(handler2);
}, 5000)

