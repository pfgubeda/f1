import ConstructorStandings, {
  ConstructorStandingsProps,
} from './ConstructorStandings';

export default class CurrentConstructorStandings extends ConstructorStandings {
  constructor(props: ConstructorStandingsProps) {
    super(props);

    props.navigation.setOptions({
      headerShown: false,
    });
  }

  loadPage() {
    return this.apiClient.currentConstructorStandings();
  }
}
