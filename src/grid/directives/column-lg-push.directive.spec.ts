import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnLgPushDirective } from './column-lg-push.directive';

@Component({
  template: `
    <div [bsColLgPush]="lgPush">Content</div>
  `
})
class TestComponent {
  lgPush: string | number | null
}

describe('ColumnLgPushDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnLgPushDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnLgPushDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-lg-push-6' class when set 'bsGridLg' to 6`, async(() => {
    component.lgPush = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-lg-push-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.lgPush = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-lg-push-6']).toBeTruthy()
  }))
})
