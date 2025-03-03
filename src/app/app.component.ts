import { Component, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { remult } from 'remult';
import { TileComponent } from './demo/tile/tile.component';
import { TodoComponent } from './demo/todo/todo.component';
import { ServerStatusComponent } from './demo/server-status/server-status.component';
import { AuthComponent } from './demo/auth/auth.component';
import { AdminComponent } from './demo/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TileComponent,
    TodoComponent,
    ServerStatusComponent,
    AuthComponent,
    AdminComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(zone: NgZone) {
    remult.apiClient.wrapMessageHandling = (handler) =>
      zone.run(() => handler());
  }
}
