import {fromEvent, Observable} from "rxjs";

const triggerButton = document.querySelector('button#trigger');

const handler = {
    next: (event: MouseEvent) => console.log('Event', event.type, event.x, event.y)
}

//using the fromEvent creation function
const buttonClick$ = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(handler);


const triggerClick$ = new Observable<MouseEvent>(subscriber => {
    const clickHandlerFn = (event: MouseEvent) => {
        console.log('Event callback executed');
        subscriber.next(event);
    };
    triggerButton.addEventListener('click', clickHandlerFn);
    return () => {
        triggerButton.removeEventListener('click', clickHandlerFn)
    }
})

setTimeout(() => {
    console.log('Unsubscribe');
    buttonClick$.unsubscribe();
}, 5000);
