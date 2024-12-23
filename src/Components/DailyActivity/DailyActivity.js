import './DailyActivity.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, Rectangle } from 'recharts';
import { useEffect, useState } from 'react';
import Api from '../../api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


function DailyActivity() {

    const [userActivity, setUserActivity] = useState({})

    useEffect(() => {
        const api = new Api()
        api.getUserActivity()
            .then((datas) => {
                if (datas?.sessions) {
                    setUserActivity(datas.sessions)     // données fetchées
                }
                else {
                    setUserActivity(datas)              // données mockées
                }
            })
    }, [])



    return (
        <ResponsiveContainer width="100%" height={280} className={"barchart-container"}>

            {typeof userActivity == "string" ?

                <div className='barchart-error'>{userActivity}</div>

                :

                <BarChart data={userActivity}
                    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                    barSize={8}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        tickMargin={10}
                        height={40}
                        tickFormatter={(value) => {
                            return value.slice(-1)
                        }}
                    />

                    <YAxis
                        yAxisId="right"
                        orientation='right'
                        tickLine={false}
                        axisLine={false}
                        type="number"
                        domain={['dataMin - 1', 'dataMax + 1']}
                        tickMargin={10}
                    />

                    <YAxis
                        yAxisId="left"
                        orientation='left'
                        hide='true'
                        type="number"
                        domain={['dataMin - 50', 'dataMax + 50']}
                    />

                    <Legend
                        content={() => {
                            return (
                                <div className='barchart-legend'>
                                    <p className='barchart-legend-title'>Activité quotidienne</p>
                                    <div className='barchart-legend-items-block'>
                                        <p><FontAwesomeIcon icon={faCircle} className='blackCircle' />Poids (kg)</p>
                                        <p><FontAwesomeIcon icon={faCircle} className='redCircle' />Calories brûlées (Kcal)</p>
                                    </div>
                                </div>
                            )
                        }}
                        verticalAlign='top'
                    />

                    <Tooltip
                        content={({ active, payload }) => {
                            if (!active || !payload || payload.length === 0) {
                                return null
                            }
                            return (
                                <div className='tooltip'>
                                    <p>{payload[0].value} kg</p>
                                    <p>{payload[1].value} Kcal</p>
                                </div>
                            )
                        }}
                        offset={50}
                    />

                    <Bar
                        dataKey="kilogram"
                        yAxisId="right"
                        shape={<Rectangle fill="#000000" radius={[5, 5, 0, 0]} />}
                    />

                    <Bar
                        dataKey="calories"
                        yAxisId="left"
                        shape={<Rectangle fill="#ff0000" radius={[5, 5, 0, 0]} />}
                    />

                </BarChart>
            }
        </ResponsiveContainer>
    );
}


export default DailyActivity;
