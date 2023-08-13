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
}
