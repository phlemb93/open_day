import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaAccessibleIcon } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";
import { MdOutlineNotAccessible } from "react-icons/md";
import { TbParkingOff } from "react-icons/tb";
import { TbBikeOff } from "react-icons/tb";
import { MdOutlineArrowBackIosNew } from "react-icons/md";




const TopicItem = () => {

    const { id } = useParams();
    const [event, setEvent] = useState(null);

    //Fetching individual open-day topics
    useEffect(() => {
        const fetchRequest = async function(){
            try {
                let res = await axios.get(`http://localhost:3000/topics/${id}`);
                if(res.status === 200){
                    setEvent(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchRequest();
    }, [])


  return (
    <main className='topic-item'>
        <Link to='/'>
            <MdOutlineArrowBackIosNew 
                style={{
                    fontSize:20, 
                    color:'#B22737'
                }}
            />
            <p>Go Back</p>
        </Link>

        <h1>{event && `${event.name} Programs`}</h1>

        <section className="list">
            {
                event && event.programs.map(program => (
                    <div className='program-item' key={program.id}>
                        <h3>{program.title}</h3>
                        <small className='desc'>{program.description_short}</small>
                        <p>Date: {program.start_time.substr(0, 10)}</p>
                        <p>Time: {program.start_time.substr(11,5)} - {program.end_time.substr(11,5)}</p>
                        <Link to={program.location.website} target='_blank' className='location'>
                        Location: {program.location.title}. {program.location.address}, {program.location.postcode}
                        </Link>
                        <div className="foot">
                            { program.location.accessible ? <FaAccessibleIcon style={{color:'#0039a6'}} size={16} /> : <MdOutlineNotAccessible style={{color:'#B22737'}} size={18} /> }
                            { program.location.parking ? <FaParking style={{color:'#0039a6'}} size={18} /> : <TbParkingOff style={{color:'#B22737'}} size={18} /> }
                            { program.location.bike_parking ? <MdDirectionsBike style={{color:'#0039a6'}} size={18} /> : <TbBikeOff style={{color:'#B22737'}} size={18} /> }
                        </div>
                    </div>
                ))
            }
        </section>
    </main>
  )
}

export default TopicItem