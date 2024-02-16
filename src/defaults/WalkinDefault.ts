import { WalkinAppointmentT } from '../types/WalkinTypes';

export const DefaultWalkinAppointment: WalkinAppointmentT = {
  date: '',
  timeSlots: [
    {
      time: '08:00 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '08:15 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '08:30 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '08:45 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '09:00 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '09:15 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '09:30 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '09:45 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '10:00 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '10:15 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '10:30 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '10:45 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '11:00 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '11:15 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '11:30 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '11:45 AM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '12:00 PM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '12:15 PM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '12:30 PM',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '12:45 PM',
      availableTokens: 5,
      tokens: [],
    },
  ],
};

export const DefaultWalkinActions = {
  GetAllTokensForDate: 'getAllTokensForDate',
  GenerateToken: 'generateToken',
  DeleteToken: 'deleteToken',
};
