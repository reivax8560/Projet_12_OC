import './SessionsDuration.css';
import Api from '../../api';
import { LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line, Rectangle } from 'recharts';
import { useEffect, useState } from 'react';


function SessionsDuration() {

    const [userSessions, setUserSessions] = useState({})

    useEffect(() => {
        const api = new Api()
        api.getUserSessions()
            .then((datas) => {
                setUserSessions(datas.sessions)
            })
    }, [])



    return (
        <ResponsiveContainer width='31%' height={230} className={"linechart-container"} >

            <LineChart
                data={userSessions}
                style={{ background: "#ff0101", borderRadius: "5px" }}
                margin={{ top: 70, right: 15, bottom: 10, left: 15 }}
            >

                <defs>
                    <linearGradient id="line-gradient">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="30%" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="100%" />
                    </linearGradient>
                </defs>

                <text x="10%" y="15%" fontSize="0.8rem" fontWeight={400} width={100} fill="#ffffff" opacity={0.5}>
                    Durée moyenne des
                    <tspan x="10%" y="24%">
                        sessions
                    </tspan>
                </text>

                <Line
                    type="natural"
                    dataKey="sessionLength"
                    dot={false}
                    stroke="url(#line-gradient)"
                    // unit={"min"}
                    strokeWidth={2}
                    activeDot={{ stroke: "#ffffff", strokeOpacity: "30%", strokeWidth: 11, fill: "#ffffff", r: 5 }}
                />

                <YAxis dataKey="sessionLength"
                    hide={true}
                    domain={["dataMin - 10", "dataMax + 5"]}
                />

                <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    stroke="#ffffff"
                    opacity={0.5}
                    fontSize="0.8rem"
                    fontWeight={400}
                />

                <Tooltip
                    content={<CustomContent />}
                    cursor={<CustomCursor />}
                />

            </LineChart>
        </ResponsiveContainer>
    );
}

function CustomContent({ active, payload }) {
    if (!active || !payload || payload.length === 0) {
        return null
    }
    return (
        <div className='sessions-tooltip'>
            <p>{payload[0].value} min</p>
        </div>
    )
}

function CustomCursor({ points }) {
    // const { x, y } = points[0];
    return (
        <Rectangle
            width={300}
            height={300}
            x={points[0].x} // démarre le rectangle à la position x du curseur
            y={0}
            fill='black'
            fillOpacity={0.1}
        // width={1000}
        // height={1000}
        // x={x}
        // y={y}
        // points={points}
        />
    );
}

export default SessionsDuration;
