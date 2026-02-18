import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { ExperienceTimelineComponent } from '../experience/experience-timeline.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsGalleryComponent } from '../projects/projects-gallery.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
    selector: 'app-home',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        HeroComponent,
        AboutComponent,
        TechStackComponent,
        ExperienceTimelineComponent,
        ProjectsGalleryComponent,
        ContactComponent,
        RevealDirective
    ],
    templateUrl: './home.component.html'
})
export class HomeComponent { }
