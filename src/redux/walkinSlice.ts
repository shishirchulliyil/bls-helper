import { WalkinAppointmentT } from './../types/WalkinTypes';
import { createSlice } from '@reduxjs/toolkit';
import { DefaultWalkinAppointment } from '../defaults/WalkinDefault';
import { TimeSlotT, TokenT, UserT } from '../types/WalkinTypes';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';

type GetAllTokenActionT = {
  payload: dayjs.Dayjs | string;
};

type GenTokenActionT = {
  payload: {
    walkin: WalkinAppointmentT;
    time: string;
    user: UserT;
  };
};

const walkinSlice = createSlice({
  name: 'walkin',
  initialState: [] as WalkinAppointmentT[],
  reducers: {
    getAllTokensForDate: (
      state: WalkinAppointmentT[],
      action: GetAllTokenActionT,
    ) => {
      const walkinAppForDate = state.find(
        (walkinApp) => walkinApp.date === action.payload,
      );
      if (!walkinAppForDate) {
        const newWalkinAppForDate = {
          ...DefaultWalkinAppointment,
          date: action.payload,
        };
        state.push(newWalkinAppForDate);
      }
    },
    generateTokenForUser: (
      state: WalkinAppointmentT[],
      action: GenTokenActionT,
    ) => {
      const { walkin, time, user } = action.payload;

      const walkinApp = state.find(
        (walkinApp) => walkinApp.date === walkin.date,
      ) as WalkinAppointmentT;

      let timeSlot = walkinApp.timeSlots.find(
        (timeSlot) => timeSlot.time === time,
      ) as TimeSlotT;

      if (timeSlot?.availableTokens) {
        const id = uuid();
        let token = timeSlot.tokens.find(
          (token) =>
            token.user.phone === user.phone && token.user.name === user.name,
        ) as TokenT;
        token = {
          ...token,
          id: id,
          alloted: true,
          user: { ...user },
        };
        const indexOfToken = timeSlot.tokens.indexOf(token);
        timeSlot.tokens.splice(indexOfToken, 1, token);
        timeSlot.availableTokens--;
      } else {
        timeSlot = {
          ...timeSlot,
          error: 5001,
          errorMessage: 'No more available token for this time slot!',
        };
      }

      const indexOfTimeSlot = walkinApp.timeSlots.indexOf(timeSlot!);
      walkinApp.timeSlots.splice(indexOfTimeSlot, 1, timeSlot);
      const indexOfWalkin = state.indexOf(walkinApp);
      state.splice(indexOfWalkin, 1, walkinApp);
    },
  },
});

export const { getAllTokensForDate, generateTokenForUser } =
  walkinSlice.actions;
export default walkinSlice.reducer;
