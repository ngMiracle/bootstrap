import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnXsDirective } from './column-xs.directive';

@Component({
  template: `
    <div [bsGridColXs]="xs">Content</div>
  `
})
class TestComponent {
  xs: string | number | null
}

describe('ColumnXsDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnXsDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnXsDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-xs-6' class when set 'bsGridXs' to 6`, async(() => {
    component.xs = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-xs-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.xs = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-xs-6']).toBeTruthy()
  }))
})
