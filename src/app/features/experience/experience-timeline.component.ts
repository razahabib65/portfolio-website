import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience-timeline.component.html'
})
export class ExperienceTimelineComponent {
  experiences = [
    {
      period: '2024 - Present',
      role: 'Angular Frontend Developer',
      company: 'Learn2Earn Tech Company',
      responsibilities: [
        'Developing and maintaining multiple frontend projects using **Angular** and modern state management patterns.',
        'Collaborating with design teams to translate high-fidelity prototypes into pixel-perfect, responsive components.',
        'Implementing clean, maintainable code structures with a focus on strict type safety and performance optimization.',
        'Participating in code reviews and contributing to the internal component library improvement.'
      ]
    },
    {
      period: 'Currently Studying',
      role: 'BS Software Engineering',
      company: 'Virtual University of Pakistan',
      responsibilities: [
        'Focusing on core software engineering principles, data structures, and algorithmic efficiency.',
        'Applying academic knowledge to real-world frontend development challenges.',
        'Consistently learning modern web technologies and architectural best practices.',
        'Building a solid foundation in software architecture and lifecycle management.'
      ]
    }
  ];
}
