import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber } from '../utils'

@Directive({
  selector: '[bsColLgPush]'
})
export class ColumnLgPushDirective {
  private _colLgPush: number

  @Input()
  set bsColLgPush(value: string | number | null) {
    this._colLgPush = toNumber(value)
  }

  @HostBinding('class.col-lg-push-1')
  get hasColLgPush1Class(): boolean {
    return this._colLgPush === 1
  }

  @HostBinding('class.col-lg-push-2')
  get hasColLgPush2Class(): boolean {
    return this._colLgPush === 2
  }

  @HostBinding('class.col-lg-push-3')
  get hasColLgPush3Class(): boolean {
    return this._colLgPush === 3
  }

  @HostBinding('class.col-lg-push-4')
  get hasColLgPush4Class(): boolean {
    return this._colLgPush === 4
  }

  @HostBinding('class.col-lg-push-5')
  get hasColLgPush5Class(): boolean {
    return this._colLgPush === 5
  }

  @HostBinding('class.col-lg-push-6')
  get hasColLgPush6Class(): boolean {
    return this._colLgPush === 6
  }

  @HostBinding('class.col-lg-push-7')
  get hasColLgPush7Class(): boolean {
    return this._colLgPush === 7
  }

  @HostBinding('class.col-lg-push-8')
  get hasColLgPush8Class(): boolean {
    return this._colLgPush === 8
  }

  @HostBinding('class.col-lg-push-9')
  get hasColLgPush9Class(): boolean {
    return this._colLgPush === 9
  }

  @HostBinding('class.col-lg-push-10')
  get hasColLgPush10Class(): boolean {
    return this._colLgPush === 10
  }

  @HostBinding('class.col-lg-push-11')
  get hasColLgPush11Class(): boolean {
    return this._colLgPush === 11
  }

  @HostBinding('class.col-lg-push-12')
  get hasColLgPush12Class(): boolean {
    return this._colLgPush === 12
  }
}
