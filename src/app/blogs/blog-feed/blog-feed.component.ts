import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-blog-feed',
    templateUrl: './blog-feed.component.html',
    styleUrls: ['./blog-feed.component.scss'],
})
export class BlogFeedComponent {
    @Input() technology?: string;
    @Input() language?: string;
    @Input() imageUrl?: string;
    @Input() feedTitle?: string;
    @Input() feedSummary?: string;
    @Input() feedUrl?: string;
    @Input() profileImgUrl?: string;
    @Input() feedDate?: string;

    constructor() {}
}
