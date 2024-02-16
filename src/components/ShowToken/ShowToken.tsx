import { Button, TextField } from '@mui/material';
import './ShowToken.scss';
import { useGenerateTokenReducer } from '../../reducers/useGenerateTokenReducer';
import {
  GenerateTokenActionType,
  TimeSlotT,
  TokenT,
  WalkinAppointmentT,
} from '../../types/WalkinTypes';
import { useDispatch } from 'react-redux';
import { generateTokenForUser } from '../../redux/walkinSlice';
import { useState } from 'react';
import GeneratedToken from '../GeneratedToken/GeneratedToken';

type Props = {
  bookingTimeSlot: string;
  walkinForDate: WalkinAppointmentT;
  setShowToken: (flag: boolean) => void;
};

const ShowToken = ({ bookingTimeSlot, walkinForDate, setShowToken }: Props) => {
  const [showGeneratedToken, setShowGeneratedToken] = useState(false);
  const { formState, formDispatch } = useGenerateTokenReducer();
  const dispatch = useDispatch();

  const handleInputChange = (
    type: GenerateTokenActionType['type'],
    value: string,
  ) => {
    formDispatch({ type, payload: value });
  };

  const handleOnGenerateToken = () => {
    let newWalkinApp: WalkinAppointmentT = { ...walkinForDate };
    const timeSlot = walkinForDate.timeSlots.find(
      (timeSlot) => timeSlot.time === bookingTimeSlot,
    ) as TimeSlotT;
    const indexOfTimeSlot = walkinForDate.timeSlots.indexOf(timeSlot);
    const token: TokenT = {
      user: { ...formState },
    };
    let updatedTimeSlot = { ...timeSlot };
    const updatedTokens = [...timeSlot.tokens];
    updatedTokens.push(token);
    updatedTimeSlot = {
      ...updatedTimeSlot,
      tokens: [...updatedTokens],
    };
    const updatedTimeSlots = [...walkinForDate.timeSlots];
    updatedTimeSlots.splice(indexOfTimeSlot, 1, updatedTimeSlot);
    newWalkinApp = {
      ...newWalkinApp,
      timeSlots: [...updatedTimeSlots],
    };
    dispatch(
      generateTokenForUser({
        walkin: newWalkinApp,
        time: bookingTimeSlot,
        user: formState,
      }),
    );
    setShowGeneratedToken(true);
  };

  const reset = () => {
    setShowToken(false);
    setShowGeneratedToken(false);
  };

  if (!bookingTimeSlot) {
    return (
      <>
        <p>Error!</p>
        <Button variant="contained" onClick={() => setShowToken(false)}>
          Go Back
        </Button>
      </>
    );
  }

  return (
    <div className="showToken-c">
      {showGeneratedToken ? (
        <GeneratedToken
          bookingTimeSlot={bookingTimeSlot}
          date={walkinForDate.date}
          user={formState}
        />
      ) : (
        <div className="showToken-form">
          <p className="showToken-title">Booking for {bookingTimeSlot} slot!</p>
          <TextField
            color="success"
            fullWidth
            id="standard-basic"
            label="Name"
            variant="standard"
            onChange={(event) =>
              handleInputChange('SET_NAME', event.target.value)
            }
          />
          <TextField
            color="success"
            fullWidth
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            onChange={(event) =>
              handleInputChange('SET_PHONE', event.target.value)
            }
          />
          <TextField
            color="success"
            fullWidth
            id="standard-basic"
            label="Email Address"
            variant="standard"
            onChange={(event) =>
              handleInputChange('SET_EMAIL', event.target.value)
            }
          />
          <Button
            className="showToken-btn"
            variant="contained"
            onClick={handleOnGenerateToken}
          >
            Generate Token
          </Button>
        </div>
      )}
      <Button variant="contained" onClick={reset}>
        Go Back
      </Button>
    </div>
  );
};

export default ShowToken;
