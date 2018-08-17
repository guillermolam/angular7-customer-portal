//comments -info
import { Injectable }   from '@angular/core';
import * as english     from "../assets/language/english/english.json";
import * as spanish     from "../assets/language/spanish/spanish.json";

@Injectable()
export class Language {
    public lang = [{
        "identifier" : "EN",
        "name" : "English",
        "sentences": english
    },{
        "identifier" : "ES",
        "name" : "Spanish",
        "sentences": spanish
    }];
}
