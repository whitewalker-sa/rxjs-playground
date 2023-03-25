import { debounceTime, fromEvent, map} from "rxjs";

const sliderInput = document.querySelector('input#slider');

fromEvent<any>(sliderInput, 'input').pipe(
    debounceTime(2000),
    map(event => event.target['value']),
).subscribe(value => console.log(value));
