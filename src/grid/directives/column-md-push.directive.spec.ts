import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnMdPushDirective } from './column-md-push.directive';

@Component({
  template: `
    <div [bsColMdPush]="mdPush">Content</div>
  `
})
class TestComponent {
  mdPush: string | number | null
}

describe('ColumnMdPushDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnMdPushDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnMdPushDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-md-push-6' class when set 'bsGridMd' to 6`, async(() => {
    component.mdPush = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-md-push-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.mdPush = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-md-push-6']).toBeTruthy()
  }))
})
