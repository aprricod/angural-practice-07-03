import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: fb.control(''),
      age: fb.control(''),
      gender: fb.control(''),
      phones: fb.array([
        fb.group({
          type: fb.control(''),
          num: fb.control(null),
        }),
      ]),
    });
  }

  get phones() {
    return this.form.get('phones') as FormArray;
  }

  insert(i) {
    this.phones.insert(
      i,
      this.fb.group({
        type: this.fb.control(''),
        num: this.fb.control(null),
      })
    );
  }

  delete(i) {
    this.phones.removeAt(i);
  }

  ngOnInit(): void {}
}
