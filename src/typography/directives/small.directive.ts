import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[bsSmall]'
})
export class SmallDirective {
  @HostBinding('class.small')
  hasSmallClass = true
}
