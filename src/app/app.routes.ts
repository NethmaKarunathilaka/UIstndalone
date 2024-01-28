import { Routes } from '@angular/router';
import{ManageRolesComponent}from './company-portal/components/company admin/manage-roles/manage-roles.component'
import { NewSubordinatAcntPopupComponent } from './company-portal/components/company admin/manage-roles/new-subordinat-acnt-popup/new-subordinat-acnt-popup.component';

export const routes: Routes = [
   {path:'manageRoles',component:ManageRolesComponent},
   {path:'addRole',component:NewSubordinatAcntPopupComponent}
];
