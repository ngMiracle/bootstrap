import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber } from '../utils'

@Directive({
  selector: '[bsColLgPull]'
})
export class ColumnLgPullDirective {
  private _colLgPull: number

  @Input()
  set bsColLgPull(value: string | number | null) {
    this._colLgPull = toNumber(value)
  }

  @HostBinding('class.col-lg-pull-1')
  get hasColLgPull1Class(): boolean {
    return this._colLgPull === 1
  }

  @HostBinding('class.col-lg-pull-2')
  get hasColLgPull2Class(): boolean {
    return this._colLgPull === 2
  }

  @HostBinding('class.col-lg-pull-3')
  get hasColLgPull3Class(): boolean {
    return this._colLgPull === 3
  }

  @HostBinding('class.col-lg-pull-4')
  get hasColLgPull4Class(): boolean {
    return this._colLgPull === 4
  }

  @HostBinding('class.col-lg-pull-5')
  get hasColLgPull5Class(): boolean {
    return this._colLgPull === 5
  }

  @HostBinding('class.col-lg-pull-6')
  get hasColLgPull6Class(): boolean {
    return this._colLgPull === 6
  }

  @HostBinding('class.col-lg-pull-7')
  get hasColLgPull7Class(): boolean {
    return this._colLgPull === 7
  }

  @HostBinding('class.col-lg-pull-8')
  get hasColLgPull8Class(): boolean {
    return this._colLgPull === 8
  }

  @HostBinding('class.col-lg-pull-9')
  get hasColLgPull9Class(): boolean {
    return this._colLgPull === 9
  }

  @HostBinding('class.col-lg-pull-10')
  get hasColLgPull10Class(): boolean {
    return this._colLgPull === 10
  }

  @HostBinding('class.col-lg-pull-11')
  get hasColLgPull11Class(): boolean {
    return this._colLgPull === 11
  }

  @HostBinding('class.col-lg-pull-12')
  get hasColLgPull12Class(): boolean {
    return this._colLgPull === 12
  }
}
