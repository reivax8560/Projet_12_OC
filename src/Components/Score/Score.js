import './Score.css';
import Api from '../../api';
import { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Text } from 'recharts';



function Score() {

    const [userScore, setUserScore] = useState([])

    useEffect(() => {

        const api = new Api()
        api.getUserMainDatas()
            .then((datas) => {
                datas.fill = '#ff0000';     // couleur barre externe (rouge)
                setUserScore([datas, { todayScore: 1, fill: "#ffffff" }]);  // couleur barre référence (blanc)
            });
    }, [])


    return (

        <ResponsiveContainer width='31%' height={230} className={"radialbarchart-container"}>

            <p className='radialbarchart-title'>Score</p>

            <RadialBarChart
                innerRadius="85%"
                outerRadius="60%"
                data={userScore}
                startAngle={90}
                endAngle={450}
            >

                <RadialBar background clockWise={true} dataKey={'todayScore'} cornerRadius={10} label={'coucou'} />

                <Legend
                    verticalAlign='middle'
                    align='center'
                    content={() => {
                        return (
                            <div className='radialbarchart-score'>
                                <span className='score'>{userScore[0]?.todayScore * 100}%</span>
                                <span className='tag'>de votre</span>
                                <span className='tag'>objectif</span>
                            </div>
                        )
                    }}
                />

            </RadialBarChart>

        </ResponsiveContainer>

    );
}

export default Score;
