import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnSmPullDirective } from './column-sm-pull.directive';

@Component({
  template: `
    <div [bsColSmPull]="smPull">Content</div>
  `
})
class TestComponent {
  smPull: string | number | null
}

describe('ColumnSmPullDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnSmPullDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnSmPullDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-sm-pull-6' class when set 'bsGridSm' to 6`, async(() => {
    component.smPull = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-sm-pull-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.smPull = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-sm-pull-6']).toBeTruthy()
  }))
})
