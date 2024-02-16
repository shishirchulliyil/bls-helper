import { useReducer } from 'react';
import { generateTokenReducer } from './generateTokenReducer';
import { UserT } from '../types/WalkinTypes';

export const useGenerateTokenReducer = () => {
  const initialFormState: UserT = {
    name: '',
    email: '',
    phone: '',
  };
  const [formState, formDispatch] = useReducer(
    generateTokenReducer,
    initialFormState,
  );

  return {
    formState,
    formDispatch,
  };
};
