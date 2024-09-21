import './Header.css';
import mainIcon from "../../assets/logo.png"


function Header() {

    return (
        <header className='top-navbar'>

            <img className='mainIcon' src={mainIcon} alt='sportsee icon' />

            <nav className='nav-bloc'>
                <div className='nav-items'>Accueil</div>
                <div className='nav-items'>Profil</div>
                <div className='nav-items'>Réglage</div>
                <div className='nav-items'>Communauté</div>
            </nav>

        </header>
    );
}


export default Header;
