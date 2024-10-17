import './PerformanceByActivity.css';
import { RadarChart, ResponsiveContainer, PolarGrid, PolarAngleAxis, Radar, Text } from 'recharts';
import { useEffect, useState } from 'react';
import Api from '../../api';


function PerformanceByActivity() {

    const [userPerf, setUserPerf] = useState({})

    useEffect(() => {
        const api = new Api()

        api.getUserPerformance()
            .then((datas) => {
                setUserPerf(datas)
            })
    }, [])



    return (
        <ResponsiveContainer width='31%' height={230} className={"radarchart-container"}>

            {typeof userPerf == "string" ?
                <div className='radarchart-div-error'>
                    <div className='radarchart-error'>{userPerf}</div>
                </div>
                :

                <RadarChart data={userPerf} outerRadius="65%" >  {/* outerRadius pour rétrécir le graph */}

                    <PolarGrid
                        radialLines={false}
                        stroke='#ffffff'

                    />
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={ActivitiesCustomTick}

                    />
                    <Radar dataKey="value" fill="#ff0000" fillOpacity={0.6} />
                </RadarChart>

            }
        </ResponsiveContainer>
    );
}

function ActivitiesCustomTick({ payload, x, y, cx, cy, ...rest }) {
    return (
        <Text
            {...rest}
            verticalAnchor="middle"
            y={y + (y - cy) / 10}
            x={x + (x - cx) / 100}
            fill="#ffffff"
            fontSize="12px"
            fontWeight={500}
        >
            {payload.value}
        </Text>
    );
}

export default PerformanceByActivity;
