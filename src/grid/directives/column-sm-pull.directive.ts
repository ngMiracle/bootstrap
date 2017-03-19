import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber, columnNumStr } from '../utils'

@Directive({
  selector: '[bsColSmPull]'
})
export class ColumnSmPullDirective {
  private _colSmPull: number

  @Input()
  set bsColSmPull(value: columnNumStr | number | null) {
    this._colSmPull = toNumber(value)
  }

  @HostBinding('class.col-sm-pull-1')
  get hasColSmPull1Class(): boolean {
    return this._colSmPull === 1
  }

  @HostBinding('class.col-sm-pull-2')
  get hasColSmPull2Class(): boolean {
    return this._colSmPull === 2
  }

  @HostBinding('class.col-sm-pull-3')
  get hasColSmPull3Class(): boolean {
    return this._colSmPull === 3
  }

  @HostBinding('class.col-sm-pull-4')
  get hasColSmPull4Class(): boolean {
    return this._colSmPull === 4
  }

  @HostBinding('class.col-sm-pull-5')
  get hasColSmPull5Class(): boolean {
    return this._colSmPull === 5
  }

  @HostBinding('class.col-sm-pull-6')
  get hasColSmPull6Class(): boolean {
    return this._colSmPull === 6
  }

  @HostBinding('class.col-sm-pull-7')
  get hasColSmPull7Class(): boolean {
    return this._colSmPull === 7
  }

  @HostBinding('class.col-sm-pull-8')
  get hasColSmPull8Class(): boolean {
    return this._colSmPull === 8
  }

  @HostBinding('class.col-sm-pull-9')
  get hasColSmPull9Class(): boolean {
    return this._colSmPull === 9
  }

  @HostBinding('class.col-sm-pull-10')
  get hasColSmPull10Class(): boolean {
    return this._colSmPull === 10
  }

  @HostBinding('class.col-sm-pull-11')
  get hasColSmPull11Class(): boolean {
    return this._colSmPull === 11
  }

  @HostBinding('class.col-sm-pull-12')
  get hasColSmPull12Class(): boolean {
    return this._colSmPull === 12
  }
}
