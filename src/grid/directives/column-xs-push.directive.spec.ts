import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnXsPushDirective } from './column-xs-push.directive';

@Component({
  template: `
    <div [bsColXsPush]="xsPush">Content</div>
  `
})
class TestComponent {
  xsPush: string | number | null
}

describe('ColumnXsPushDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnXsPushDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnXsPushDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-xs-push-6' class when set 'bsGridXs' to 6`, async(() => {
    component.xsPush = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-xs-push-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.xsPush = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-xs-push-6']).toBeTruthy()
  }))
})
