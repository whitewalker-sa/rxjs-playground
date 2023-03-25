import {from} from "rxjs";

const names: string[] = ['Alice', 'Bob', 'Charlie'];


const handler = {
    next: (value:string) => console.log(value),
    error: (err: Error)=> console.log('Error', err),
    complete: ()=> console.log('Completed')
}

//using from with an array
// from(names).subscribe(handler);


//using the from creation operator with a promise
const somePromise = new Promise((resolve, reject)=>{
    // resolve('Resolved!');
    reject('Rejected!');
});

const observablePromise$ = from(somePromise);

observablePromise$.subscribe(handler);