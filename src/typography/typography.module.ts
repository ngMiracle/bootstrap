import { NgModule } from '@angular/core'
import {
  SmallDirective,
  LeadDirective,
  TextAlignDirective,
  TextNowrapDirective,
  TextTransformDirective
} from './directives'

@NgModule({
  declarations: [
    SmallDirective,
    LeadDirective,
    TextAlignDirective,
    TextNowrapDirective,
    TextTransformDirective
  ],
  exports: [
    SmallDirective,
    LeadDirective,
    TextAlignDirective,
    TextNowrapDirective,
    TextTransformDirective
  ],
})
export class BootstrapTypographyModule { }
