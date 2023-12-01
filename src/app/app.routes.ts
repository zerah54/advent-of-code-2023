import { Route } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { Day1Component } from './days/1/day-1.component';
import { Day10Component } from './days/10/day-10.component';
import { Day11Component } from './days/11/day-11.component';
import { Day12Component } from './days/12/day-12.component';
import { Day13Component } from './days/13/day-13.component';
import { Day14Component } from './days/14/day-14.component';
import { Day15Component } from './days/15/day-15.component';
import { Day16Component } from './days/16/day-16.component';
import { Day17Component } from './days/17/day-17.component';
import { Day18Component } from './days/18/day-18.component';
import { Day19Component } from './days/19/day-19.component';
import { Day2Component } from './days/2/day-2.component';
import { Day20Component } from './days/20/day-20.component';
import { Day21Component } from './days/21/day-21.component';
import { Day22Component } from './days/22/day-22.component';
import { Day23Component } from './days/23/day-23.component';
import { Day24Component } from './days/24/day-24.component';
import { Day3Component } from './days/3/day-3.component';
import { Day4Component } from './days/4/day-4.component';
import { Day5Component } from './days/5/day-5.component';
import { Day6Component } from './days/6/day-6.component';
import { Day7Component } from './days/7/day-7.component';
import { Day8Component } from './days/8/day-8.component';
import { Day9Component } from './days/9/day-9.component';

export const ROUTES: Route[] = [
    {path: 'calendar', loadComponent: () => CalendarComponent},
    {
        path: 'day', children: [
            {path: '1', loadComponent: () => Day1Component},
            {path: '2', loadComponent: () => Day2Component},
            {path: '3', loadComponent: () => Day3Component},
            {path: '4', loadComponent: () => Day4Component},
            {path: '5', loadComponent: () => Day5Component},
            {path: '6', loadComponent: () => Day6Component},
            {path: '7', loadComponent: () => Day7Component},
            {path: '8', loadComponent: () => Day8Component},
            {path: '9', loadComponent: () => Day9Component},
            {path: '10', loadComponent: () => Day10Component},
            {path: '11', loadComponent: () => Day11Component},
            {path: '12', loadComponent: () => Day12Component},
            {path: '13', loadComponent: () => Day13Component},
            {path: '14', loadComponent: () => Day14Component},
            {path: '15', loadComponent: () => Day15Component},
            {path: '16', loadComponent: () => Day16Component},
            {path: '17', loadComponent: () => Day17Component},
            {path: '18', loadComponent: () => Day18Component},
            {path: '19', loadComponent: () => Day19Component},
            {path: '20', loadComponent: () => Day20Component},
            {path: '21', loadComponent: () => Day21Component},
            {path: '22', loadComponent: () => Day22Component},
            {path: '23', loadComponent: () => Day23Component},
            {path: '24', loadComponent: () => Day24Component},
        ]
    },
    { path: '**', redirectTo: 'calendar' }
];

