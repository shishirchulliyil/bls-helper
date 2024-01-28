import { Button } from '@mui/material';
import { WalkinAppointmentT } from '../../types/WalkinTypes';
import TimeSlot from '../TimeSlot/TimeSlot';
import { useState } from 'react';
import ShowToken from '../ShowToken/ShowToken';
import './TimeSlots.scss';

type Props = {
  walkin: WalkinAppointmentT | undefined;
};

const TimeSlots = ({ walkin }: Props) => {
  const [bookingTimeSlot, setBookingTimeSlot] = useState('');
  const [showToken, setShowToken] = useState(false);

  const handleOnBookNow = () => {
    setShowToken(true);
  };

  if (!walkin || !walkin.timeSlots) {
    return <p>No Time Slots Found!</p>;
  }

  return (
    <div className="timeSlots-c">
      {!showToken ? (
        <>
          <p>Select and book from the available time slots.</p>
          <div className="timeSlots-slots">
            {walkin.timeSlots.map((timeSlot, index) => (
              <TimeSlot
                key={index}
                timeSlot={timeSlot}
                index={index}
                setBookingTimeSlot={setBookingTimeSlot}
              />
            ))}
          </div>
          <Button variant="contained" onClick={handleOnBookNow}>
            Book Now
          </Button>
        </>
      ) : (
        <ShowToken
          bookingTimeSlot={bookingTimeSlot}
          walkinForDate={walkin}
          setShowToken={setShowToken}
        />
      )}
    </div>
  );
};
export default TimeSlots;
