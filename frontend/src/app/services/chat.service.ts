import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable()
export class ChatService {
  private url:string = 'http://localhost:3000';
  private socket;

  constructor() { 
    this.socket = io(this.url);
  }

  public sendMessage(message:string) {
    this.socket.emit('chat message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('chat message', function(msg){
          observer.next(msg)
        });
    });
}
}
