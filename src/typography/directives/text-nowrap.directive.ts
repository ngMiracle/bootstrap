import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[bsTextNowrap]'
})
export class TextNowrapDirective {
  @HostBinding('class.text-nowrap')
  hasTextNowrapClass = true
}
