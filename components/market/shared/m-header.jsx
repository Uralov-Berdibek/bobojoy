import headerLogo from '*/header__logo.svg';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='flex justify-center align-middle content-between'>
          <img src={headerLogo} alt='error' />
          <nav>
            <span>Home</span>
            <span>Catalog</span>
            <span>Card</span>
            <span>Massage</span>
            <span>Accaunt</span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
