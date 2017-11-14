import { Component } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  private _hubConnection: HubConnection;
  nick = '';
  message = '';
  messages: string[] = [];
}
