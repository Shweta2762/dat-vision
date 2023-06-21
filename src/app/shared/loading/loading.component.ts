import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() color?: ThemePalette = "primary";
  @Input() diameter?: number = 50;
  @Input() mode?: ProgressSpinnerMode = "indeterminate"!;
  @Input() strokeWidth?: number = 5;
  @Input() value?: number = 50;
}
