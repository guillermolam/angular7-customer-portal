import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullStateToAbvHelper {
  /*
    * This is a full list of all of the states for the US. 
    * As of Jan 2019 we are only in the state of MA, 
    * but this can be used for future use.
    * This is more for string conversion then actual addresses.
  */

  constructor() { }

  private stateList = [
    {
      fullStateName:  'Alabama',
      abv:            'AL'
    },
    {
      fullStateName:  'Alaska',
      abv:            'AK'
    },
    {
      fullStateName:  'Arizona',
      abv:            'AZ'
    },
    {
      fullStateName:  'Arkansas',
      abv:            'AR'
    },
    {
      fullStateName:  'California',
      abv:            'CA'
    },
    {
      fullStateName:  'Colorado',
      abv:            'CO'
    },
    {
      fullStateName:  'Connecticut',
      abv:            'CT'
    },
    {
      fullStateName:  'Delaware',
      abv:            'DE'
    },
    {
      fullStateName:  'Florida',
      abv:            'FL'
    },
    {
      fullStateName:  'Georgia',
      abv:            'GA'
    },
    {
      fullStateName:  'Hawaii',
      abv:            'HI'
    },
    {
      fullStateName:  'Idaho',
      abv:            'ID'
    },
    {
      fullStateName:  'Illinois',
      abv:            'IL'
    },
    {
      fullStateName:  'Indiana',
      abv:            'IN'
    },
    {
      fullStateName:  'Iowa',
      abv:            'IA'
    },
    {
      fullStateName:  'Kansas',
      abv:            'KS'
    },
    {
      fullStateName:  'Kentucky',
      abv:            'KY'
    },
    {
      fullStateName:  'Louisiana',
      abv:            'LA'
    },
    {
      fullStateName:  'Maine',
      abv:            'ME'
    },
    {
      fullStateName:  'Maryland',
      abv:            'MD'
    },
    {
      fullStateName:  'Massachusetts',
      abv:            'MA'
    },
    {
      fullStateName:  'Michigan',
      abv:            'MI'
    },
    {
      fullStateName:  'Minnesota',
      abv:            'MN'
    },
    {
      fullStateName:  'Mississippi',
      abv:            'MS'
    },
    {
      fullStateName:  'Missouri',
      abv:            'MO'
    },
    {
      fullStateName:  'Montana',
      abv:            'MT'
    },
    {
      fullStateName:  'Nebraska',
      abv:            'NE'
    },
    {
      fullStateName:  'Nevada',
      abv:            'NV'
    },
    {
      fullStateName:  'New Hampshire',
      abv:            'NH'
    },
    {
      fullStateName:  'New Jersey',
      abv:            'NJ'
    },
    {
      fullStateName:  'New Mexico',
      abv:            'NM'
    },
    {
      fullStateName:  'New York',
      abv:            'NY'
    },
    {
      fullStateName:  'North Carolina',
      abv:            'NC'
    },
    {
      fullStateName:  'North Dakota',
      abv:            'ND'
    },
    {
      fullStateName:  'Ohio',
      abv:            'OH'
    },
    {
      fullStateName:  'Oklahoma',
      abv:            'OK'
    },
    {
      fullStateName:  'Oregon',
      abv:            'OR'
    },
    {
      fullStateName:  'Pennsylvania',
      abv:            'PA'
    },
    {
      fullStateName:  'Rhode Island',
      abv:            'RI'
    },
    {
      fullStateName:  'South Carolina',
      abv:            'SC'
    },
    {
      fullStateName:  'South Dakota',
      abv:            'SD'
    },
    {
      fullStateName:  'Tennessee',
      abv:            'TN'
    },
    {
      fullStateName:  'Texas',
      abv:            'TX'
    },
    {
      fullStateName:  'Utah',
      abv:            'UT'
    },
    {
      fullStateName:  'Vermont',
      abv:            'VT'
    },
    {
      fullStateName:  'Virginia',
      abv:            'VA'
    },
    {
      fullStateName:  'Washington',
      abv:            'WA'
    },
    {
      fullStateName:  'West Virginia',
      abv:            'WV'
    },
    {
      fullStateName:  'Wisconsin',
      abv:            'WI'
    },
    {
      fullStateName:  'Wyoming',
      abv:            'WY'
    }
  ];

  public fullStateToAbv( state: string ): string {
    let x;

    this.stateList
    .forEach(( element ) => {
      if ( element.fullStateName.toLowerCase() == state.toLowerCase()) {
        x = element.abv;
      }
    });

    return x;
  }

  public abvToFullState( stateAbv: string ): string[] {
    let x;

    this.stateList
    .forEach(( element ) => {
      if ( element.abv == stateAbv ) {
        x = element.fullStateName;
      }
    });

    return x;
  }

}