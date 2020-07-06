import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    project: any;

    constructor() { }

    ngOnInit(): void {
    }

    show(input){
        this.project = input;
    }

}
