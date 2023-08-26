import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  signUpForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  signIn() {
    const { username, password } = this.signInForm.value;
    this.api.signIn(username, password).subscribe({
      next: () => {
        this.signInForm.reset();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  signUp() {
    const { username, password } = this.signUpForm.value;
    this.api.signUp(username, password).subscribe({
      next: () => {
        this.signUpForm.reset();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
