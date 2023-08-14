import Schedule, {ScheduleProps} from './Schedule';

export default class PastSchedule extends Schedule {
  constructor(props: ScheduleProps) {
    super(props);

    props.navigation.setOptions({
      headerShown: false,
    });
  }

  loadPage() {
    return this.apiClient.schedulePastSeason();
  }
}
