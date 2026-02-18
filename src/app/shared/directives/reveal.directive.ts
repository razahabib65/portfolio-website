import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
    selector: '[appReveal]',
    standalone: true
})
export class RevealDirective implements OnInit {
    private el = inject(ElementRef);

    ngOnInit() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.el.nativeElement.classList.add('reveal-active');
                    observer.unobserve(this.el.nativeElement);
                }
            });
        }, { threshold: 0.1 });

        this.el.nativeElement.classList.add('reveal');
        observer.observe(this.el.nativeElement);
    }
}
