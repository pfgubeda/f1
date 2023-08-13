import Schedule, {ScheduleProps} from './Schedule';

export default class CurrentSchedule extends Schedule {
  constructor(props: ScheduleProps) {
    super(props);

    props.navigation.setOptions({
      title: 'Schedule',
    });
  }

  loadPage() {
    return this.apiClient.scheduleCurrentSeason();
  }
}
