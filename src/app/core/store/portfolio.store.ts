import { Injectable, signal, computed, resource } from '@angular/core';

export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    codeUrl: string;
    featured: boolean;
    tags: string[];
}

@Injectable({ providedIn: 'root' })
export class PortfolioStore {
    // Application State
    private _theme = signal<'dark' | 'light'>(this.getInitialTheme());
    theme = this._theme.asReadonly();

    private getInitialTheme(): 'dark' | 'light' {
        const saved = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
        if (saved) return saved;

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    private _activeFilter = signal<string>('All');
    activeFilter = this._activeFilter.asReadonly();

    private _isMobileMenuOpen = signal<boolean>(false);
    isMobileMenuOpen = this._isMobileMenuOpen.asReadonly();

    // Mock Data Resource
    projectsResource = resource({
        loader: async () => {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 800));
            return [
                {
                    id: '1',
                    title: 'Dalab Business Portal',
                    description: 'A comprehensive business management ecosystem for Somalia\'s digital delivery leader. Features store management, real-time order tracking, and advanced analytics dashboards.',
                    imageUrl: 'assets/dalabbuisness.jpeg', // Temporary logo
                    liveUrl: 'https://business.dalabdelivery.com/',
                    codeUrl: '#',
                    featured: true,
                    tags: ['Angular', 'Enterprise', 'Real-time']
                },
                {
                    id: '2',
                    title: 'Dalab Customer App',
                    description: 'Somalia\'s leading B2C delivery platform. Enabling users to order from 10+ categories including Food, Groceries, and Electronics with high-fidelity real-time tracking.',
                    imageUrl: 'assets/dalabxutsomer.jpeg', // Temporary logo
                    liveUrl: 'https://customer.dalabdelivery.com/#/home',
                    codeUrl: '#',
                    featured: true,
                    tags: ['Angular', 'Ionic', 'PWA']
                },
                {
                    id: '3',
                    title: 'Dalab Rider App',
                    description: 'The logistics backbone of the Dalab ecosystem. A real-time interface for riders to manage deliveries, navigate, and track earnings with instant sync.',
                    imageUrl: 'assets/dalabrider.jpeg', // Temporary logo
                    liveUrl: 'https://rider.dalabdelivery.com/',
                    codeUrl: '#',
                    featured: true,
                    tags: ['Angular', 'Ionic', 'Logistics']
                },
                {
                    id: '4',
                    title: 'Enterprise Booking System',
                    description: 'A high-performance Ionic Angular application for global hotel chains. Developed with standalone components and optimized for performance.',
                    imageUrl: '/assets/projects/booking.jpg',
                    liveUrl: '#',
                    codeUrl: '#',
                    featured: true,
                    tags: ['Angular', 'Ionic', 'Mobile']
                },
                {
                    id: '5',
                    title: 'AI Asset Manager',
                    description: '3D interactive dashboard for managing digital assets with real-time sync and complex visualization.',
                    imageUrl: '/assets/projects/assets.jpg',
                    liveUrl: '#',
                    codeUrl: '#',
                    featured: true,
                    tags: ['Three.js', 'RxJS', 'Web']
                }
            ] as Project[];
        }
    });

    // Derived State
    featuredProjects = computed(() =>
        this.projectsResource.value()?.filter((p: Project) => p.featured) ?? []
    );

    filteredProjects = computed(() => {
        const projects = this.projectsResource.value() ?? [];
        const filter = this.activeFilter();
        if (filter === 'All') return projects;
        return projects.filter((p: Project) => p.tags.includes(filter));
    });

    isLoading = computed(() => this.projectsResource.isLoading());

    constructor() {
        // Initial theme application
        document.documentElement.className = this.theme();
    }

    updateTheme(newTheme: 'dark' | 'light') {
        this._theme.set(newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        document.documentElement.className = newTheme;
    }

    filterCategory(category: string) {
        this._activeFilter.set(category);
    }

    toggleMobileMenu() {
        this._isMobileMenuOpen.update(v => !v);
    }

    closeMobileMenu() {
        this._isMobileMenuOpen.set(false);
    }
}
