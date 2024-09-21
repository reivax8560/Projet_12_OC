import './Greeting.css';


function Greeting({ datas }) {

    return (
        <div className='greeting'>
            <h2 className='greeting-title'>Bonjour <span>{datas}</span></h2>
            <p className='greeting-comment'>Félicitation ! vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}


export default Greeting;
