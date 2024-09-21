import './SideNavBar.css';
import yogaIcon from "../../assets/yoga.png"
import swimmerIcon from "../../assets/nageur.png"
import riderIcon from "../../assets/cycliste.png"
import dumbbellIcon from "../../assets/haltère.png"


function SideNavBar() {

    return (
        <div className='side-navbar'>
            <nav>
                <img src={yogaIcon} className='nav-icons' alt="yoga Icon" />
                <img src={swimmerIcon} className='nav-icons' alt="swimmer Icon" />
                <img src={riderIcon} className='nav-icons' alt="rider Icon" />
                <img src={dumbbellIcon} className='nav-icons' alt="dumbbell Icon" />
            </nav>
            <p className='Copyright'>Copyright, SportSee 2020</p>
        </div>
    );
}


export default SideNavBar;

