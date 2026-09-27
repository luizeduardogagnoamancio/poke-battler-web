import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [MatCardModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})

export class LoginComponent {
	private audio = new Audio()

	ngOnInit() {
		this.audio.src = '/sounds/ost/Clash_at_the_Zenith.mp3'
		this.audio.loop = true
		this.audio.volume = 0.5
		this.audio.load()
		this.playMusic()
	}

	playMusic() {
		this.audio.play().catch(error => {
			console.log('Autoplay blocked by browser', error)
		})
	}

	stopMusic() {
		this.audio.pause()
	}
}
