import './index.css'
import Anagar from "./img/city.png"


export default function cityinfo(props) {
    const { title, information, area, history} = props;
    return (
        <div className='city-card'>
        <img src ={Anagar}  style={{}} className="img-poster" />
        <div className='city-details'>
            <div className='same-content heading'>
                <h3> {title} </h3>
                <p> <span className='rating'> {information} </span></p>
              </div>
              
                <p> History</p>
                </div>
                <div className='same-content time history'>
                    
                    <p> {history}</p>
                </div>
                <p> Area</p>
                <div className='same-content sub-heading'>
            
                <p>{area}</p>
                </div>
        </div>
    
    )
}
 

