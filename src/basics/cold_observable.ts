import {ajax} from "rxjs/internal/ajax/ajax";


const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');
ajax$.subscribe(
    (data: any) => console.log('Sub 1', data.response.first_name)
);
ajax$.subscribe(
    (data: any) => console.log('Sub 2', data.response.first_name)
);

ajax$.subscribe(
    (data: any) => console.log('Sub 3', data.response.first_name)
);



