import {Observable} from "rxjs";

// An observable that doesn't emit any values

const nonEmettingObsevable$ = new Observable(subscriber=>{
    console.log('Observable executed');
});

console.log('Before subscribe');
nonEmettingObsevable$.subscribe();
console.log('After subscribe');


