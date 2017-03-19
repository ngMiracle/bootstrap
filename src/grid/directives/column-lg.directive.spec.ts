import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnLgDirective } from './column-lg.directive';

@Component({
  template: `
    <div [bsColLg]="lg">Content</div>
  `
})
class TestComponent {
  lg: string | number | null
}

describe('ColumnLgDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnLgDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnLgDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-lg-6' class when set 'bsGridLg' to 6`, async(() => {
    component.lg = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-lg-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.lg = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-lg-6']).toBeTruthy()
  }))
})
