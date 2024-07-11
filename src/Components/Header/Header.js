import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";


function Header() {

    return (
        <header className='top-navbar'>

            <div className='logo-container'>
                <div className='logo-wrapper'>
                    <FontAwesomeIcon icon={faPersonRunning} className='logo' />
                </div>
                <h1 className='logo-title'>SportSee</h1>
            </div>

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
