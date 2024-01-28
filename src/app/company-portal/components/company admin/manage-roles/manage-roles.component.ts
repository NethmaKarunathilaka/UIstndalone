import { Component } from '@angular/core';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NewSubordinatAcntPopupComponent } from "./new-subordinat-acnt-popup/new-subordinat-acnt-popup.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-manage-roles',
    standalone: true,
    templateUrl: './manage-roles.component.html',
    styleUrl: './manage-roles.component.css',
    imports: [MatIconModule, MatButtonModule, NewSubordinatAcntPopupComponent,RouterModule]
})
export class ManageRolesComponent {

}

