import ConstructorStandings, {
  ConstructorStandingsProps,
} from './ConstructorStandings';

export default class CurrentConstructorStandings extends ConstructorStandings {
  constructor(props: ConstructorStandingsProps) {
    super(props);

    props.navigation.setOptions({
      title: 'Constructors Standings',
    });
  }

  loadPage() {
    return this.apiClient.currentConstructorStandings();
  }
}
