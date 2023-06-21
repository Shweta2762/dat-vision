import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment'
// import { Socket } from 'ngx-socket-io';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketActivitiesService {

  user_activity_socket: any;
  readonly USER_ACTIVITIES_SOCKET_URL: string = "wss://" + "localhost" + ":4051/";

  // constructor(private socket:Socket) { }
  constructor() {
    this.user_activity_socket = io(this.USER_ACTIVITIES_SOCKET_URL)
  }

  public sendMessage(eventName: string, userDetails = {}): void {
    this.user_activity_socket.emit(eventName, userDetails);
  }

  public getOnlineUsers(userDetails = { room: 'Global' }) {
    this.user_activity_socket.emit('getOnlineUsers', userDetails);
    return new Observable((observer) => {
      this.user_activity_socket.on('usersOnline', (data: any) => {
        observer.next(data);
      });
    });
  }

  public getDisconnectedUser() {
    return new Observable((observer) => {
      this.user_activity_socket.on('userDisconnected', (data: any) => {
        observer.next(data);
      });
    });
  }

  public unsubscribe(eventName: string) {
    return new Observable((observer) => {
      this.user_activity_socket.off(eventName);
    });
  }

  public getMultiple(events: Array<any>) {
    return new Observable((observer) => {
      this.user_activity_socket.on("connect", (data: any) => {
      });
      events.forEach(eventName => {
        this.user_activity_socket.on(eventName, (data: any) => {
          observer.next(data);
        });
      });
    });
  }

  public unsubscribeMultiple(events: Array<any>) {
    return new Observable((observer) => {
      events.forEach(eventName => {
        this.user_activity_socket.off(eventName);
      });
    });
  }

  public unsubscribeAll() {
    return new Observable((observer) => {
      this.user_activity_socket.removeAllListeners();
    });
  }
}
