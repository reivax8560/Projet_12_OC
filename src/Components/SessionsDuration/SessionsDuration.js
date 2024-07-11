import './SessionsDuration.css';
import Api from '../../api';
import { LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line, Legend } from 'recharts';
import { useEffect, useState } from 'react';

function SessionsDuration() {

    const [userSessions, setUserSessions] = useState({})

    useEffect(() => {
        const api = new Api()
        api.getUserSessions()
            .then((datas) => { setUserSessions(datas.sessions) })
    }, [])



    return (
        <ResponsiveContainer width='30%' height={260} className={"linechart-container"}>

            <LineChart data={userSessions}>

                <XAxis dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    stroke="#ffffffc2"
                    tickMargin={10}
                    height={40}
                    padding={{ left: 20, right: 20 }}
                    tickFormatter={(value) => {
                        let data
                        switch (value) {
                            case 1: data = "L"
                                break
                            case 2: data = "M"
                                break
                            case 3: data = "M"
                                break
                            case 4: data = "J"
                                break
                            case 5: data = "V"
                                break
                            case 6: data = "S"
                                break
                            case 7: data = "D"
                                break
                            default: data = "?"
                        }
                        return data
                    }}
                />

                <YAxis dataKey="sessionLength"
                    hide={true}
                    domain={[0, 80]}
                />

                <Legend
                    content={() => {
                        return (
                            <div className='linechart-legend'>
                                <p>Durée moyenne des</p>
                                <p>sessions</p>
                            </div>

                        )
                    }}
                    align='left'
                    verticalAlign='top'
                />

                <Line dataKey="sessionLength"
                    dot={false}
                    stroke="#ffffffff"
                    type="bump"     // 'basis' | 'bump' | 'natural' | 'monotone' 
                />

                <Tooltip
                    content={({ active, payload }) => {
                        if (!active || !payload || payload.length === 0) {
                            return null
                        }
                        return (
                            <div className='sessions-tooltip'>
                                <p>{payload[0].value} min</p>
                            </div>
                        )
                    }}
                // offset={50}
                />

            </LineChart>

        </ResponsiveContainer>

    );
}

export default SessionsDuration;
