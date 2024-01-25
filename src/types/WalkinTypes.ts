import dayjs from 'dayjs';

export type WalkinActionTypeT = {
  type: string;
  payload?: unknown;
};

export type WalkinAppointmentT = {
  date: dayjs.Dayjs | string;
  timeSlots: TimeSlotT[];
};

export type TimeSlotT = {
  time: string;
  availableTokens: number;
  tokens: TokenT[];
};

export type TokenT = {
  id: string;
  alloted: boolean;
  user: UserT;
};

export type UserT = {
  name: string;
  email: string;
  contact: number;
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
