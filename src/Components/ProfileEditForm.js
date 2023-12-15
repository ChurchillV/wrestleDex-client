import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// API URL import
import { apiURL } from '../config/api_url';

const ProfileEditForm = ({wrestler, displayForm, exitForm}) => {

  const navigate = useNavigate();
  const [wrestlerDetails, setWrestlerDetails] = useState(wrestler);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setWrestlerDetails({...wrestlerDetails, [name]: value});
  }
    
    const [promotions, setPromotions] = useState([]);
    const [finishers, setFinishers] = useState([]);
    const [styles, setStyles] = useState([]);

    useEffect(() => {
    
        const fetchPromotions = async() => {
            try {
              const response = await fetch(`${apiURL}/promotions`);
              const promotionsData  = await response.json();
              setPromotions(promotionsData);
            } catch(error) {
              console.error("Error fetching Promotions data:", error);
            }
          };
    
          const fetchFinishers = async() => {
            try {
              const response = await fetch(`${apiURL}/finishers`);
              const finishersData  = await response.json();
              setFinishers(finishersData);
            } catch(error) {
              console.error("Error fetching finishers data:", error);
            }
          }; 
    
            const fetchStyles = async() => {
        try {
          const response = await fetch(`${apiURL}/styles`);
          const stylesData  = await response.json();
          setStyles(stylesData);
        } catch(error) {
          console.error("Error fetching styles data:", error);
        }
      }; 
    
        fetchPromotions();
        fetchFinishers();
        fetchStyles();
    }, []);

    const updateProfileData = async(e) => {
      e.preventDefault();

      try {
        const response = await fetch(`${apiURL}/:${wrestler.wrestler_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify(wrestlerDetails),
        });

        if(response.ok) {
          console.log(`Profile updated successfully!`);
          navigate("/");
        } else {
          console.log("Error updating wrestler profile:", response.statusText);
        }
      } catch(error) {
        console.error("Error updating Wrestler details: ", error);
      }
    }

    const handleCloseButtonClick = () => {
      exitForm();
    }

  return (
    <div className='border-2 border-solid w-full border-gray-300 rounded-md p-5 bg-slate-100 text-gray-700'>
      <div 
        className="flex flex-row justify-end mr-3"
        onClick={handleCloseButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      </div>
        <h2 className='text-center'>Edit {wrestler.wrestler_name}'s Profile</h2>
        <form className='mt-10 pl-10'>

        {/* Name field */}
            <label className='mb-5'>
                Name:
                <input
                    type="text"
                    defaultValue={wrestler.wrestler_name}
                    name='wrestler_name'
                    value={wrestlerDetails.wrestler_name}
                    onChange={handleInputChange}
                    className='rounded-md bg-gray-300 w-10/12 text-gray-700 p-2 mt-2 block mb-6' />
            </label>

        {/* Image URL field */}
            <label className='mt-10'>
                Image URL:
                <input
                    type="text"
                    defaultValue={wrestler.wrestler_img}
                    name='image_url'
                    value={wrestlerDetails.image_url}
                    onChange={handleInputChange}
                    className='rounded-md bg-gray-300 w-10/12 text-gray-700 p-2 mt-2 mb-6 block' />
            </label>

        {/* Bio Field */}
            <label className='mt-10'>
                Bio:
                <textarea
                    type="textarea"
                    defaultValue={wrestler.bio}
                    name='bio'
                    value={wrestlerDetails.bio}
                    onChange={handleInputChange}
                    className='rounded-md bg-gray-300 w-10/12 h-20 text-gray-700 p-2 mt-2 mb-6 block' />
            </label>


        {/* Promotion field */}
            <label className='mt-10'>
                Promotion:
               <select 
                  name="promotion_id"
                  value={wrestlerDetails.promotion_id}
                  defaultValue={wrestler.promotion_name} id="" className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-6'>
                  {promotions.map((promotion) => (
                      (promotion.promotion_name === wrestler.promotion_name) ?
                      <option selected key={promotion.promotion_id} value={promotion.promotion_id} name='promotion_id' className='bg-black text-gray-200'>
                      {promotion.promotion}
                      </option> 
                      :
                      <option key={promotion.promotion_id} value={promotion.promotion_id} name='promotion_id' className='bg-black text-gray-200'>
                      {promotion.promotion}
                      </option>
                  ))}
               </select>
            </label>


        {/* Finisher field */}
            <label className='mt-10'>
                Finisher:
               <select 
                  name="finisher_id"
                  value={wrestlerDetails.finisher_id} 
                  id="" className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-6'>
                {finishers.map((finisher) => (
                    (finisher.finisher_name === wrestler.finisher_name) ?
                    <option selected key={finisher.finisher_id} value={finisher.finisher_id} className='bg-black text-gray-200'>
                    {finisher.finisher_name}
                    </option>
                    :
                    <option key={finisher.finisher_id} value={finisher.finisher_id} className='bg-black text-gray-200'>
                    {finisher.finisher_name}
                    </option>
                ))}
               </select>
            </label>


            {/* Style field */}
                <label className=''>
                    Style:
                <select 
                  name="style_id" 
                  value={wrestlerDetails.style_id}  
                  id="" className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-6'>
                    {styles.map((style) => (
                    (style.style_id === wrestler.style_id) ?
                    <option selected key={style.style_id} value={style.style_id} className='bg-black text-gray-200'>
                    {style.style_name}
                    </option>
                    :
                    <option key={style.style_id} value={style.style_id} className='bg-black text-gray-200'>
                    {style.style_name}
                    </option>
                ))}
                </select>
                </label>

            {/* Allegiance field */}
                <label className=''>
                    Allegiance:
                {(wrestler.allegiance_id === "F") ?
                    <select 
                      name="allegiance_id"
                      value={wrestlerDetails.allegiance_id} 
                      id="" className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-6'>
                    <option value="F" className='' selected>Face</option>
                    <option value="H" className=''>Heel</option>
                    </select>
                    :
                    <select>
                    <option value="F" className='' selected>Heel</option>
                    <option value="H" className=''>Face</option>
                    </select>
                }
                </label>


        <div className='text-center mr-5 mt-5'>
        {/* Submit button */}
            <button 
              type='submit'
              className='p-3 rounded-md w-full text-gray-200 bg-gray-800 text-center'
              onClick={updateProfileData}>
                Update Profile
            </button>

        </div>
        </form>
    </div>
  )
}

export default ProfileEditForm