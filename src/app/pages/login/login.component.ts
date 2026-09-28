import { Component } from '@angular/core';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})

export class LoginComponent {
	passwordVisible = false;
	submitted = false;

	togglePasswordVisibility(): void {
		this.passwordVisible = !this.passwordVisible;
	}

	onSubmit(event: SubmitEvent): void {
		event.preventDefault();
		this.submitted = true;
	}
}
