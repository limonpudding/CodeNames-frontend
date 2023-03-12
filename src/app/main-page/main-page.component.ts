import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  createForm!: UntypedFormGroup;
  enterForm!: UntypedFormGroup;

  submitCreateForm(): void {
    if (this.createForm.valid) {
      console.log('submit', this.createForm.value);
    } else {
      Object.values(this.createForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  submitEnterForm(): void {
    if (this.enterForm.valid) {
      console.log('submit', this.enterForm.value);
    } else {
      Object.values(this.enterForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      roomName: [null, [Validators.required]]
    });
    this.enterForm = this.fb.group({
      roomId: [null, [Validators.required]]
    });
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    // Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    // if (!control.value) {
    //   return { required: true };
    // } else if (control.value !== this.validateForm.controls.password.value) {
    //   return { confirm: true, error: true };
    // }
    return {};
  };
}
