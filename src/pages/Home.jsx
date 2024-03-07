import axios from "axios";
import TopicSearch from "../components/TopicSearch";
import TopicsList from "../components/TopicsList";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Home = () => {

    const [topics, setTopics] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const [value, setValue] = useState('');


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

    const handleSearch = (val) => {
        setValue(val);
    }

  return (
    <main className="home">

        {
            !isLoading ?
            <>
                <section className="topic-search">
                    <TopicSearch handleSearch={handleSearch} />
                </section>
                <section>
                    <h1>Open-Day Topics</h1>
                </section>
                <section className="topics-list">
                    <TopicsList topics={topics} value={value} />
                </section>
            </> : <Loading />
        }



        
    </main>
  )
}

export default Home