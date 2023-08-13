import DriverStandings, {DriverStandingsProps} from './DriverStandings';

export default class CurrentDriverStandings extends DriverStandings {
  constructor(props: DriverStandingsProps) {
    super(props);

    props.navigation.setOptions({
      title: 'Drivers Standings',
    });
  }

  loadPage() {
    return this.apiClient.currentDriverStandings();
  }
}
