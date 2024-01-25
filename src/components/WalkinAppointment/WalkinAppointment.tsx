import {
  StaticDatePicker,
  LocalizationProvider,
  // TimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './WalkinAppointment.scss';
import { Button } from '@mui/material';
import { useEffect, useReducer, useState } from 'react';
import dayjs from 'dayjs';
import { walkinReducer } from '../../reducers/walkinReducer';
import {
  DefaultWalkinActions,
  DefaultWalkinAppointment,
} from '../../defaults/WalkinDefault';
import TimeSlots from '../TimeSlots/TimeSlots';

const WalkinAppointment = () => {
  const [dateValue, setDateValue] = useState<dayjs.Dayjs>(dayjs());
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  // useEffect(() => {
  //   console.log('dateValue >', dayjs(dateValue).format('DD-MM-YYYY'));
  // }, [dateValue]);

  const [state, dipatch] = useReducer(walkinReducer, DefaultWalkinAppointment);
  const handleCheckAppoitment = () => {
    dipatch({ type: DefaultWalkinActions.GetAllTokens });
    setShowTimeSlots(true);
  };

  useEffect(() => {
    setShowTimeSlots(false);
  }, [dateValue]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="walkin-c">
        <div className="walkin-date-picker">
          <p>Check available Appointments for tomorrow's date.</p>
          <StaticDatePicker
            value={dateValue}
            orientation="landscape"
            onChange={(newValue) => setDateValue(dayjs(newValue))}
          />
        </div>
        {/* <div className="walkin-date-picker">
          <p>Check available time slots for above date.</p>
          <TimePicker timeSteps={{ hours: 1, minutes: 15 }} />
        </div> */}

        <Button variant="contained" onClick={handleCheckAppoitment}>
          Check Appoitment
        </Button>
        {showTimeSlots ? <TimeSlots timeSlots={state.timeSlots} /> : null}
      </div>
    </LocalizationProvider>
  );
};

export default WalkinAppointment;
