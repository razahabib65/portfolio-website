import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RevealDirective],
  templateUrl: './tech-stack.component.html'
})
export class TechStackComponent {
  techGroups = [
    { name: 'Angular 19 & Signals', level: 'Expert', percentage: 98 },
    { name: 'RxJS & State Management', level: 'Advanced', percentage: 92 },
    { name: 'Ionic & Capacitor', level: 'Expert', percentage: 95 },
    { name: 'Tailwind & Design Systems', level: 'Expert', percentage: 90 },
    { name: 'SSR & Performance', level: 'Advanced', percentage: 85 },
    { name: 'Three.js & Animations', level: 'Specialist', percentage: 70 }
  ];
}
