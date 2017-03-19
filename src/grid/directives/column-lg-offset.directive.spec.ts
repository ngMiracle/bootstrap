import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnLgOffsetDirective } from './column-lg-offset.directive';

@Component({
  template: `
    <div [bsColLgOffset]="lgOffset">Content</div>
  `
})
class TestComponent {
  lgOffset: string | number | null
}

describe('ColumnLgOffsetDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnLgOffsetDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnLgOffsetDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-lg-offset-6' class when set 'bsGridLg' to 6`, async(() => {
    component.lgOffset = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-lg-offset-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.lgOffset = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-lg-offset-6']).toBeTruthy()
  }))
})
