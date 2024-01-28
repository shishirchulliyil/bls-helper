import { useEffect, useState } from 'react';
import { StaticDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import TimeSlots from '../TimeSlots/TimeSlots';
import { useDispatch, useSelector } from 'react-redux';
import './WalkinAppointment.scss';
import { getAllTokensForDate } from '../../redux/walkinSlice';
import { RootState, WalkinAppointmentT } from '../../types/WalkinTypes';

const WalkinAppointment = () => {
  const [dateValue, setDateValue] = useState<dayjs.Dayjs>(dayjs());
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  const walkinData = useSelector((state: RootState) => state.walkin);
  const dispatch = useDispatch();
  const handleCheckAppoitment = () => {
    dispatch(getAllTokensForDate(dayjs(dateValue).format('DD-MM-YYYY')));
    setShowTimeSlots(true);
  };

  const getWalkinForDate = () => {
    const walkinForDate = walkinData.find(
      (walkin: WalkinAppointmentT) =>
        walkin.date === dayjs(dateValue).format('DD-MM-YYYY'),
    );
    if (!walkinForDate) return undefined;
    return walkinForDate;
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
        <Button variant="contained" onClick={handleCheckAppoitment}>
          Check Appoitment
        </Button>
        {showTimeSlots ? <TimeSlots walkin={getWalkinForDate()} /> : null}
      </div>
    </LocalizationProvider>
  );
};

export default WalkinAppointment;
