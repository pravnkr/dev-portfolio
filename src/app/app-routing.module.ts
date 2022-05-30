import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'skills',
        loadChildren: () => import('./skills/skills.module').then((mod) => mod.SkillsModule),
    },
    {
        path: 'experience',
        loadChildren: () => import('./experience/experience.module').then((mod) => mod.ExperienceModule),
    },
    {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then((mod) => mod.ProjectsModule),
    },
    {
        path: 'blogs',
        loadChildren: () => import('./blogs/blogs.module').then((mod) => mod.BlogsModule),
    },
    {
        path: 'hire-me',
        loadChildren: () => import('./hire-me/hire-me.module').then((mod) => mod.HireMeModule),
    },
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
