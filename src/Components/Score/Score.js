import './Score.css';
import Api from '../../api';
import { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, } from 'recharts';



function Score() {

    const [userScore, setUserScore] = useState({})

    useEffect(() => {
        const api = new Api()
        api.getUserMainDatas()
            .then((datas) => { setUserScore(datas) })
    }, [])



    return (

        <ResponsiveContainer width='30%' height={260} className={"radialbarchart-container"}>

            <RadialBarChart

                innerRadius="75%"
                outerRadius="90%"
                data={userScore}
                startAngle={90}
                endAngle={300}
            >
                <RadialBar background clockWise={true} dataKey='todayScore' />


                <Legend
                    content={() => {
                        return (
                            <p className='radialbarchart-title'>{userScore.todayScore * 100}% de votre objectif</p>
                        )
                    }}
                    verticalAlign='middle'
                    align='center'
                />

            </RadialBarChart>

        </ResponsiveContainer>

    );
}

export default Score;
