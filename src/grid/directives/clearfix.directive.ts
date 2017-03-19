import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[bsClearfix]'
})
export class ClearfixDirective {
  @HostBinding('class.clearfix')
  hasClearfixClass = true
}
