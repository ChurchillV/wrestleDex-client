import React, { useState, useEffect } from 'react'

// Import API url
import { apiURL } from '../config/api_url';

// Component imports
import WrestlerCard from '../Components/WrestlerCard';
import ProfileEditForm from '../Components/ProfileEditForm';

const Home = () => {
    // API data
    const [data, setData] = useState([]);

    // Loading status
    const [loading, setLoading] = useState(true);

    // Search query data
    const [searchQuery, setSearchQuery] = useState('');

    // Wrestler details for edit form
    const [wrestlerDetails, setWrestlerDetails] = useState(null);

    // Display edit form (or not)
    const [showEditForm, setShowEditForm] = useState(false);

    // Styling logic for edit form
    const wrestlerSectionStyle = showEditForm 
    ? "grid md:grid-cols-2 lg:grid-cols-4 gap-4 opacity-25 transition ease-out duration-300"
    : "grid md:grid-cols-2 lg:grid-cols-4 gap-4 transition ease-out duration-300"

    // Scroll to top on edit button click
    const displayEditForm = (wrestlerDetails) => {
      setWrestlerDetails(wrestlerDetails);
      setShowEditForm(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const hideEditForm = () => {
      setShowEditForm(false);
    }

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
        try {
          const apiEndpoint = searchQuery
          ? `${apiURL}/wrestlers/search?name=${encodeURIComponent(searchQuery)}`
          : `${apiURL}/wrestlers/`;

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
    <div className='text-white flex mt-3 justify-center px-10 relative'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
          <span className="text-5xl font-bold mb-4">All Stars</span>
          <div>
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
            <div className={wrestlerSectionStyle}>
              {data.map(item => (
                <WrestlerCard 
                  key={item.wrestler_id}
                  wrestler={item} 
                  onEditButtonClick={() => displayEditForm(item)}/>
              ))}
            </div>
          :
          <div className="text-3xl grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            No wrestlers found
          </div>
          )}
          {showEditForm &&
            <ProfileEditForm 
                wrestler={wrestlerDetails}
                exitForm={hideEditForm}
              />
          }
      </div>
    </div>
  )
}

export default Home