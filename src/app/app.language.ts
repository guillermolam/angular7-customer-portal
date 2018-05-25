import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Language {
    public lang = [{
        "identifier" : "EN",
        "name" : "English",
        "sentences":{
            "YOUR_EMAIL" : "Your email",
            "YOUR_PASSWORD" : "Your password",
            "REMEMBER_ME" : "Remember me",
            "FORGOT_PASS" : "Forgot password",
            "LOGIN" : "Login",
            "REGISTER" : "Register",
            "CONF_PASS" : "Confirm password",
            "CANCEL" : "Cancel",
            "SIGNUPTEXT" : "We are making awesome insurance. Could we take care of you too?",
        }
    },{
        "identifier" : "ES",
        "name" : "Spanish",
        "sentences":{
            "YOUR_EMAIL" : "Tu correo electrónico",
            "YOUR_PASSWORD" : "Tu contraseña",
            "REMEMBER_ME" : "Recuérdame",
            "FORGOT_PASS" : "Se te olvidó tu contraseña",
            "LOGIN" : "Iniciar sesión",
            "REGISTER" : "Registro",
            "CONF_PASS" : "Confirmar contraseña",
            "CANCEL" : "Cancelar",
            "SIGNUPTEXT" : "Hacemos un gran seguro. ¿Podríamos cuidar de usted?",
        }
    }];
}
