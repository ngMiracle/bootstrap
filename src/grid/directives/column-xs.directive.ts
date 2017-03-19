import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber } from '../utils'

@Directive({
  selector: '[bsColXs]'
})
export class ColumnXsDirective {
  private _colXs: number

  @Input()
  set bsColXs(value: string | number | null) {
    this._colXs = toNumber(value)
  }

  @HostBinding('class.col-xs-1')
  get hasColXs1Class(): boolean {
    return this._colXs === 1
  }

  @HostBinding('class.col-xs-2')
  get hasColXs2Class(): boolean {
    return this._colXs === 2
  }

  @HostBinding('class.col-xs-3')
  get hasColXs3Class(): boolean {
    return this._colXs === 3
  }

  @HostBinding('class.col-xs-4')
  get hasColXs4Class(): boolean {
    return this._colXs === 4
  }

  @HostBinding('class.col-xs-5')
  get hasColXs5Class(): boolean {
    return this._colXs === 5
  }

  @HostBinding('class.col-xs-6')
  get hasColXs6Class(): boolean {
    return this._colXs === 6
  }

  @HostBinding('class.col-xs-7')
  get hasColXs7Class(): boolean {
    return this._colXs === 7
  }

  @HostBinding('class.col-xs-8')
  get hasColXs8Class(): boolean {
    return this._colXs === 8
  }

  @HostBinding('class.col-xs-9')
  get hasColXs9Class(): boolean {
    return this._colXs === 9
  }

  @HostBinding('class.col-xs-10')
  get hasColXs10Class(): boolean {
    return this._colXs === 10
  }

  @HostBinding('class.col-xs-11')
  get hasColXs11Class(): boolean {
    return this._colXs === 11
  }

  @HostBinding('class.col-xs-12')
  get hasColXs12Class(): boolean {
    return this._colXs === 12
  }
}
