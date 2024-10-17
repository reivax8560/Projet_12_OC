import './Greeting.css';
import { useEffect, useState } from 'react';
import Api from '../../api';


// function Greeting({ datas }) {
function Greeting() {


    const [userName, setUserName] = useState({})

    useEffect(() => {
        const api = new Api()
        api.getUserMainDatas()
            .then((datas) => {
                setUserName(datas)
            })
    }, [])

    return (
        <div className='greeting'>
            {typeof userName == "string" ?

                <div className='greeting-error'>{userName}</div>
                :
                <>
                    <h2 className='greeting-title'>Bonjour <span>{userName.userInfos?.firstName}</span></h2>
                    <p className='greeting-comment'>Félicitation ! vous avez explosé vos objectifs hier 👏</p>
                </>
            }
        </div>
    );
}


export default Greeting;
