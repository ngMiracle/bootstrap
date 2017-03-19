import { Directive, Input, HostBinding } from '@angular/core'

@Directive({
  selector: '[bs-container]'
})
export class ContainerDirective {
  @Input('bs-container')
  type: string | null

  @HostBinding('class.container')
  get hasContainerClass() {
    return this.type !== 'fluid'
  }
}
