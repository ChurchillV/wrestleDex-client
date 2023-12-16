import React, { useState, useEffect} from 'react'

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
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      setWrestlerDetails(wrestlerDetails);
      setShowEditForm(true);
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

    const editFormInputChange = (e) => {
      const {name, value} = e.target;
      setWrestlerDetails({...wrestlerDetails, [name]: value});
    }

    // Update wrestler record in the database
    const updateProfileData = async(e) => {
      e.preventDefault();

      try {
        const response = await fetch(`${apiURL}/:${wrestlerDetails.wrestler_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify(wrestlerDetails),
        });

        if(response.ok) {
          console.log(`Profile updated successfully!`);
        } else {
          console.log("Error updating wrestler profile:", response.statusText);
        }
      } catch(error) {
        console.error("Error updating Wrestler details: ", error);
      }
    }


  return (
    <div className='text-white flex mt-3 justify-center px-10 relative'>
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
            <div className={wrestlerSectionStyle}>
              {data.map(item => (
                <WrestlerCard 
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
                submitUpdate={updateProfileData}
                handleChange={editFormInputChange}
              />
          }
      </div>
    </div>
  )
}

export default Home