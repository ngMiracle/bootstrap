import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber, columnNumStr } from '../utils'

@Directive({
  selector: '[bsColSmOffset]'
})
export class ColumnSmOffsetDirective {
  private _colSmOffset: number

  @Input()
  set bsColSmOffset(value: columnNumStr | number | null) {
    this._colSmOffset = toNumber(value)
  }

  @HostBinding('class.col-sm-offset-1')
  get hasColSmOffset1Class(): boolean {
    return this._colSmOffset === 1
  }

  @HostBinding('class.col-sm-offset-2')
  get hasColSmOffset2Class(): boolean {
    return this._colSmOffset === 2
  }

  @HostBinding('class.col-sm-offset-3')
  get hasColSmOffset3Class(): boolean {
    return this._colSmOffset === 3
  }

  @HostBinding('class.col-sm-offset-4')
  get hasColSmOffset4Class(): boolean {
    return this._colSmOffset === 4
  }

  @HostBinding('class.col-sm-offset-5')
  get hasColSmOffset5Class(): boolean {
    return this._colSmOffset === 5
  }

  @HostBinding('class.col-sm-offset-6')
  get hasColSmOffset6Class(): boolean {
    return this._colSmOffset === 6
  }

  @HostBinding('class.col-sm-offset-7')
  get hasColSmOffset7Class(): boolean {
    return this._colSmOffset === 7
  }

  @HostBinding('class.col-sm-offset-8')
  get hasColSmOffset8Class(): boolean {
    return this._colSmOffset === 8
  }

  @HostBinding('class.col-sm-offset-9')
  get hasColSmOffset9Class(): boolean {
    return this._colSmOffset === 9
  }

  @HostBinding('class.col-sm-offset-10')
  get hasColSmOffset10Class(): boolean {
    return this._colSmOffset === 10
  }

  @HostBinding('class.col-sm-offset-11')
  get hasColSmOffset11Class(): boolean {
    return this._colSmOffset === 11
  }

  @HostBinding('class.col-sm-offset-12')
  get hasColSmOffset12Class(): boolean {
    return this._colSmOffset === 12
  }
}
