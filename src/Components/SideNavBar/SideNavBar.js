import './SideNavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBiking, faPersonSwimming, faDumbbell, faUser, } from "@fortawesome/free-solid-svg-icons";


function SideNavBar() {

    return (
        <div className='left-navbar'>
            <nav>
                <div className='nav-icon-wrapper'>
                    <FontAwesomeIcon icon={faUser} className='nav-icons' />
                </div>
                <div className='nav-icon-wrapper'>
                    <FontAwesomeIcon icon={faPersonSwimming} className='nav-icons' />
                </div>
                <div className='nav-icon-wrapper'>
                    <FontAwesomeIcon icon={faPersonBiking} className='nav-icons' />
                </div>
                <div className='nav-icon-wrapper'>
                    <FontAwesomeIcon icon={faDumbbell} className='nav-icons faDumbbell' />
                </div>
            </nav>
            <p className='Copyright'>Copyright, SportSee 2020</p>
        </div>
    );
}


export default SideNavBar;

