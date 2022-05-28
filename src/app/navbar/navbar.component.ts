import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    linkedInUrl = 'https://www.linkedin.com/in/praveen-kumar-788429192';
    githubUrl = 'https://github.com/pravnkr';
    constructor() {}
}
