import {Observable, of} from 'rxjs';


const of$ = of('Alice', 'Bob', 'Charlie');

const handler = {
    next: (value: string) => console.log(value),
    complete: () => console.log('Completed')
}
// of$.subscribe(handler);

/*const names$ = new Observable<string>(subscriber => {
    subscriber.next('Alice');
    subscriber.next('Bob');
    subscriber.next('Charlie');
    subscriber.complete();
})

names$.subscribe(handler);*/

function ourOwnOf(args: string[]): Observable<string> {
    return new Observable<string>(subscriber => {
        for (let i = 0; i < args.length; i++) {
            subscriber.next(args[i]);
        }
        subscriber.complete();
    })
}

const names: string[] = ['Alice', 'Bob', 'Charlie'];

ourOwnOf(names).subscribe(handler);