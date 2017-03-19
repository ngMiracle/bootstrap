import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnSmDirective } from './column-sm.directive';

@Component({
  template: `
    <div [bsColSm]="sm">Content</div>
  `
})
class TestComponent {
  sm: string | number | null
}

describe('ColumnSmDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnSmDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnSmDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-sm-6' class when set 'bsGridSm' to 6`, async(() => {
    component.sm = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-sm-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.sm = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-sm-6']).toBeTruthy()
  }))
})
