import { GenerateTokenActionType, UserT } from '../types/WalkinTypes';

// Reducer function
export const generateTokenReducer = (
  state: UserT,
  action: GenerateTokenActionType,
): UserT => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
