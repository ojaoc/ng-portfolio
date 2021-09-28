import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @ViewChild('outerElem', { read: ElementRef, static: false })
  elementView: ElementRef;

  showBg: Boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.showBg = this.getToolbarScrolledPastHeader();
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    const isScrolledPastHeader: Boolean = this.getToolbarScrolledPastHeader();
    this.showBg = isScrolledPastHeader;

    if (isScrolledPastHeader) {
      console.log('swag');
    }
  }

  private getHeaderHeightMinusToolbar(): Number {
    return Math.abs(
      (document.getElementById('header-container')?.offsetHeight ?? 0) -
        this.elementView.nativeElement.offsetHeight
    );
  }

  private getToolbarScrolledPastHeader(): Boolean {
    return (
      document.documentElement.scrollTop >= this.getHeaderHeightMinusToolbar()
    );
  }
}
