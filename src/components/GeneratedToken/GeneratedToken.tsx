import Paper from '@mui/material/Paper';
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
    <Paper className="showToken-token">
      <p>{bookingTimeSlot}</p>
      <p>{userToken.id}</p>
      <p>{userToken?.user.name}</p>
      <p>{userToken?.user.phone}</p>
      <p>{userToken?.user.email}</p>
    </Paper>
  );
};

export default GeneratedToken;
