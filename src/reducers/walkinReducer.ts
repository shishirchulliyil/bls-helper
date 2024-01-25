import { DefaultWalkinActions } from '../defaults/WalkinDefault';
import { WalkinActionTypeT, WalkinAppointmentT } from '../types/WalkinTypes';

export const walkinReducer = (
  state: WalkinAppointmentT,
  action: WalkinActionTypeT,
): WalkinAppointmentT => {
  switch (action.type) {
    case DefaultWalkinActions.GetAllTokens:
      return state;
    case DefaultWalkinActions.GenerateToken:
      // do something and then return updated state
      console.log('state >', state);
      return state;
    case DefaultWalkinActions.DeleteToken:
      return state;
    default:
      return state;
  }
};
