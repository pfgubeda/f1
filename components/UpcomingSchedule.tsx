import Schedule, {ScheduleProps} from './Schedule';

export default class UpcomingSchedule extends Schedule {
  constructor(props: ScheduleProps) {
    super(props);

    props.navigation.setOptions({
      title: 'Racing',
    });
  }

  loadPage() {
    return this.apiClient.scheduleUpcomingSeason();
  }
}
