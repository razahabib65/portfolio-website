import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/store/portfolio.store';

@Component({
  selector: 'app-project-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;

  get isIonic(): boolean {
    return this.project.tags.includes('Ionic');
  }
}
