import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course-routes';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {
    
  }

  ngOnInit() {
    this.authService.mostrarMenuEmmiter.subscribe(
      mostrar => this.mostrarMenu = mostrarr
    );
  }
}
