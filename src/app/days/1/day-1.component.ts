import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'aoc2023-day-1',
    templateUrl: './day-1.component.html',
    standalone: true,
    imports: [
        FormsModule
    ]
})
export class Day1Component implements OnInit {
    @ViewChild('fileInput') public inputEl!: ElementRef;

    protected readonly default_file_src: string = 'assets/files/day-1.txt';
    protected text_to_read: string = '';
    protected advanced_mode: boolean = true;
    private mapping: Record<string, string> = {one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9'}

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
        let rows: string[] = this.text_to_read.split('\r\n');
        rows = rows.map((row: string) => {
            if (this.advanced_mode) {
                row = row.replace(/(one|two|three|four|five|six|seven|eight|nine)/gm, (value: string) => this.mapping[value]);
            }
            row = row.replace(/\D/gm, '')
            return row;
        });
        return rows.reduce((previous_value: number, current_value: string) => +previous_value + (!isNaN(+current_value[0]) ? +(current_value[0] + current_value[current_value.length - 1]) : 0), 0);
    }

    private readFileFromUrl(): Observable<string> {
        return this.http_client.get(this.default_file_src, {responseType: 'text'})
    }
}
