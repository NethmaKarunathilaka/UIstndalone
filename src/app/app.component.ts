import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyPortalComponent } from "./company-portal/company-portal.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CompanyPortalComponent,]
   
})
export class AppComponent {
  title = 'UIstndalone';
}
