import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

declare let anime: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
    skills: string[];
    email = 'praveenkumar8484@outlook.com';
    mobile = '(+91)-8368220140';
    activeIndex = 0;
    animeInstance: any;

    constructor(private changeDetectorRef: ChangeDetectorRef) {
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

    ngAfterViewInit(): void {
        let textWrappers: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.ml6 .letters')!;
        if (textWrappers) {
            textWrappers.forEach((textWrapper) => {
                textWrapper.innerHTML = textWrapper?.textContent!.replace(
                    /\S/g,
                    "<span class='d-inline-block letter'>$&</span>"
                );
            });
            for (let i = 0; i < this.skills.length; i++) {
                if (this.animeInstance) {
                    this.animeInstance = this.animeInstance
                        .add({
                            targets: `#skill${i} .letter`,
                            translateY: ['3.1rem', 0],
                            translateZ: 0,
                            duration: 300,
                            delay: (_: any, i: number) => 30 * i,
                        })
                        .add({
                            targets: `#skill${i}`,
                            opacity: 0,
                            duration: 1000,
                            easing: 'easeOutExpo',
                            delay: 500,
                        });
                } else {
                    this.animeInstance = anime
                        .timeline({ loop: true })
                        .add({
                            targets: `#skill${i} .letter`,
                            translateY: ['3.1rem', 0],
                            translateZ: 0,
                            duration: 300,
                            delay: (_: any, i: number) => 30 * i,
                        })
                        .add({
                            targets: `#skill${i}`,
                            opacity: 0,
                            duration: 1000,
                            easing: 'easeOutExpo',
                            delay: 500,
                        });
                }
            }
        }
    }

    downloadResume() {
        window.open('assets/docs/Praveen-Resume.pdf', '_blank');
    }

    openContactMe() {
        let contactMeModal = new bootstrap.Modal(document.getElementById('contactMeModal')!, {
            keyboard: false,
        });
        contactMeModal.show();
    }
}
