import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'aoc2023-day-1',
    templateUrl: './day-1.component.html',
    standalone: true,
    imports: [FormsModule]
})
export class Day1Component implements OnInit {
    @ViewChild('fileInput') public inputEl!: ElementRef;

    protected text_to_read: string = '';
    protected advanced_mode: boolean = true;
    protected readonly default_file_src: string = 'assets/files/day-1.txt';

    private readonly mapping: Record<string, string> = {
        one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9',
        1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9'
    }

    constructor(private http_client: HttpClient) {
    }

    public ngOnInit(): void {
        this.readFileFromUrl().subscribe((file_content: string) => {
            this.text_to_read = file_content;
        })
    }

    protected readFile(files?: FileList | null): void {
        if (!files) return;
        const reader: FileReader = new FileReader();
        reader.readAsText(files[0]);

        reader.addEventListener(
            "load",
            () => {
                console.log('file', reader.result)
                this.text_to_read = <string>reader.result;
            },
            false,
        );

        if (files && files.length > 0) {
            reader.readAsText(files[0]);
        }
    }

    protected parseFileContent(): number {
        let number_by_row: string[] = this.text_to_read.split('\r\n').map((row: string): string => {
            const matches: RegExpMatchArray | null = row.match(this.advanced_mode ? /one|two|three|four|five|six|seven|eight|nine|\d/g : /\d/g);
            if (!matches || matches.length === 0) return '';
            return this.mapping[matches[0].toString()] + this.mapping[matches[matches.length - 1].toString()];
        });
        return number_by_row.reduce((previous_value: number, current_value: string) => +previous_value + +current_value, 0);
    }

    private readFileFromUrl(): Observable<string> {
        return this.http_client.get(this.default_file_src, {responseType: 'text'})
    }
}
