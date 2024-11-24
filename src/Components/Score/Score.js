import './Score.css';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';


function Score({ userMainDatas }) {

    return (

        <ResponsiveContainer width='31%' height={230} className={"radialbarchart-container"}>

            {typeof userMainDatas == "string" ?

                <div className='radialbarchart-error'>{userMainDatas}</div>

                :

                <RadialBarChart
                    innerRadius="0%"
                    outerRadius="0%"
                    data={[userMainDatas]}
                    startAngle={90}
                    endAngle={450}
                >

                    <text x="10%" y="15%" fontSize="14px" fontWeight={700}>
                        Score
                    </text>

                    <RadialBar
                        data={[{ value: 1 }]}
                        dataKey="value"
                        barSize={150}
                        fill="#ffffff"
                    />
                    <RadialBar
                        dataKey="todayScore"
                        barSize={10}
                        cornerRadius={5}
                        fill="#FF0000"
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
                            {[userMainDatas][0]?.todayScore * 100}%
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
