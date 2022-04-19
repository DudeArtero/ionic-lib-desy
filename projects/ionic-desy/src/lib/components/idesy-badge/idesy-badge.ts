import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'idesy-badge',
    templateUrl: './idesy-badge.component.html',
    styleUrls: ['./idesy-badge.component.css']
})
export class IDesyBadgeComponent implements OnInit {

    @Input() value: string  = "";

    constructor() { }

    ngOnInit(): void {
    }

}

@NgModule({
    declarations: [
        IDesyBadgeComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        IDesyBadgeComponent
    ]
})
export class IDesyBadgeModule { }