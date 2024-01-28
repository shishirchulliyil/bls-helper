import dayjs from 'dayjs';

export type RootState = {
  walkin: WalkinAppointmentT[];
};

export type WalkinAppointmentT = {
  date: dayjs.Dayjs | string;
  timeSlots: TimeSlotT[];
};

export type TimeSlotT = {
  time: string;
  availableTokens: number;
  error?: number;
  errorMessage?: string;
  tokens: TokenT[];
};

export type TokenT = {
  id?: string;
  alloted?: boolean;
  user: UserT;
};

export type UserT = {
  name: string;
  email: string;
  phone: string;
};

export type GenerateTokenActionType = {
  type: 'SET_NAME' | 'SET_PHONE' | 'SET_EMAIL';
  payload: string;
};

// Example below for the object 🚀🚀

// {
//     date: '2024-01-24',
//     timeSlots: [
//         {
//             time: '08:00',
//             availableTokens: 3, // 2 are used ✅, max 👉🏻 5
//             tokens: [
//                 {
//                     id: 'unqiue-id-1',
//                     alloted: false,
//                     user: {}
//                 },
//                 {
//                     id: 'unqiue-id-2',
//                     alloted: false,
//                     user: {}
//                 }
//             ]
//         },
//         {
//             time: '08:15',
//             availableTokens: 4, // 1 is used ✅, max 👉🏻 5
//             tokens: [
//                 {
//                     id: 'unqiue-id-3',
//                     alloted: false,
//                     user: {}
//                 }
//             ]
//         }
//     ]
// }
