import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isChatbotEnabled: boolean = false;
  title = 'Welcome to the Product Listing App';

  toggleChatbot(): void {
    this.isChatbotEnabled = !this.isChatbotEnabled;
  }
}
