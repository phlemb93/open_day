import axios from "axios";
import TopicSearch from "../components/TopicSearch";
import TopicsList from "../components/TopicsList";
import { useEffect, useState } from "react";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { MdError } from "react-icons/md";


const Home = () => {

    const [topics, setTopics] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const [value, setValue] = useState('');

    //Fetching data
    useEffect(() => {
        const fetchRequest = async function(){
            try {
                let res = await axios.get('http://localhost:3000/topics');

                if(res.status === 200){
                    setTopics(res.data);
                    setIsLoading(false);
                }

            } catch (error) {
                console.log(error);
                setError(true);
                setIsLoading(false);
            }
        }

        fetchRequest();

    }, [])

    //Function to set the search value
    const handleSearch = (val) => {
        setValue(val);
    }

  return (
    <main className="home">
        { !isLoading ?
            <>
                <section className="topic-search">
                    <TopicSearch handleSearch={handleSearch} />
                </section>
                
                { !error ?
                    <>
                        <section>
                            <h1>Open-Day Topics</h1>
                        </section>
                        <section className="topics-list">
                            <TopicsList topics={topics} value={value} />
                        </section>
                    </>
                    : 
                    <section className="error">
                        <div>
                            <MdError style={{fontSize:30, color:'#B22737'}}/>
                            <h2>Oooooops!</h2>
                        </div>
                        <p>An error occurred...</p>
                    </section> 
                }
            </> :  <LoadingSkeleton />
        }
    </main>
  )
}

export default Home