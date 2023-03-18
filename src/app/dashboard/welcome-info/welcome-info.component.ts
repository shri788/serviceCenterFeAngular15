import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-info',
  templateUrl: './welcome-info.component.html',
  styleUrls: ['./welcome-info.component.scss']
})
export class WelcomeInfoComponent {
  private utterance = new SpeechSynthesisUtterance();

  constructor(private liveAnnouncer: LiveAnnouncer) {
    liveAnnouncer.announce("Hey Google");
  }

  announceMessage(message: string, politeness?: 'polite' | 'assertive', delay?: number) {
    this.utterance.text = message;
    this.utterance.volume = 1;
    this.utterance.rate = 1;
    this.utterance.pitch = 1;
    this.utterance.lang = 'en-US';
    //this.liveAnnouncer.announce(message, politeness, delay);
    speechSynthesis.speak(this.utterance);
  }

}
