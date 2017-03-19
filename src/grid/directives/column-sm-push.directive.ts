import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber, columnNumStr } from '../utils'

@Directive({
  selector: '[bsColSmPush]'
})
export class ColumnSmPushDirective {
  private _colSmPush: number

  @Input()
  set bsColSmPush(value: columnNumStr | number | null) {
    this._colSmPush = toNumber(value)
  }

  @HostBinding('class.col-sm-push-1')
  get hasColSmPush1Class(): boolean {
    return this._colSmPush === 1
  }

  @HostBinding('class.col-sm-push-2')
  get hasColSmPush2Class(): boolean {
    return this._colSmPush === 2
  }

  @HostBinding('class.col-sm-push-3')
  get hasColSmPush3Class(): boolean {
    return this._colSmPush === 3
  }

  @HostBinding('class.col-sm-push-4')
  get hasColSmPush4Class(): boolean {
    return this._colSmPush === 4
  }

  @HostBinding('class.col-sm-push-5')
  get hasColSmPush5Class(): boolean {
    return this._colSmPush === 5
  }

  @HostBinding('class.col-sm-push-6')
  get hasColSmPush6Class(): boolean {
    return this._colSmPush === 6
  }

  @HostBinding('class.col-sm-push-7')
  get hasColSmPush7Class(): boolean {
    return this._colSmPush === 7
  }

  @HostBinding('class.col-sm-push-8')
  get hasColSmPush8Class(): boolean {
    return this._colSmPush === 8
  }

  @HostBinding('class.col-sm-push-9')
  get hasColSmPush9Class(): boolean {
    return this._colSmPush === 9
  }

  @HostBinding('class.col-sm-push-10')
  get hasColSmPush10Class(): boolean {
    return this._colSmPush === 10
  }

  @HostBinding('class.col-sm-push-11')
  get hasColSmPush11Class(): boolean {
    return this._colSmPush === 11
  }

  @HostBinding('class.col-sm-push-12')
  get hasColSmPush12Class(): boolean {
    return this._colSmPush === 12
  }
}
