
const TopicSearch = ({ handleSearch }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const val = e.target.children[1].value;
        handleSearch(val);
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="topic-search"></label>
        <input type="text" name="topic-search" id="topic-search" placeholder='Search for open day topics' />
        <button>Search</button>
    </form>
  )
}

export default TopicSearch