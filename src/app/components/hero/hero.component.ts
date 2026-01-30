import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  scrollPosition = 0;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollPosition = window.pageYOffset;
  }

  getParallaxStyle(): { transform: string } {
    // Parallax effect: image follows scroll until hero is out of view
    const maxScroll = 500; // Hero section height
    const translateY = Math.min(this.scrollPosition * 0.5, maxScroll * 0.5);
    return {
      transform: `translateY(${translateY}px)`
    };
  }
}
