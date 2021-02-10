import { animate, state, style, transition, trigger } from '@angular/animations';

export const routingAnimates = trigger('routing', [
    // state('login', style({

    // }))
    transition('* <=> *',[
        style({opacity: 0 , transform:'translateX(-100%)'}),
        animate('300ms',style({opacity: 1 , transform:'translateX(0)'}))
    ]),
    // transition(':leave',[
    //     style({opacity: 1}),
    //     animate('500ms',style({opacity: 0 , transform:'translateY(50px)'}))
    // ])
])