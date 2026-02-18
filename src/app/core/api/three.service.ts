import { Injectable, NgZone, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThreeService {
    private zone = inject(NgZone);
    private initialized = false;

    /**
     * Performance tip: Dynamic import of Three.js to keep initial bundle small.
     * Run rendering outside of Angular's zone to prevent unnecessary change detection.
     */
    async initHeroScene(container: HTMLElement) {
        if (this.initialized) return;
        this.initialized = true;

        const THREE = await import('three');

        this.zone.runOutsideAngular(() => {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0x00f2ff, 2.5);
            pointLight.position.set(20, 20, 20);
            scene.add(pointLight);

            // Create a Mobile Device Silhouette (Phone Frame)
            const frameGeometry = new THREE.BoxGeometry(10, 20, 1);
            const edges = new THREE.EdgesGeometry(frameGeometry);
            const frameMaterial = new THREE.LineBasicMaterial({ color: 0x6366f1, linewidth: 2 });
            const phoneFrame = new THREE.LineSegments(edges, frameMaterial);
            scene.add(phoneFrame);

            // Inner 'Content' Grid
            const gridGeometry = new THREE.PlaneGeometry(8, 16, 4, 8);
            const gridMaterial = new THREE.MeshBasicMaterial({
                color: 0x00f2ff,
                wireframe: true,
                transparent: true,
                opacity: 0.2
            });
            const grid = new THREE.Mesh(gridGeometry, gridMaterial);
            grid.position.z = 0.5;
            phoneFrame.add(grid);

            // Floating Components (Spheres/Boxes)
            const compGeometry = new THREE.BoxGeometry(2, 2, 2);
            const compMaterial = new THREE.MeshPhongMaterial({
                color: 0x00f2ff,
                wireframe: true,
                emissive: 0x004444
            });
            const floatingComps: any[] = [];

            for (let i = 0; i < 4; i++) {
                const comp = new THREE.Mesh(compGeometry, compMaterial);
                comp.position.set(
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 10
                );
                scene.add(comp);
                floatingComps.push(comp);
            }

            camera.position.z = 35;

            // Interactive state
            let mouseX = 0;
            let mouseY = 0;
            window.addEventListener('mousemove', (e) => {
                mouseX = (e.clientX / window.innerWidth) - 0.5;
                mouseY = (e.clientY / window.innerHeight) - 0.5;
            });

            const animate = () => {
                requestAnimationFrame(animate);

                // Slow consistent rotation
                phoneFrame.rotation.x += 0.003;
                phoneFrame.rotation.y += 0.005;

                // Animate floating components
                floatingComps.forEach((comp, i) => {
                    comp.rotation.x += 0.01;
                    comp.rotation.y += 0.01;
                    comp.position.y += Math.sin(Date.now() * 0.001 + i) * 0.01;
                });

                // Subtle mouse influence
                phoneFrame.rotation.x += mouseY * 0.05;
                phoneFrame.rotation.y += mouseX * 0.05;

                renderer.render(scene, camera);
            };

            animate();

            const resizeObserver = new ResizeObserver(() => {
                const width = container.clientWidth;
                const height = container.clientHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            });
            resizeObserver.observe(container);
        });
    }
}
