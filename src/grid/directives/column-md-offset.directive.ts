import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber } from '../utils'

@Directive({
  selector: '[bsColMdOffset]'
})
export class ColumnMdOffsetDirective {
  private _colMdOffset: number

  @Input()
  set bsColMdOffset(value: string | number | null) {
    this._colMdOffset = toNumber(value)
  }

  @HostBinding('class.col-md-offset-1')
  get hasColMdOffset1Class(): boolean {
    return this._colMdOffset === 1
  }

  @HostBinding('class.col-md-offset-2')
  get hasColMdOffset2Class(): boolean {
    return this._colMdOffset === 2
  }

  @HostBinding('class.col-md-offset-3')
  get hasColMdOffset3Class(): boolean {
    return this._colMdOffset === 3
  }

  @HostBinding('class.col-md-offset-4')
  get hasColMdOffset4Class(): boolean {
    return this._colMdOffset === 4
  }

  @HostBinding('class.col-md-offset-5')
  get hasColMdOffset5Class(): boolean {
    return this._colMdOffset === 5
  }

  @HostBinding('class.col-md-offset-6')
  get hasColMdOffset6Class(): boolean {
    return this._colMdOffset === 6
  }

  @HostBinding('class.col-md-offset-7')
  get hasColMdOffset7Class(): boolean {
    return this._colMdOffset === 7
  }

  @HostBinding('class.col-md-offset-8')
  get hasColMdOffset8Class(): boolean {
    return this._colMdOffset === 8
  }

  @HostBinding('class.col-md-offset-9')
  get hasColMdOffset9Class(): boolean {
    return this._colMdOffset === 9
  }

  @HostBinding('class.col-md-offset-10')
  get hasColMdOffset10Class(): boolean {
    return this._colMdOffset === 10
  }

  @HostBinding('class.col-md-offset-11')
  get hasColMdOffset11Class(): boolean {
    return this._colMdOffset === 11
  }

  @HostBinding('class.col-md-offset-12')
  get hasColMdOffset12Class(): boolean {
    return this._colMdOffset === 12
  }
}
