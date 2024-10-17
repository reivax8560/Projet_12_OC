import './App.css'
import Header from "./Components/Header/Header";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import Greeting from "./Components/Greeting/Greeting";
import DailyActivity from './Components/DailyActivity/DailyActivity';
import SessionsDuration from './Components/SessionsDuration/SessionsDuration';
import PerformanceByActivity from './Components/PerformanceByActivity/PerformanceByActivity';
import Score from './Components/Score/Score';
import InfoCard from './Components/InfoCard/InfoCard';
import fireIcon from "../src/assets/calories-icon.png"
import chickenIcon from "../src/assets/protein-icon.png"
import appleIcon from "../src/assets/carbs-icon.png"
import burgerIcon from "../src/assets/fat-icon.png"
import { useEffect, useState } from 'react';
import Api from './api';


function App() {

  const [mainDatas, setMainDatas] = useState({})

  useEffect(() => {
    const api = new Api()
    api.getUserMainDatas()
      .then((datas) => {
        setMainDatas(datas)
      })
  }, [])



  return (
    <>
      <Header />

      <div className='main-wrapper'>                                  {/* BLOC BANDEAU GAUCHE + PARTIE DROITE */}
        <SideNavBar />

        <div className='secondary-wrapper'>                           {/* BLOC TITRE + GRAPHIQUES + VIGNETTES */}
          {/* <Greeting datas={mainDatas.userInfos?.firstName} /> */}
          <Greeting />

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

              {typeof mainDatas == "string" ?

                <div className='infocard-error'>{mainDatas}</div>
                :
                <>
                  <InfoCard value={mainDatas.keyData?.calorieCount} unit='kCal' type='Calories' icon={fireIcon} />

                  <InfoCard value={mainDatas.keyData?.proteinCount} unit='g' type='Proteines' icon={chickenIcon} />

                  <InfoCard value={mainDatas.keyData?.carbohydrateCount} unit='g' type='Glucides' icon={appleIcon} />

                  <InfoCard value={mainDatas.keyData?.lipidCount} unit='g' type='Lipides' icon={burgerIcon} />
                </>
              }

            </div>
          </main>
        </div>
      </div>
    </>
  );

}

export default App;
