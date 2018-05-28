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
            "FOOTER_TEXT" : "MAPFRE Insurance is a brand and service of MAPFRE U.S.A Corp. and its affiliates. Learn about",
            "OUR_COMPANIES" : "Our Companies",
            "PRIVACY" : "Privacy Policy",
            "TERMS" : "Terms & Conditions",
            "QUOTE" : "Quote Disclosure",
            "CAREERS" : "Careers",
            "CONTACT" : "Contact",
            "RIGHTS" : "MAPFRE U.S.A Corp. All rights reserved.",
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
            "FOOTER_TEXT" : "MAPFRE Insurance es una marca y servicio de MAPFRE U.S.A Corp. y sus filiales. Aprender acerca",
            "OUR_COMPANIES" : "Nuestras empresas",
            "PRIVACY" : "Política de privacidad",
            "TERMS" : "Términos y condiciones",
            "QUOTE" : "Divulgación de cotización",
            "CAREERS" : "Carreras",
            "CONTACT" : "Contacto",
            "RIGHTS" : "MAPFRE U.S.A Corp. Todos los derechos reservados.",
        }
    }];
}
