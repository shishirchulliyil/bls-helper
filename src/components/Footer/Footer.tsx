import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-c">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} VHelper. All Rights Reserved.</p>
        <div>
          <p>Disclaimer</p>
          <p>Privacy Policy</p>
          <p>Copyright Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
