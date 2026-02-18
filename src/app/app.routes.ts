import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsGalleryComponent } from './features/projects/projects-gallery.component';
import { TechStackComponent } from './features/tech-stack/tech-stack.component';
import { ContactComponent } from './features/contact/contact.component';
import { ExperienceTimelineComponent } from './features/experience/experience-timeline.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsGalleryComponent },
    { path: 'experience', component: ExperienceTimelineComponent },
    { path: 'tech-stack', component: TechStackComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
