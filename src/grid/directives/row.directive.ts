import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[bsGridRow]'
})
export class RowDirective {
  @HostBinding('class.row')
  hasRowClass = true
}
