import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.ngclass.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public align: 'top' | 'bottom' | 'left' | 'right' | 'center' = 'top';

  public alignLeft(): void {
    this.align = 'left';
  }

  public alignRight(): void {
    this.align = 'right';
  }

  public alignTop(): void {
    this.align = 'top';
  }

  public alignBottom(): void {
    this.align = 'bottom';
  }

  public alignCenter(): void {
    this.align = 'center';
  }
}
