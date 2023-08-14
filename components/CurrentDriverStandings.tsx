import DriverStandings, {DriverStandingsProps} from './DriverStandings';

export default class CurrentDriverStandings extends DriverStandings {
  constructor(props: DriverStandingsProps) {
    super(props);

    props.navigation.setOptions({
      headerShown: false,
    });
  }

  loadPage() {
    return this.apiClient.currentDriverStandings();
  }
}
