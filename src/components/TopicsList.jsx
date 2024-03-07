/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TopicsList = ({ topics, value }) => {
  return (
    <>
      { 
        topics && topics.filter(item => {
            if(item === '') return item;
            if(item.name.toLowerCase().includes(value.toLowerCase())){
                return item;
            }
        }).map(item => (
            <Link to={`topics/${item.id}`} key={item.id} className='topic'>
                <img src={item.cover_image} alt={item.name} width={'100%'} height={250}/>
                <div>
                    <h3>{item.name}</h3>
                    <div className="btn">View All {item.programs.length} Programs</div>
                </div>
            </Link>
        ))
      }
    </>
  )
}

export default TopicsList;