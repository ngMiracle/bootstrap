import { NgModule } from '@angular/core'
import { SmallDirective, LeadDirective, TextAlignDirective, TextNowrapDirective } from './directives'

@NgModule({
  declarations: [
    SmallDirective,
    LeadDirective,
    TextAlignDirective,
    TextNowrapDirective
  ],
  exports: [
    SmallDirective,
    LeadDirective,
    TextAlignDirective,
    TextNowrapDirective
  ],
})
export class BootstrapTypographyModule { }
