import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber } from '../utils'

@Directive({
  selector: '[bsColSm]'
})
export class ColumnSmDirective {
  private _colSm: number

  @Input()
  set bsColSm(value: string | number | null) {
    this._colSm = toNumber(value)
  }

  @HostBinding('class.col-sm-1')
  get hasColSm1Class(): boolean {
    return this._colSm === 1
  }

  @HostBinding('class.col-sm-2')
  get hasColSm2Class(): boolean {
    return this._colSm === 2
  }

  @HostBinding('class.col-sm-3')
  get hasColSm3Class(): boolean {
    return this._colSm === 3
  }

  @HostBinding('class.col-sm-4')
  get hasColSm4Class(): boolean {
    return this._colSm === 4
  }

  @HostBinding('class.col-sm-5')
  get hasColSm5Class(): boolean {
    return this._colSm === 5
  }

  @HostBinding('class.col-sm-6')
  get hasColSm6Class(): boolean {
    return this._colSm === 6
  }

  @HostBinding('class.col-sm-7')
  get hasColSm7Class(): boolean {
    return this._colSm === 7
  }

  @HostBinding('class.col-sm-8')
  get hasColSm8Class(): boolean {
    return this._colSm === 8
  }

  @HostBinding('class.col-sm-9')
  get hasColSm9Class(): boolean {
    return this._colSm === 9
  }

  @HostBinding('class.col-sm-10')
  get hasColSm10Class(): boolean {
    return this._colSm === 10
  }

  @HostBinding('class.col-sm-11')
  get hasColSm11Class(): boolean {
    return this._colSm === 11
  }

  @HostBinding('class.col-sm-12')
  get hasColSm12Class(): boolean {
    return this._colSm === 12
  }
}
