import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnSmPushDirective } from './column-sm-push.directive';

@Component({
  template: `
    <div [bsColSmPush]="smPush">Content</div>
  `
})
class TestComponent {
  smPush: string | number | null
}

describe('ColumnSmPushDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnSmPushDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnSmPushDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-sm-push-6' class when set 'bsGridSm' to 6`, async(() => {
    component.smPush = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-sm-push-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.smPush = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-sm-push-6']).toBeTruthy()
  }))
})
