import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioStore } from '../../core/store/portfolio.store';

@Component({
    selector: 'app-navbar',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    store = inject(PortfolioStore);
}
