//comments -info
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Language {
    public lang = [{
        "identifier" : "EN",
        "name" : "English",
        "sentences":{
            
            "LOGIN" : "Login",
            "REGISTER" : "Register",
            "CONF_PASS" : "Confirm Password",
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
            "EMAIL_REQUIRED" : "Email is required.",
            "EMAIL_INVALID" : "Email is invalid.",
            "PASSWORD_REQUIRED" : "Password is required.",
            "CONF_PASS_REQUIRED" : "Confirm Password is required.",
            "PASSWORDS_NOT_MATCH" : "Password and confirm password does not match.",
            "FIRST_TIME": "First Time",
            "SIGN_IN" : "Sign In",



            //login
            "CUSTOMER_ACCESS" : "Customer Access",
            "REMEMBER_ME" : "Remember Me",
            "FORGOT_PASS" : "Forgot Password",
            "CREATE_ACCOUNT" : "Create Account",

            //Passwords
            "SHOW_PASSWORD": "Show Password",
            "HIDE_PASSWORD" : "Hide Password",
            "YOUR_PASSWORD_SHOULD_BE" : "Your Password Should Be",
            "PASSWORD_RULE_ONE" : "Rule One",
            "PASSWORD_RULE_TWO" : "Rule Two",
            "PASSWORD_RULE_THREE" : "Rule Three",
            "PASSWORD_RULE_FOUR" : "Rule Four",
            "PASSWORD_RULE_FIVE" : "Rule Five",
            "DOES_NOT_PASS" : "Does Not Pass",
            "PASSES_THE_RULE": "Passes the Rule",
            "INVALID_USERNAME_PASSWORD": "Invalid Username and/or Password",
            
            //MODAL - HEADER HELP
            "MODAL_HELP_TITLE": "Help",
            "MODAL_HELP_CUSTOMER_PORTAL": "Your MAPFRE Account allows you to access your policy documents, report claims, and make payments any time.",
            "MODAL_HELP_TROUBLE_ACCESSING": "Trouble accessing your account?",
            "MODAL_HELP_DONT_HESITATE": "Please don’t hesitate to contact our Customer Service Department.",
            "CALL_US": "Call Us",
            "EMAIL_US": "Email Us",

            //FOOTER
            "FOOTER_COPY_RIGHT" : 'MAPFRE U.S.A Corp. All rights reserved.',
            
            //Forgot Password Route
            "FORGOT_PASSWORD_TITLE": "Forgot your password",
            "FORGOT_PASSWORD_PARAGRAPH": "We'll send you an email with instructions",
            "FORGOT_PASSWORD_SUBMIT_BUTTON": "Request new Password",
            "FORGOT_PASSWORD_LOGIN_LINK": "Log In",

             //DYNAMIC FORM labels and messages
             "EMAIL" : "Email",
             "PASSWORD" : "Password",
             "VALID_EMAIL_VALIDATION_MESSAGE" : "Please Enter A Valid Email",

             //General messages
             "CAPS_LOCK" : "Caps Lock is On",

        }
    },{
        "identifier" : "ES",
        "name" : "Spanish",
        "sentences":{

            "YOUR_EMAIL" : "Tu correo electrónico", 
            "YOUR_PASSWORD" : "Tu contraseña",
            "REMEMBER_ME" : "Recuérdame",
            "FORGOT_PASS" : "Recordar tu contraseña",
            "LOGIN" : "Iniciar sesión",
            "REGISTER" : "Registro",
            "CONF_PASS" : "Confirmar contraseña",
            "CANCEL" : "Cancelar",
            "SIGNUPTEXT" : "Hacemos un gran seguro. ¿Podríamos cuidar de usted?",
            "FOOTER_TEXT" : "MAPFRE Insurance es una marca y servicio de MAPFRE U.S.A Corp. y sus filiales. Aprender acerca",
            "OUR_COMPANIES" : "Nuestras empresas",
            "PRIVACY" : "Política de privacidad",
            "TERMS" : "Términos y condiciones",
            "QUOTE" : "Cotización",
            "CAREERS" : "Empleo",
            "CONTACT" : "Contacto",
            "RIGHTS" : "MAPFRE U.S.A Corp. Todos los derechos reservados.",
            "EMAIL_REQUIRED" : "Correo electronico es obligatorio.",
            "EMAIL_INVALID" : "El correo electrónico es invalido.",
            "PASSWORD_REQUIRED" : "Contraseña obligatoria.",
            "CONF_PASS_REQUIRED" : "Confirmar contraseña es obligatorio.",
            "PASSWORDS_NOT_MATCH" : "La contraseña y la contraseña no coinciden.",
            "CREATE_ACCOUNT" : "Crear Cuenta",
            "FIRST_TIME": "Primera vez",
            "SIGN_IN" : "Iniciar sesion",
            "CUSTOMER_ACCESS" : "Acceso de clientes",

            //create passwords
            "SHOW_PASSWORD": "Mostrar contraseña",
            "HIDE_PASSWORD" : "Ocultar contraseña",
            "YOUR_PASSWORD_SHOULD_BE" : "Su contraseña deberia ser",
            "PASSWORD_RULE_ONE" : "Primera regla",
            "PASSWORD_RULE_TWO" : "Segunda regla",
            "PASSWORD_RULE_THREE" : "Tercera regla",
            "PASSWORD_RULE_FOUR" : "Cuarta regla",
            "PASSWORD_RULE_FIVE" : "Quinta regla",
            "DOES_NOT_PASS" : "no pasa",
            "PASSES_THE_RULE": "pasa",
            "INVALID_USERNAME_PASSWORD": "Inválido correo electrónico y/o contraseña",
            
            //modal - Header Help
            "MODAL_HELP_TITLE": "Help",
            "MODAL_HELP_CUSTOMER_PORTAL": "Your MAPFRE Account allows you to access your policy documents, report claims, and make payments any time.",
            "MODAL_HELP_TROUBLE_ACCESSING": "Trouble accessing your account?",
            "MODAL_HELP_DONT_HESITATE": "Please don’t hesitate to contact our Customer Service Department.",
            "CALL_US": "Call Us",
            "EMAIL_US": "Email Us",

            //FOOTER
            "FOOTER_COPY_RIGHT" : 'MAPFRE U.S.A Corp. All rights reserved.',

            //Forgot Password Route
            "FORGOT_PASSWORD_TITLE": "Forgot your password",
            "FORGOT_PASSWORD_PARAGRAPF": "We'll send you an email with instructions",
            "FORGOT_PASSWORD_SUBMIT_BUTTON": "Request new Password",
            "FORGOT_PASSWORD_LOGIN_LINK": "Log In",

            //DYNAMIC FORM labels and messages
            "EMAIL" : "Correo Electrónico",
            "PASSWORD" : "Contraseña",
            "VALID_EMAIL_VALIDATION_MESSAGE" : "Please Enter A Valid Email",

            //General messages
            "CAPS_LOCK" : "Caps Lock is On",
        }
    }];
}
