import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
})
export class Test3Component implements OnInit {
  newForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newForm = fb.group({
      adress: fb.control(''),
      city: fb.control(''),
      attachments: fb.array([
        fb.group({
          type: fb.control(''),
          color: fb.control(''),
        }),
      ]),
    });
  }

  get attachments() {
    return this.newForm.get('attachments') as FormArray;
  }

  add(i) {
    this.attachments.insert(
      i,
      this.fb.group({
        type: this.fb.control(''),
        color: this.fb.control(''),
      })
    );
  }

  delete(i) {
    this.attachments.removeAt(i);
  }

  ngOnInit(): void {}
}
