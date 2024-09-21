import './PerformanceByActivity.css';
import { RadarChart, ResponsiveContainer, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
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

            <RadarChart data={userPerf} outerRadius={90} >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" />
                <Radar dataKey="value" fill="#ff0000" fillOpacity={0.6} />
            </RadarChart>

        </ResponsiveContainer>
    );
}

export default PerformanceByActivity;
