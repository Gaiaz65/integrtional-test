import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unit-testing',
  templateUrl: './unit-testing.component.html',
  styleUrls: ['./unit-testing.component.scss'],
})
export class UnitTestingComponent {
  counter = 0;

  public form!: FormGroup;

  constructor(private fb:FormBuilder) {
    this.form = fb.group({
      login:['',Validators.required],
      email:['']
    })
  }

  @Output() counterEmiter = new EventEmitter<number>();

  increment() {
    this.counter++;
    this.counterEmiter.emit(this.counter);
  }
  decrement() {
    this.counter--;
  }

}
