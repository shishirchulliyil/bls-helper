import { Paper } from '@mui/material';
import { TimeSlotT } from '../../types/WalkinTypes';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './TimeSlot.scss';

type Props = {
  bookingTimeSlot: string;
  timeSlot: TimeSlotT;
  index: number;
  setBookingTimeSlot: (bookingTimeSlot: string) => void;
};

const TimeSlot = ({
  timeSlot,
  index,
  bookingTimeSlot,
  setBookingTimeSlot,
}: Props) => {
  const handleOnClickTimeSlot = () => {
    setBookingTimeSlot(timeSlot.time);
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
      onClick={handleOnClickTimeSlot}
      elevation={bookingTimeSlot === timeSlot.time ? 12 : 1}
    >
      <div className="timeSlot-title">{timeSlot.time}</div>
      <div className="timeSlot-tokens">
        Tokens Remaining: {timeSlot.availableTokens}
      </div>
      {/* <Radio value={timeSlot.time} onChange={handleOnChangeTimeSlot} /> */}
      {bookingTimeSlot === timeSlot.time ? (
        <CheckBoxIcon />
      ) : (
        <CheckBoxOutlineBlankIcon />
      )}
    </Paper>
  );
};
export default TimeSlot;
