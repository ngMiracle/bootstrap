import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnXsPullDirective } from './column-xs-pull.directive';

@Component({
  template: `
    <div [bsColXsPull]="xsPull">Content</div>
  `
})
class TestComponent {
  xsPull: string | number | null
}

describe('ColumnXsPullDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnXsPullDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnXsPullDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-xs-pull-6' class when set 'bsGridXs' to 6`, async(() => {
    component.xsPull = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-xs-pull-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.xsPull = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-xs-pull-6']).toBeTruthy()
  }))
})
