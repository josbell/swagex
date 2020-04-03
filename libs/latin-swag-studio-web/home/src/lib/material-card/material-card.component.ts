import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

export interface ActionButton {
  id: string;
  label: string;
}

export interface CardConfig {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  alt?: string;
  description?: string;
  actionButton?: ActionButton[];
}

@Component({
  selector: 'swagex-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialCardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() imageUrl?: string;
  @Input() alt?: string;
  @Input() description?: string;
  @Input() actionButtons: ActionButton[];
  @Output() buttonClicked = new EventEmitter<string>();

  constructor() {}
}
