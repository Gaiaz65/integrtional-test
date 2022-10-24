import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {CounterComponent} from "./counter.component";

describe('CounterComponent', () => {
  let component: CounterComponent
  let fixture:ComponentFixture<CounterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[CounterComponent]
    })
    fixture = TestBed.createComponent(CounterComponent)
    component = fixture.componentInstance
  })

  it('should be created', () => {
    expect(component).toBeDefined()
  })

  it('should render counter property', () =>{
  let num = 42
  component.counter = num

  fixture.detectChanges()

    let counter = fixture.debugElement.query(By.css('.counter'))
    let el:HTMLElement = counter.nativeElement

    expect(el.textContent).toContain(num.toString())
  })

  it('should add class (green) if counter is even', () => {
    component.counter = 0

    fixture.detectChanges()
    let counter = fixture.debugElement.query(By.css('.counter'));
    let el: HTMLElement = counter.nativeElement;

    expect(el.classList.contains('green')).toBeTruthy()
  })

  it('should increase counter value if increment button was clicked', () => {
    let btn = fixture.debugElement.query(By.css('#increment'));
    btn.triggerEventHandler('click', null)

    expect(component.counter).toBe(1)
  })
})
