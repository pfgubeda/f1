import Schedule, {ScheduleProps} from './Schedule';

export default class UpcomingSchedule extends Schedule {
  constructor(props: ScheduleProps) {
    super(props);

    props.navigation.setOptions({
      headerShown: false,
    });
  }

  loadPage() {
    return this.apiClient.scheduleUpcomingSeason();
  }
}
