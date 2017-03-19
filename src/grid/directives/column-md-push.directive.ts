import { Directive, Input, HostBinding } from '@angular/core'
import { toNumber } from '../utils'

@Directive({
  selector: '[bsColMdPush]'
})
export class ColumnMdPushDirective {
  private _colMdPush: number

  @Input()
  set bsColMdPush(value: string | number | null) {
    this._colMdPush = toNumber(value)
  }

  @HostBinding('class.col-md-push-1')
  get hasColMdPush1Class(): boolean {
    return this._colMdPush === 1
  }

  @HostBinding('class.col-md-push-2')
  get hasColMdPush2Class(): boolean {
    return this._colMdPush === 2
  }

  @HostBinding('class.col-md-push-3')
  get hasColMdPush3Class(): boolean {
    return this._colMdPush === 3
  }

  @HostBinding('class.col-md-push-4')
  get hasColMdPush4Class(): boolean {
    return this._colMdPush === 4
  }

  @HostBinding('class.col-md-push-5')
  get hasColMdPush5Class(): boolean {
    return this._colMdPush === 5
  }

  @HostBinding('class.col-md-push-6')
  get hasColMdPush6Class(): boolean {
    return this._colMdPush === 6
  }

  @HostBinding('class.col-md-push-7')
  get hasColMdPush7Class(): boolean {
    return this._colMdPush === 7
  }

  @HostBinding('class.col-md-push-8')
  get hasColMdPush8Class(): boolean {
    return this._colMdPush === 8
  }

  @HostBinding('class.col-md-push-9')
  get hasColMdPush9Class(): boolean {
    return this._colMdPush === 9
  }

  @HostBinding('class.col-md-push-10')
  get hasColMdPush10Class(): boolean {
    return this._colMdPush === 10
  }

  @HostBinding('class.col-md-push-11')
  get hasColMdPush11Class(): boolean {
    return this._colMdPush === 11
  }

  @HostBinding('class.col-md-push-12')
  get hasColMdPush12Class(): boolean {
    return this._colMdPush === 12
  }
}
