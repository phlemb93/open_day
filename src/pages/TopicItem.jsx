import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaAccessibleIcon } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";




const TopicItem = () => {

    let time = new Date("2019-07-05 09:00:00").getHours();
    time.toString().padStart(2, '0')
    
    console.log(time.toString().padStart(2, '0'))

    const { id } = useParams();
    const [event, setEvent] = useState(null);


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
    <div className='topic-item'>
        <h1>{event && event.name}</h1>
        <div className="list">
            {
                event && event.programs.map(program => (
                    <div className='program-item' key={program.id}>
                        <h3>{program.title}</h3>
                        <p className='desc'>{program.description_short}</p>
                        <p>Date: {program.start_time.split(" ")[0]}</p>
                        <p>Time: {program.start_time.split(" ")[1]} - {program.end_time.split(" ")[1]}</p>
                        <p>Location: {program.location.title}. {program.location.address}, {program.location.postcode}</p>
                        <div className="foot">
                            <FaAccessibleIcon style={{color: program.location.accessible ? 'green' : 'red'}} size={28}/>
                            <FaCarSide style={{color: program.location.parking ? 'green' : 'red'}} size={28} />
                            <MdDirectionsBike style={{color: program.location.bike_parking ? 'green' : 'red'}} size={28} />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TopicItem