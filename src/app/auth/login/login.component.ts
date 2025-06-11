import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  onSubmit() {
    console.log(this.form);
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    console.log(enteredEmail, enteredPassword);
  }
}

// TEMPLATE-DRIVEN FORM EXAMPLE
// This code is an example of a template-driven form in Angular.

// import {
//   Component,
//   DestroyRef,
//   afterNextRender,
//   inject,
//   viewChild,
// } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
// import { debounceTime } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent {
//   private form = viewChild.required<NgForm>('form');
//   private destroyRef = inject(DestroyRef);

//   constructor() {
//     afterNextRender(() => {
//       const savedForm = window.localStorage.getItem('saved-login-form');

//       if (savedForm) {
//         const loadedFormData = JSON.parse(savedForm);
//         const savedEmail = loadedFormData.email;
//         setTimeout(() => {
//           this.form().controls['email'].setValue(savedEmail);
//         }, 1);
//       }

//       const subscription = this.form()
//         .valueChanges?.pipe(debounceTime(500))
//         .subscribe({
//           next: (value) =>
//             window.localStorage.setItem(
//               'saved-login-form',
//               JSON.stringify({ email: value.email })
//             ),
//         });

//       this.destroyRef.onDestroy(() => subscription?.unsubscribe());
//     });
//   }

//   onSubmit(formData: NgForm) {
//     if (formData.form.invalid) {
//       return;
//     }

//     const enteredEmail = formData.form.value.email;
//     const enteredPassword = formData.form.value.password;

//     console.log(formData.form);
//     console.log(enteredEmail, enteredPassword);

//     formData.form.reset();
//   }
// }
