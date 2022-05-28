import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    skills: string[];
    email = 'praveenkumar8484@outlook.com';
    mobile = '(+91)-8368220140';

    constructor() {
        this.skills = [
            'Java',
            'Microservices',
            'SpringBoot',
            'Hibernate',
            'PostgresQL',
            'MySQL',
            'RxJs',
            'Docker',
            'Javascript',
            'NodeJs',
            'Angular',
            'NestJs',
            'ExpressJs',
        ];
    }

    downloadResume() {
        window.open('assets/docs/Praveen-Resume.pdf', '_blank');
    }
}
