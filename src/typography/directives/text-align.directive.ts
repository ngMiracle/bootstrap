import { Directive, Input, HostBinding } from '@angular/core'

@Directive({
  selector: '[bsTextAlign]'
})
export class TextAlignDirective {
  @Input()
  bsTextAlign: string | null

  @HostBinding('class.text-left')
  get hasTextLeftClass(): boolean {
    return this.bsTextAlign === 'left'
  }

  @HostBinding('class.text-center')
  get hasTextCenterClass(): boolean {
    return this.bsTextAlign === 'center'
  }

  @HostBinding('class.text-right')
  get hasTextRightClass(): boolean {
    return this.bsTextAlign === 'right'
  }

  @HostBinding('class.text-justify')
  get hasTextJustifyClass(): boolean {
    return this.bsTextAlign === 'justify'
  }
}
