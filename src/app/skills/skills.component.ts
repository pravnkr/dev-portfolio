import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Skill } from './skill.model';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
    skillsLeft: Skill[];
    skillsRight: Skill[];
    constructor() {
        this.skillsLeft = [
            {
                name: 'Java',
                path: 'assets/img/java.png',
                percentage: 90,
                circular: true,
                years: 3.5,
            },
            {
                name: 'Microservices',
                path: 'assets/img/microservices.jpg',
                percentage: 75,
                circular: false,
                years: 3,
            },
            {
                name: 'Spring Boot',
                path: 'assets/img/spring-boot.png',
                percentage: 80,
                circular: true,
                years: 3.5,
            },
            {
                name: 'Hibernate ORM',
                path: 'assets/img/hibernate.jpg',
                percentage: 80,
                circular: false,
                years: 3.5,
            },
            {
                name: 'PostgresQL',
                path: 'assets/img/postgres.png',
                percentage: 70,
                circular: false,
                years: 3.5,
            },
            {
                name: 'MySQL',
                path: 'assets/img/mysql.png',
                percentage: 70,
                circular: false,
                years: 3,
            },
            {
                name: 'RxJs',
                path: 'assets/img/rxjs.png',
                percentage: 80,
                circular: false,
                years: 3,
            },
        ];
        this.skillsRight = [
            {
                name: 'Docker',
                path: 'assets/img/docker.png',
                percentage: 90,
                circular: false,
                years: 3,
            },
            {
                name: 'Javascript',
                path: 'assets/img/javascript.png',
                percentage: 90,
                circular: false,
                years: 3,
            },
            {
                name: 'NodeJs',
                path: 'assets/img/nodejs.png',
                percentage: 75,
                circular: true,
                years: 3,
            },
            {
                name: 'Angular',
                path: 'assets/img/angular.png',
                percentage: 80,
                circular: false,
                years: 3,
            },
            {
                name: 'NestJs',
                path: 'assets/img/nest.png',
                percentage: 70,
                circular: true,
                years: 2,
            },

            {
                name: 'ExpressJs',
                path: 'assets/img/express.png',
                percentage: 70,
                circular: false,
                years: 2,
            },
        ];
    }
}
