import './App.css'
import Header from "./Components/Header/Header";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import Title from "./Components/Title/Title";
import DailyActivity from './Components/DailyActivity/DailyActivity';
import SessionsDuration from './Components/SessionsDuration/SessionsDuration';
import PerformanceByActivity from './Components/PerformanceByActivity/PerformanceByActivity';
import Score from './Components/Score/Score';
import InfoCard from './Components/InfoCard/InfoCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faDrumstickBite, faAppleWhole, faBurger } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import Api from './api';


function App() {

  const [mainDatas, setMainDatas] = useState({})

  useEffect(() => {
    const api = new Api()
    api.getUserMainDatas()
      .then((datas) => { setMainDatas(datas) })
  }, [])


  return (
    <>
      <Header />

      <div className='main-wrapper'>                                  {/* BLOC BANDEAU GAUCHE + PARTIE DROITE */}
        <SideNavBar />

        <div className='secondary-wrapper'>                           {/* BLOC TITRE + GRAPHIQUES + VIGNETTES */}
          <Title datas={mainDatas.userInfos?.firstName} />
          {/* <Title datas={mainDatas.userInfos?.firstName} /> */}

          <main className='main-content'>                             {/* BLOC GRAPHIQUES + VIGNETTES */}
            <div className="charts-container">                        {/* BLOC GRAPHIQUES */}
              <div className='primary-chart'>                         {/* GRAPHIQUE PRINCIPAL */}
                <DailyActivity />
              </div>

              <div className='secondary-charts'>                      {/* GRAPHIQUES SECONDAIRES */}
                <SessionsDuration />
                <PerformanceByActivity />
                <Score />
              </div>
            </div>

            <div className='key-informations'>                        {/* VIGNETTES INFOS CLE */}

              <InfoCard value={mainDatas.keyData?.calorieCount} unit='kCal' type='Calories'>
                {/* <InfoCard value={mainDatas.keyData?.calorieCount} unit='kCal' type='Calories'> */}
                <div className='key-icon-wrapper faFire-wrapper'>
                  <FontAwesomeIcon icon={faFire} className='key-icon faFire' />
                </div>
              </InfoCard>
              <InfoCard value={mainDatas.keyData?.proteinCount} unit='g' type='Proteines'>
                {/* <InfoCard value={mainDatas.keyData?.proteinCount} unit='g' type='Proteines'> */}
                <div className='key-icon-wrapper faDrumstickBite-wrapper'>
                  <FontAwesomeIcon icon={faDrumstickBite} className='key-icon faDrumstickBite' />
                </div>
              </InfoCard>
              <InfoCard value={mainDatas.keyData?.carbohydrateCount} unit='g' type='Glucides'>
                {/* <InfoCard value={mainDatas.keyData?.carbohydrateCount} unit='g' type='Glucides'> */}
                <div className='key-icon-wrapper faAppleWhole-wrapper'>
                  <FontAwesomeIcon icon={faAppleWhole} className='key-icon faAppleWhole' />
                </div>
              </InfoCard>
              <InfoCard value={mainDatas.keyData?.lipidCount} unit='g' type='Lipides'>
                {/* <InfoCard value={mainDatas.keyData?.lipidCount} unit='g' type='Lipides'> */}
                <div className='key-icon-wrapper faBurger-wrapper'>
                  <FontAwesomeIcon icon={faBurger} className='key-icon faBurger' />
                </div>
              </InfoCard>

            </div>
          </main>
        </div>
      </div>
    </>
  );

}

export default App;
