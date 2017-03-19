import { Directive, Input, HostBinding } from '@angular/core'

@Directive({
  selector: '[bsTextTransform]'
})
export class TextTransformDirective {
  @Input()
  bsTextTransform: 'lowercase' | 'uppercase' | 'capitalize' | null

  @HostBinding('class.text-lowercase')
  get hasTextLowercaseClass(): boolean {
    return this.bsTextTransform === 'lowercase'
  }

  @HostBinding('class.text-uppercase')
  get hasTextUppercaseClass(): boolean {
    return this.bsTextTransform === 'uppercase'
  }

  @HostBinding('class.text-capitalize')
  get hasTextCapitalizeClass(): boolean {
    return this.bsTextTransform === 'capitalize'
  }
}
