import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
    selector: 'idesy-idesy-button',
    templateUrl: './idesy-button.component.html',
    styleUrls: ['./idesy-button.component.css']
})
export class IdesyButtonComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}

@NgModule({
    declarations: [
        IdesyButtonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        IdesyButtonComponent
    ]
})
export class IdesyButtonModule { }