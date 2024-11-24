import './Greeting.css';


function Greeting({ userMainDatas }) {

    return (
        <div className='greeting'>

            <h2 className='greeting-title'>Bonjour
                {typeof userMainDatas == "string" ?
                    <span className='greeting-error'> {userMainDatas}</span>
                    :
                    <span> {userMainDatas.userInfos?.firstName}</span>
                }
            </h2>

            <p className='greeting-comment'>Félicitation ! vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

export default Greeting;
