import { Directive, Input, HostBinding } from '@angular/core'

@Directive({
  selector: '[bsContainer]'
})
export class ContainerDirective {
  @Input()
  bsContainer: string | null

  @HostBinding('class.container')
  get hasContainerClass(): boolean {
    return !this.isFluid
  }

  @HostBinding('class.container-fluid')
  get hasContainerFluidClass(): boolean {
    return this.isFluid
  }

  private get isFluid(): boolean {
    return this.bsContainer === 'fluid'
  }
}
