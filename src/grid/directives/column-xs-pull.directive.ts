import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber, columnNumStr } from '../utils'

@Directive({
  selector: '[bsColXsPull]'
})
export class ColumnXsPullDirective {
  private _colXsPull: number

  @Input()
  set bsColXsPull(value: columnNumStr | number | null) {
    this._colXsPull = toNumber(value)
  }

  @HostBinding('class.col-xs-pull-1')
  get hasColXsPull1Class(): boolean {
    return this._colXsPull === 1
  }

  @HostBinding('class.col-xs-pull-2')
  get hasColXsPull2Class(): boolean {
    return this._colXsPull === 2
  }

  @HostBinding('class.col-xs-pull-3')
  get hasColXsPull3Class(): boolean {
    return this._colXsPull === 3
  }

  @HostBinding('class.col-xs-pull-4')
  get hasColXsPull4Class(): boolean {
    return this._colXsPull === 4
  }

  @HostBinding('class.col-xs-pull-5')
  get hasColXsPull5Class(): boolean {
    return this._colXsPull === 5
  }

  @HostBinding('class.col-xs-pull-6')
  get hasColXsPull6Class(): boolean {
    return this._colXsPull === 6
  }

  @HostBinding('class.col-xs-pull-7')
  get hasColXsPull7Class(): boolean {
    return this._colXsPull === 7
  }

  @HostBinding('class.col-xs-pull-8')
  get hasColXsPull8Class(): boolean {
    return this._colXsPull === 8
  }

  @HostBinding('class.col-xs-pull-9')
  get hasColXsPull9Class(): boolean {
    return this._colXsPull === 9
  }

  @HostBinding('class.col-xs-pull-10')
  get hasColXsPull10Class(): boolean {
    return this._colXsPull === 10
  }

  @HostBinding('class.col-xs-pull-11')
  get hasColXsPull11Class(): boolean {
    return this._colXsPull === 11
  }

  @HostBinding('class.col-xs-pull-12')
  get hasColXsPull12Class(): boolean {
    return this._colXsPull === 12
  }
}
