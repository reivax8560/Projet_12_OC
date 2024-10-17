import './InfoCard.css';


function InfoCard({ value, unit, type, icon }) {

    return (
        <article className='info-card'>
            <img src={icon} className='key-icon' alt={icon} />
            <div className='info-wrapper'>
                <p className='info-value'>{value}{unit}</p>
                <p className='info-type'>{type}</p>
            </div>
        </article>
    );
}


export default InfoCard;

