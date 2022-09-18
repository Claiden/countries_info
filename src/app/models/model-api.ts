export interface Pais {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    languages: languages[];
    flag: string;
    regionalBlocs: regionals[];
    cioc: string;
  }
  
  export interface languages {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }
  
  export interface regionals {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
  }