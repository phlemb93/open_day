/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const TopicsList = ({ topics, value }) => {

  const newItems = topics && topics.filter(item => {
    if(item === '') return item;
    if(item.name.toLowerCase().includes(value.toLowerCase())){
        return item;
    }
  });


  if(newItems && newItems.length > 0){
    return (
      newItems.map(item => {
        return ( 
        <Link to={`topics/${item.id}`} key={item.id} className='topic-container'>
            <img src={item.cover_image} alt={item.name} width={'100%'} height={250}/>
            <div>
                <h3>{item.name}</h3>
                <div className="btn">View All {item.programs.length} Programs</div>
            </div>
        </Link> )
      })
    )

  } else {
    return <p className='no-search-result'>No search result for<span style={{fontWeight:'bold'}}>{ `"${value}"` }</span></p>
  }

}

export default TopicsList;
