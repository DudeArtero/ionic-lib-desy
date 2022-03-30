import { Component, NgModule } from '@angular/core';

@Component({
    selector: 'idesy-button',
    templateUrl: './idesy-button.component.html',
    styleUrls: ['./idesy-button.component.scss']
})
export class IDesyButtonComponent  {

    constructor() { }

}

@NgModule({
    declarations: [
        IDesyButtonComponent
    ],
    imports: [
    ],
    exports: [
        IDesyButtonComponent
    ]
})
export class IDesyButtonModule { }