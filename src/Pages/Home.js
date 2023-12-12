import React, { useState, useEffect} from 'react'

// Component imports
import WrestlerCard from '../Components/WrestlerCard';
import ProfileEditForm from '../Components/ProfileEditForm';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
        try {
          const apiEndpoint = searchQuery
          ? `http://localhost:2999/wrestlers/search?name=${encodeURIComponent(searchQuery)}`
          : 'http://localhost:2999/wrestlers/';

            const response = await fetch(apiEndpoint); 
            const result = await response.json();
            console.log('API Response:', result);
            setData(result);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            console.log(data);
        }
        };

        fetchData();
    }, [searchQuery]);


  return (
    <div className='text-white flex mt-3 justify-center px-10'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
          <span className="text-5xl font-bold mb-4">All Stars</span>
          <div className="">
            <input
            className='mb-10 text-gray-700 rounded-lg px-4 py-3 bg-transparent border border-gray-500 border-solid'
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div></div>
        </div>

          {loading ? (
            <p className='text-white'>Loading...</p>
          ) : (
            (data.length > 0) ? 
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.map(item => (
                <WrestlerCard wrestler={item} />
              ))}
            </div>
          :
          <div className="text-3xl grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            No wrestlers found
          </div>
          )}
          {/* <ProfileEditForm wrestler={data[0]}/> */}
      </div>
    </div>
  )
}

export default Home