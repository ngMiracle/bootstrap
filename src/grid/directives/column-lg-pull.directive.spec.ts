import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnLgPullDirective } from './column-lg-pull.directive';

@Component({
  template: `
    <div [bsColLgPull]="lgPull">Content</div>
  `
})
class TestComponent {
  lgPull: string | number | null
}

describe('ColumnLgPullDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnLgPullDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnLgPullDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-lg-pull-6' class when set 'bsGridLg' to 6`, async(() => {
    component.lgPull = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-lg-pull-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.lgPull = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-lg-pull-6']).toBeTruthy()
  }))
})
