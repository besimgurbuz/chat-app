import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string;
  messages:string[] = [];
  username:string = "";
  usernameValidatation:boolean = false;

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if(this.message != "" && this.username != "") {
      this.chatService.sendMessage(`${this.username} ::: ${this.message}`);
      this.message = "";
    }
    else {
      this.validatorAlert();
    }
  }
  validatorAlert() {
    console.log("hello, there");
    
    this.usernameValidatation = true;
  }
  
  getUsername(username:string = "") {
    if(username != "") this.username = username;
  }

  ngOnInit() {
    console.log("asdfa");
    
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
  }
}
