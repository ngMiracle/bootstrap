import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnSmOffsetDirective } from './column-sm-offset.directive';

@Component({
  template: `
    <div [bsColSmOffset]="smOffset">Content</div>
  `
})
class TestComponent {
  smOffset: string | number | null
}

describe('ColumnSmOffsetDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnSmOffsetDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnSmOffsetDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-sm-offset-6' class when set 'bsGridSm' to 6`, async(() => {
    component.smOffset = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-sm-offset-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.smOffset = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-sm-offset-6']).toBeTruthy()
  }))
})
