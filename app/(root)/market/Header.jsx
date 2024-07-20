// import header__logo from '*/header__logo.svg'


const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="flex justify-center align-middle content-between">
                <span>
                    {/* <img src={header__logo} alt="error" /> */}
                </span>
                <nav>
                    <span>Home</span>
                    <span>Catalog</span>
                    <span>Card</span>
                    <span>Massage</span>
                    <Pspan>Accaunt</Pspan>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header