import { Component, Input } from '@angular/core';

@Component({
  selector: 'presentation-detail',
  templateUrl: 'presentation-detail.component.html'
})
export class PresentationDetailComponent {
  @Input()
  p: string[];
}
