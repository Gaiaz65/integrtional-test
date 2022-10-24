import { Component, Directive } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorDirective } from './color.directive';

@Component({
  template: `
  <p appColor="yellow">text</p>
  <p appColor>text</p>`,
})
class HostComponent {}

describe('ColorDirective', () => {
  let fixture:ComponentFixture <HostComponent>
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorDirective, HostComponent],
    });
    fixture = TestBed.createComponent(HostComponent)
    fixture.detectChanges()
  });
  it('should create an instance', () => {
    // const directive = new ColorDirective(null);
    // expect(directive).toBeTruthy();
  });

  it( 'should change color' ,() => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0];

    expect(de.nativeElement.style.backgroundColor).toBe('yellow')
  })

   it('should have default color', () => {
     let de = fixture.debugElement.queryAll(By.css('p'))[1];

     let directive = de.injector.get(ColorDirective)

     expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
   });
});
