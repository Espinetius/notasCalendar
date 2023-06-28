import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'notasCalendar';
    loggeado = false;
    register = false;
    showLogin = true;
    showRegistration = false;
    switchToRegistration() {
        this.showLogin = false; // Ocultar el componente de inicio de sesión
        this.showRegistration = true; // Mostrar el componente de registro
    }
    switchToLogin() {
        this.showLogin = true;  //Mostramos el componente del login
        this.showRegistration = false; //Ocultar el componente de registro
    }

}
