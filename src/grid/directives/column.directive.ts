import { Directive, Input, HostBinding } from '@angular/core'

function toNumber(val: string | number | null): number {
  if (typeof val === 'string') {
    return Number.parseInt(val, 10)
  } else if (typeof val === 'number') {
    return val
  } else {
    return 0
  }
}

@Directive({
  selector: '[bsGridColXs], [bsGridColSm], [bsGridColMd], [bsGridColLg]'
})
export class ColumnDirective {
  private _colXs: number
  private _colSm: number
  private _colMd: number
  private _colLg: number

  @Input()
  set bsGridColXs(value: string | number | null) {
    this._colXs = toNumber(value)
  }

  @Input()
  set bsGridColSm(value: string | number | null) {
    this._colSm = toNumber(value)
  }

  @Input()
  set bsGridColMd(value: string | number | null) {
    this._colMd = toNumber(value)
  }

  @Input()
  set bsGridColLg(value: string | number | null) {
    this._colLg = toNumber(value)
  }

  @HostBinding('class.col-xs-1')
  get hasColXs1Class(): boolean {
    return this._colXs === 1
  }

  // For xs
  @HostBinding('class.col-xs-2')
  get hasColXs2Class(): boolean {
    return this._colXs === 2
  }

  @HostBinding('class.col-xs-3')
  get hasColXs3Class(): boolean {
    return this._colXs === 3
  }

  @HostBinding('class.col-xs-4')
  get hasColXs4Class(): boolean {
    return this._colXs === 4
  }

  @HostBinding('class.col-xs-5')
  get hasColXs5Class(): boolean {
    return this._colXs === 5
  }

  @HostBinding('class.col-xs-6')
  get hasColXs6Class(): boolean {
    return this._colXs === 6
  }

  @HostBinding('class.col-xs-7')
  get hasColXs7Class(): boolean {
    return this._colXs === 7
  }

  @HostBinding('class.col-xs-8')
  get hasColXs8Class(): boolean {
    return this._colXs === 8
  }

  @HostBinding('class.col-xs-9')
  get hasColXs9Class(): boolean {
    return this._colXs === 9
  }

  @HostBinding('class.col-xs-10')
  get hasColXs10Class(): boolean {
    return this._colXs === 10
  }

  @HostBinding('class.col-xs-11')
  get hasColXs11Class(): boolean {
    return this._colXs === 11
  }

  @HostBinding('class.col-xs-12')
  get hasColXs12Class(): boolean {
    return this._colXs === 12
  }

  // For sm
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

  // For md
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

  // For lg
  @HostBinding('class.col-lg-1')
  get hasColLg1Class(): boolean {
    return this._colLg === 1
  }

  @HostBinding('class.col-lg-2')
  get hasColLg2Class(): boolean {
    return this._colLg === 2
  }

  @HostBinding('class.col-lg-3')
  get hasColLg3Class(): boolean {
    return this._colLg === 3
  }

  @HostBinding('class.col-lg-4')
  get hasColLg4Class(): boolean {
    return this._colLg === 4
  }

  @HostBinding('class.col-lg-5')
  get hasColLg5Class(): boolean {
    return this._colLg === 5
  }

  @HostBinding('class.col-lg-6')
  get hasColLg6Class(): boolean {
    return this._colLg === 6
  }

  @HostBinding('class.col-lg-7')
  get hasColLg7Class(): boolean {
    return this._colLg === 7
  }

  @HostBinding('class.col-lg-8')
  get hasColLg8Class(): boolean {
    return this._colLg === 8
  }

  @HostBinding('class.col-lg-9')
  get hasColLg9Class(): boolean {
    return this._colLg === 9
  }

  @HostBinding('class.col-lg-10')
  get hasColLg10Class(): boolean {
    return this._colLg === 10
  }

  @HostBinding('class.col-lg-11')
  get hasColLg11Class(): boolean {
    return this._colLg === 11
  }

  @HostBinding('class.col-lg-12')
  get hasColLg12Class(): boolean {
    return this._colLg === 12
  }
}
