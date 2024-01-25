import './Home.scss';
import { Chip } from '@mui/material';
import { useHome } from './useHome';

const Home = () => {
  const { handleClickSOIC, handleClickOCI, handleClickWalkin, t } = useHome();

  return (
    <div className="home-c">
      <div className="home-c-links">
        <Chip
          className="home-c-links--link"
          label={t('home.soic')}
          onClick={handleClickSOIC}
        />
        <Chip
          className="home-c-links--link"
          label={t('home.oci')}
          onClick={handleClickOCI}
        />
        <Chip
          className="home-c-links--link"
          label={t('home.walkin')}
          onClick={handleClickWalkin}
        />
      </div>
    </div>
  );
};

export default Home;
