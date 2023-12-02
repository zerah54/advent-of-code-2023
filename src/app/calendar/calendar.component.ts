import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'aoc2023-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterLink]
})
export class CalendarComponent {

    protected shouldBeUnlocked(day: number): boolean {
        const now: Date = new Date();
        return now.getFullYear() > 2023 || day <= now.getDate();
    }
}
