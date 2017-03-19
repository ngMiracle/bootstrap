import { Component, Input, HostBinding } from '@angular/core'

@Component({
  selector: 'bs-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent {
  isFluid: boolean = false

  @Input()
  set bsFluid(value: string | boolean | null) {
    this.isFluid = value !== false && value !== 'false' && value != null
  }
}
