import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        let tooltipTriggerList = [].slice.call(document.querySelectorAll('div[data-bs-toggle="tooltip"]'));
        let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl, { trigger: 'hover' });
        });
    }
}
