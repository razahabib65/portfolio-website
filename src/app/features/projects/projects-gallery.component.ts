import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioStore } from '../../core/store/portfolio.store';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects-gallery',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, ProjectCardComponent, RevealDirective],
  templateUrl: './projects-gallery.component.html'
})
export class ProjectsGalleryComponent {
  store = inject(PortfolioStore);
}
