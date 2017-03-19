import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber } from '../utils'

@Directive({
  selector: '[bsColLg]'
})
export class ColumnLgDirective {
  private _colLg: number

  @Input()
  set bsColLg(value: string | number | null) {
    this._colLg = toNumber(value)
  }

  @HostBinding('class.col-lg-1')
  get hasColLg1Class(): boolean {
    return this._colLg === 1
  }

  @HostBinding('class.col-lg-2')
  get hasColLg2Class(): boolean {
    return this._colLg === 2
  }

  @HostBinding('class.col-lg-3')
  get hasColLg3Class(): boolean {
    return this._colLg === 3
  }

  @HostBinding('class.col-lg-4')
  get hasColLg4Class(): boolean {
    return this._colLg === 4
  }

  @HostBinding('class.col-lg-5')
  get hasColLg5Class(): boolean {
    return this._colLg === 5
  }

  @HostBinding('class.col-lg-6')
  get hasColLg6Class(): boolean {
    return this._colLg === 6
  }

  @HostBinding('class.col-lg-7')
  get hasColLg7Class(): boolean {
    return this._colLg === 7
  }

  @HostBinding('class.col-lg-8')
  get hasColLg8Class(): boolean {
    return this._colLg === 8
  }

  @HostBinding('class.col-lg-9')
  get hasColLg9Class(): boolean {
    return this._colLg === 9
  }

  @HostBinding('class.col-lg-10')
  get hasColLg10Class(): boolean {
    return this._colLg === 10
  }

  @HostBinding('class.col-lg-11')
  get hasColLg11Class(): boolean {
    return this._colLg === 11
  }

  @HostBinding('class.col-lg-12')
  get hasColLg12Class(): boolean {
    return this._colLg === 12
  }
}
