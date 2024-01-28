import { Paper } from '@mui/material';
import { TimeSlotT } from '../../types/WalkinTypes';
import Radio from '@mui/material/Radio';
import './TimeSlot.scss';

type Props = {
  timeSlot: TimeSlotT;
  index: number;
  setBookingTimeSlot: (bookingTimeSlot: string) => void;
};

const TimeSlot = ({ timeSlot, index, setBookingTimeSlot }: Props) => {
  const handleOnChangeTimeSlot = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setBookingTimeSlot(event.target.value);
  };

  return (
    <Paper
      className={
        timeSlot.availableTokens === 5
          ? 'timeSlot-c timeSlot-c--green'
          : timeSlot.availableTokens === 0
            ? 'timeSlot-c timeSlot-c--red'
            : 'timeSlot-c timeSlot-c--amber'
      }
      key={index}
    >
      <div className="timeSlot-title">{timeSlot.time}</div>
      <div className="timeSlot-tokens">
        Tokens Remaining: {timeSlot.availableTokens}
      </div>
      <Radio value={timeSlot.time} onChange={handleOnChangeTimeSlot} />
    </Paper>
  );
};
export default TimeSlot;
