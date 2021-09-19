import { Component, OnInit } from '@angular/core';
import KUTE from 'kute.js';

@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.scss'],
})
export class WavesComponent implements OnInit {
  constructor() {}

  generateTween(firstSvgSelector: string, secondSvgSelector: string): any {
    return KUTE.fromTo(
      firstSvgSelector,
      { path: firstSvgSelector },
      { path: secondSvgSelector },
      { repeat: 999, duration: 9000, yoyo: true }
    );
  }

  ngOnInit(): void {
    const tween1 = this.generateTween('#wave-1-group-1', '#wave-1-group-2');
    const tween2 = this.generateTween('#wave-2-group-1', '#wave-2-group-2');
    const tween3 = this.generateTween('#wave-3-group-1', '#wave-3-group-2');
    const tween4 = this.generateTween('#wave-4-group-1', '#wave-4-group-2');
    const tween5 = this.generateTween('#wave-5-group-1', '#wave-5-group-2');

    tween1.start();
    tween2.start();
    tween3.start();
    tween4.start();
    tween5.start();
  }
}
