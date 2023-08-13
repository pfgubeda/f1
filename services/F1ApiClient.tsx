export interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

interface Location {
  readonly lat: string;
  readonly long: string;
  readonly locality: string;
  readonly country: string;
}

interface Circuit {
  readonly circuitId: string;
  readonly url: string;
  readonly circuitName: string;
  readonly Location: Location;
}

export interface Race {
  readonly season: string;
  readonly date: string;
  readonly time: string;
  readonly round: string;
  readonly url: string;
  readonly raceName: string;
  readonly Circuit: Circuit;
}

export interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export interface ConstructorStanding {
  position: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}

export default class F1ApiClient {
  static BASE_URL = 'https://ergast.com/api/f1';

  async currentDriverStandings(): Promise<DriverStanding[]> {
    let url = `${F1ApiClient.BASE_URL}/current/driverStandings.json`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  }

  async currentConstructorStandings(): Promise<ConstructorStanding[]> {
    let url = `${F1ApiClient.BASE_URL}/current/constructorStandings.json`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson.MRData.StandingsTable.StandingsLists[0]
      .ConstructorStandings;
  }

  async scheduleCurrentSeason(): Promise<Race[]> {
    let url = `${F1ApiClient.BASE_URL}/current.json`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson.MRData.RaceTable.Races;
  }
}
