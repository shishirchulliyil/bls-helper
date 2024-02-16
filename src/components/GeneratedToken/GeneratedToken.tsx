import {
  RootState,
  TimeSlotT,
  TokenT,
  UserT,
  WalkinAppointmentT,
} from '../../types/WalkinTypes';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import './GeneratedToken.scss';
import { Paper } from '@mui/material';

type Props = {
  bookingTimeSlot: string;
  date: dayjs.Dayjs | string;
  user: UserT;
};
const GeneratedToken = ({ bookingTimeSlot, date, user }: Props) => {
  const [userToken, setUserToken] = useState<TokenT>();

  const walkinData = useSelector((state: RootState) => state.walkin);

  const getGeneratedTokenForUser = () => {
    const walkinForSelectedDate = walkinData.find(
      (walkinItem: WalkinAppointmentT) => walkinItem.date === date,
    ) as WalkinAppointmentT;

    const timeSlot = walkinForSelectedDate.timeSlots.find(
      (timeSlot) => timeSlot.time === bookingTimeSlot,
    ) as TimeSlotT;

    const token = timeSlot.tokens.find(
      (token) =>
        token.user.name === user.name && token.user.phone === user.phone,
    ) as TokenT;

    setUserToken(token);
  };

  useEffect(() => {
    getGeneratedTokenForUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walkinData]);

  if (!userToken) {
    return <></>;
  }

  return (
    <Paper className="showToken-token" elevation={14}>
      <div className="showToken-token--left">
        <p className="showToken-token--time">
          Your slot has been booked for {bookingTimeSlot}!
        </p>
        <p className="showToken-token--data">Name: {userToken?.user.name}</p>
        <p className="showToken-token--data">
          Contact: {userToken?.user.phone}
        </p>
        <p className="showToken-token--data">Email: {userToken?.user.email}</p>
        <p className="showToken-token--id">{userToken.id}</p>
      </div>
      <div className="showToken-token--right">
        <p className="showToken-token--time">{bookingTimeSlot}</p>
      </div>
    </Paper>
  );
};

export default GeneratedToken;
