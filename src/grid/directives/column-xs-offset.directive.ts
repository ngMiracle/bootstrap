import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber } from '../utils'

@Directive({
  selector: '[bsGridColXsOffset]'
})
export class ColumnXsOffsetDirective {
  private _colXsOffset: number

  @Input()
  set bsGridColXsOffset(value: string | number | null) {
    this._colXsOffset = toNumber(value)
  }

  @HostBinding('class.col-xs-offset-1')
  get hasColXsOffset1Class(): boolean {
    return this._colXsOffset === 1
  }

  @HostBinding('class.col-xs-offset-2')
  get hasColXsOffset2Class(): boolean {
    return this._colXsOffset === 2
  }

  @HostBinding('class.col-xs-offset-3')
  get hasColXsOffset3Class(): boolean {
    return this._colXsOffset === 3
  }

  @HostBinding('class.col-xs-offset-4')
  get hasColXsOffset4Class(): boolean {
    return this._colXsOffset === 4
  }

  @HostBinding('class.col-xs-offset-5')
  get hasColXsOffset5Class(): boolean {
    return this._colXsOffset === 5
  }

  @HostBinding('class.col-xs-offset-6')
  get hasColXsOffset6Class(): boolean {
    return this._colXsOffset === 6
  }

  @HostBinding('class.col-xs-offset-7')
  get hasColXsOffset7Class(): boolean {
    return this._colXsOffset === 7
  }

  @HostBinding('class.col-xs-offset-8')
  get hasColXsOffset8Class(): boolean {
    return this._colXsOffset === 8
  }

  @HostBinding('class.col-xs-offset-9')
  get hasColXsOffset9Class(): boolean {
    return this._colXsOffset === 9
  }

  @HostBinding('class.col-xs-offset-10')
  get hasColXsOffset10Class(): boolean {
    return this._colXsOffset === 10
  }

  @HostBinding('class.col-xs-offset-11')
  get hasColXsOffset11Class(): boolean {
    return this._colXsOffset === 11
  }

  @HostBinding('class.col-xs-offset-12')
  get hasColXsOffset12Class(): boolean {
    return this._colXsOffset === 12
  }
}
