import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component implements OnInit {
  form2: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form2 = fb.group({
      name: fb.control(''),
      surname: fb.control(''),
      phones: fb.array([
        fb.group({
          type: fb.control(''),
          country: fb.control(''),
        }),
      ]),
    });
  }

  get phones() {
    return this.form2.get('phones') as FormArray;
  }

  add(i) {
    this.phones.insert(
      i,
      this.fb.group({
        type: this.fb.control(''),
        country: this.fb.control(''),
      })
    );
  }

  delete(i) {
    this.phones.removeAt(i);
  }

  ngOnInit(): void {}
}
