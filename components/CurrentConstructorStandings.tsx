import ConstructorStandings, {
  ConstructorStandingsProps,
} from './ConstructorStandings';

export default class CurrentConstructorStandings extends ConstructorStandings {
  constructor(props: ConstructorStandingsProps) {
    super(props);

    props.navigation.setOptions({
      title: 'Current Constructor Standings',
    });
  }

  loadPage() {
    return this.apiClient.currentConstructorStandings();
  }
}
