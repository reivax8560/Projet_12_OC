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

                function getKindValue(key) {
                    for (let property in datas.kind) {
                        if (property == key) {
                            return datas.kind[property]
                        }
                    }
                }

                datas.data.map((dataElement) => {
                    dataElement.kind = getKindValue(dataElement.kind)
                })

                setUserPerf(datas.data)
            })
    }, [])



    return (
        <ResponsiveContainer width='30%' height={260} className={"radarchart-container"}>

            <RadarChart data={userPerf} outerRadius={90} >
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <Radar dataKey="value" fill="#ff0000" fillOpacity={0.6} />
            </RadarChart>

        </ResponsiveContainer>
    );
}

export default PerformanceByActivity;
