import { Button } from '@mui/material';
import { TimeSlotT } from '../../types/WalkinTypes';
import TimeSlot from '../TimeSlot/TimeSlot';

type Props = {
  timeSlots: TimeSlotT[];
};

const TimeSlots = ({ timeSlots }: Props) => {
  return (
    <div className="timeSlots-c">
      {timeSlots && timeSlots.length ? (
        <p>Select and book from the available time slots.</p>
      ) : null}
      {timeSlots && timeSlots.length
        ? timeSlots.map((timeSlot, index) => (
            <div key={index}>
              <TimeSlot timeSlot={timeSlot} index={index} />
            </div>
          ))
        : 'No Time Slots Found!'}
      <Button variant="contained"> Book Now</Button>
    </div>
  );
};
export default TimeSlots;
