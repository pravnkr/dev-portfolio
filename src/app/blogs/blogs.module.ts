import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BlogFeedComponent } from './blog-feed/blog-feed.component';

@NgModule({
    declarations: [BlogsComponent, BlogFeedComponent],
    imports: [CommonModule, BlogsRoutingModule],
})
export class BlogsModule {}
