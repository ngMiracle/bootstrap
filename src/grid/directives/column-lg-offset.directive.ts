import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber } from '../utils'

@Directive({
  selector: '[bsColLgOffset]'
})
export class ColumnLgOffsetDirective {
  private _colLgOffset: number

  @Input()
  set bsColLgOffset(value: string | number | null) {
    this._colLgOffset = toNumber(value)
  }

  @HostBinding('class.col-lg-offset-1')
  get hasColLgOffset1Class(): boolean {
    return this._colLgOffset === 1
  }

  @HostBinding('class.col-lg-offset-2')
  get hasColLgOffset2Class(): boolean {
    return this._colLgOffset === 2
  }

  @HostBinding('class.col-lg-offset-3')
  get hasColLgOffset3Class(): boolean {
    return this._colLgOffset === 3
  }

  @HostBinding('class.col-lg-offset-4')
  get hasColLgOffset4Class(): boolean {
    return this._colLgOffset === 4
  }

  @HostBinding('class.col-lg-offset-5')
  get hasColLgOffset5Class(): boolean {
    return this._colLgOffset === 5
  }

  @HostBinding('class.col-lg-offset-6')
  get hasColLgOffset6Class(): boolean {
    return this._colLgOffset === 6
  }

  @HostBinding('class.col-lg-offset-7')
  get hasColLgOffset7Class(): boolean {
    return this._colLgOffset === 7
  }

  @HostBinding('class.col-lg-offset-8')
  get hasColLgOffset8Class(): boolean {
    return this._colLgOffset === 8
  }

  @HostBinding('class.col-lg-offset-9')
  get hasColLgOffset9Class(): boolean {
    return this._colLgOffset === 9
  }

  @HostBinding('class.col-lg-offset-10')
  get hasColLgOffset10Class(): boolean {
    return this._colLgOffset === 10
  }

  @HostBinding('class.col-lg-offset-11')
  get hasColLgOffset11Class(): boolean {
    return this._colLgOffset === 11
  }

  @HostBinding('class.col-lg-offset-12')
  get hasColLgOffset12Class(): boolean {
    return this._colLgOffset === 12
  }
}
