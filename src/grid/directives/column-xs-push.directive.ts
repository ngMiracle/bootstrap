import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber } from '../utils'

@Directive({
  selector: '[bsColXsPush]'
})
export class ColumnXsPushDirective {
  private _colXsPush: number

  @Input()
  set bsColXsPush(value: string | number | null) {
    this._colXsPush = toNumber(value)
  }

  @HostBinding('class.col-xs-push-1')
  get hasColXsPush1Class(): boolean {
    return this._colXsPush === 1
  }

  @HostBinding('class.col-xs-push-2')
  get hasColXsPush2Class(): boolean {
    return this._colXsPush === 2
  }

  @HostBinding('class.col-xs-push-3')
  get hasColXsPush3Class(): boolean {
    return this._colXsPush === 3
  }

  @HostBinding('class.col-xs-push-4')
  get hasColXsPush4Class(): boolean {
    return this._colXsPush === 4
  }

  @HostBinding('class.col-xs-push-5')
  get hasColXsPush5Class(): boolean {
    return this._colXsPush === 5
  }

  @HostBinding('class.col-xs-push-6')
  get hasColXsPush6Class(): boolean {
    return this._colXsPush === 6
  }

  @HostBinding('class.col-xs-push-7')
  get hasColXsPush7Class(): boolean {
    return this._colXsPush === 7
  }

  @HostBinding('class.col-xs-push-8')
  get hasColXsPush8Class(): boolean {
    return this._colXsPush === 8
  }

  @HostBinding('class.col-xs-push-9')
  get hasColXsPush9Class(): boolean {
    return this._colXsPush === 9
  }

  @HostBinding('class.col-xs-push-10')
  get hasColXsPush10Class(): boolean {
    return this._colXsPush === 10
  }

  @HostBinding('class.col-xs-push-11')
  get hasColXsPush11Class(): boolean {
    return this._colXsPush === 11
  }

  @HostBinding('class.col-xs-push-12')
  get hasColXsPush12Class(): boolean {
    return this._colXsPush === 12
  }
}
