import './Title.css';


function Title({ datas }) {

    return (
        <div className='title'>
            <h2>Bonjour <span>{datas}</span></h2>
            <p>Félicitation ! vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}


export default Title;
