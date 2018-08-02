//comments -info
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as english from "../assets/language/english/english.json";
import * as spanish from "../assets/language/spanish/spanish.json";

console.log(english)
@Injectable()
export class Language {
    public lang = [{
        "identifier" : "EN",
        "name" : "English",
        "sentences":english
    },{
        "identifier" : "ES",
        "name" : "Spanish",
        "sentences":spanish
    }];
}
