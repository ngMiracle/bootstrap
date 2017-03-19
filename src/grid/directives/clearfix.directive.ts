import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[bsGridClearfix]'
})
export class ClearfixDirective {
  @HostBinding('class.clearfix')
  hasClearfixClass = true
}
