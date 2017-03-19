import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber } from '../utils'

@Directive({
  selector: '[bsGridColMd]'
})
export class ColumnMdDirective {
  private _colMd: number

  @Input()
  set bsGridColMd(value: string | number | null) {
    this._colMd = toNumber(value)
  }

  @HostBinding('class.col-md-1')
  get hasColMd1Class(): boolean {
    return this._colMd === 1
  }

  @HostBinding('class.col-md-2')
  get hasColMd2Class(): boolean {
    return this._colMd === 2
  }

  @HostBinding('class.col-md-3')
  get hasColMd3Class(): boolean {
    return this._colMd === 3
  }

  @HostBinding('class.col-md-4')
  get hasColMd4Class(): boolean {
    return this._colMd === 4
  }

  @HostBinding('class.col-md-5')
  get hasColMd5Class(): boolean {
    return this._colMd === 5
  }

  @HostBinding('class.col-md-6')
  get hasColMd6Class(): boolean {
    return this._colMd === 6
  }

  @HostBinding('class.col-md-7')
  get hasColMd7Class(): boolean {
    return this._colMd === 7
  }

  @HostBinding('class.col-md-8')
  get hasColMd8Class(): boolean {
    return this._colMd === 8
  }

  @HostBinding('class.col-md-9')
  get hasColMd9Class(): boolean {
    return this._colMd === 9
  }

  @HostBinding('class.col-md-10')
  get hasColMd10Class(): boolean {
    return this._colMd === 10
  }

  @HostBinding('class.col-md-11')
  get hasColMd11Class(): boolean {
    return this._colMd === 11
  }

  @HostBinding('class.col-md-12')
  get hasColMd12Class(): boolean {
    return this._colMd === 12
  }
}
