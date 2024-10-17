import './Score.css';
import Api from '../../api';
import { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';



function Score() {

    const [userScore, setUserScore] = useState([])

    useEffect(() => {

        const api = new Api()
        api.getUserMainDatas()
            .then((datas) => {
                // setUserScore([datas]);
                setUserScore(datas);
            });
    }, [])


    return (

        <ResponsiveContainer width='31%' height={230} className={"radialbarchart-container"}>

            {typeof userScore == "string" ?

                <div className='radialbarchart-error'>{userScore}</div>

                :

                <RadialBarChart
                    innerRadius="0%"
                    outerRadius="0%"
                    data={[userScore]}
                    startAngle={90}
                    endAngle={450}
                >

                    <text x="10%" y="15%" fontSize="14px" fontWeight={700}>
                        Score
                    </text>

                    <RadialBar
                        data={[{ value: 1 }]}
                        dataKey="value"
                        barSize={150}   // épaisseur barre
                        fill="#ffffff"
                    />
                    <RadialBar
                        dataKey="todayScore"
                        barSize={10}   // épaisseur barre
                        cornerRadius={5}
                        fill="#FF0000"
                    // clockWise={true}
                    />

                    <text
                        textAnchor="middle"
                        fontSize="14px"
                        fontWeight={500}
                        fill="#74798C"
                    >
                        <tspan
                            x="50%"
                            y="47%"
                            fontSize="22px"
                            fontWeight={700}
                            fill="#000000"
                        >
                            {[userScore][0]?.todayScore * 100}%
                        </tspan>
                        <tspan x="50%" y="57%">de votre</tspan>
                        <tspan x="50%" y="67%">objectif</tspan>
                    </text>

                </RadialBarChart>

            }
        </ResponsiveContainer >

    );
}

export default Score;
