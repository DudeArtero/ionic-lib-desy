import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'idesy-button',
    templateUrl: './idesy-button.component.html',
    styleUrls: ['./idesy-button.component.css']
})
export class IDesyButtonComponent implements OnInit {

    @Input() value: string  = "";

    constructor() { }

    ngOnInit(): void {
    }

}

@NgModule({
    declarations: [
        IDesyButtonComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        IDesyButtonComponent
    ]
})
export class IDesyButtonModule { }