import { Component } from '@angular/core';
import { ManageRolesComponent } from "./components/company admin/manage-roles/manage-roles.component";

@Component({
    selector: 'app-company-portal',
    standalone: true,
    templateUrl: './company-portal.component.html',
    styleUrl: './company-portal.component.css',
    imports: [ManageRolesComponent]
})
export class CompanyPortalComponent {

}
