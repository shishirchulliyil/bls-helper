import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const useHome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClickSOIC = () => {
    navigate('/soic');
  };

  const handleClickOCI = () => {
    navigate('/oci');
  };

  const handleClickWalkin = () => {
    navigate('/walkin');
  };

  return {
    handleClickSOIC,
    handleClickOCI,
    handleClickWalkin,
    t,
  };
};
