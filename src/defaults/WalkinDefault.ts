import { WalkinAppointmentT } from '../types/WalkinTypes';

export const DefaultWalkinAppointment: WalkinAppointmentT = {
  date: '',
  timeSlots: [
    {
      time: '08:00',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '08:15',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '08:30',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '08:45',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '09:00',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '09:15',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '09:30',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '09:45',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '10:00',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '10:15',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '10:30',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '10:45',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '11:00',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '11:15',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '11:30',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '11:45',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '12:00',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '12:15',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '12:30',
      availableTokens: 5,
      tokens: [],
    },
    {
      time: '12:45',
      availableTokens: 5,
      tokens: [],
    },
  ],
};

export const DefaultWalkinActions = {
  GetAllTokens: 'getAllTokens',
  GenerateToken: 'generateToken',
  DeleteToken: 'deleteToken',
};
