import './InfoCard.css';


function InfoCard({ value, unit, type, children }) {

    return (
        <article className='info-card'>
            {children}
            <div className='info-wrapper'>
                <p className='info-value'>{value}{unit}</p>
                <p className='info-type'>{type}</p>
            </div>
        </article>
    );
}


export default InfoCard;
