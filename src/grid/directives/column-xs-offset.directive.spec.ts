import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnXsOffsetDirective } from './column-xs-offset.directive';

@Component({
  template: `
    <div [bsGridColXsOffset]="xsOffset">Content</div>
  `
})
class TestComponent {
  xsOffset: string | number | null
}

describe('ColumnXsOffsetDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnXsOffsetDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnXsOffsetDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-xs-offset-6' class when set 'bsGridXs' to 6`, async(() => {
    component.xsOffset = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-xs-offset-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.xsOffset = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-xs-offset-6']).toBeTruthy()
  }))
})
