import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber, columnNumStr } from '../utils'

@Directive({
  selector: '[bsColMdPull]'
})
export class ColumnMdPullDirective {
  private _colMdPull: number

  @Input()
  set bsColMdPull(value: columnNumStr | number | null) {
    this._colMdPull = toNumber(value)
  }

  @HostBinding('class.col-md-pull-1')
  get hasColMdPull1Class(): boolean {
    return this._colMdPull === 1
  }

  @HostBinding('class.col-md-pull-2')
  get hasColMdPull2Class(): boolean {
    return this._colMdPull === 2
  }

  @HostBinding('class.col-md-pull-3')
  get hasColMdPull3Class(): boolean {
    return this._colMdPull === 3
  }

  @HostBinding('class.col-md-pull-4')
  get hasColMdPull4Class(): boolean {
    return this._colMdPull === 4
  }

  @HostBinding('class.col-md-pull-5')
  get hasColMdPull5Class(): boolean {
    return this._colMdPull === 5
  }

  @HostBinding('class.col-md-pull-6')
  get hasColMdPull6Class(): boolean {
    return this._colMdPull === 6
  }

  @HostBinding('class.col-md-pull-7')
  get hasColMdPull7Class(): boolean {
    return this._colMdPull === 7
  }

  @HostBinding('class.col-md-pull-8')
  get hasColMdPull8Class(): boolean {
    return this._colMdPull === 8
  }

  @HostBinding('class.col-md-pull-9')
  get hasColMdPull9Class(): boolean {
    return this._colMdPull === 9
  }

  @HostBinding('class.col-md-pull-10')
  get hasColMdPull10Class(): boolean {
    return this._colMdPull === 10
  }

  @HostBinding('class.col-md-pull-11')
  get hasColMdPull11Class(): boolean {
    return this._colMdPull === 11
  }

  @HostBinding('class.col-md-pull-12')
  get hasColMdPull12Class(): boolean {
    return this._colMdPull === 12
  }
}
