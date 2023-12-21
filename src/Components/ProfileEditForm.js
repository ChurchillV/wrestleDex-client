import React, { useState,useEffect } from 'react'

// API URL import
import { apiURL } from '../config/api_url';

const ProfileEditForm = ({ wrestler, exitForm }) => {

  const [wrestlerDetails, setWrestlerDetails] = useState(wrestler);

  const handleInputChange = (e) => {
    setWrestlerDetails({[e.target.name] : e.target.value });
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

    const handleCloseButtonClick = () => {
      exitForm();
    }

    const updateWrestlerProfile = async() => {

        try {
          const response = await fetch(`${apiURL}/wrestler/${wrestler.wrestler_id}`, {
            method: 'PUT',
            headers: {
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify(wrestlerDetails),
          });
  
          if(response.ok) {
            console.log(`Profile updated successfully!`);
            exitForm();
          } else {
            console.log("Error updating wrestler profile:", response.statusText);
          }
        } catch(error) {
          console.error("Error updating Wrestler details: ", error);
        }

    }

  return (
    <div 
      className='border-2 border-solid w-1/2 border-gray-300 rounded-md p-5 bg-slate-100 text-gray-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div 
        className="flex flex-row justify-end mr-3"
        onClick={handleCloseButtonClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer hover:bg-gray-600 hover:text-blue-200 transition ease-out duration-300 rounded-lg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      </div>
        <h2 className='text-center text-3xl'>Edit {wrestler.wrestler_name}'s Profile</h2>
        <form className='mt-10 flex flex-col justify-items-center ml-10'>

        {/* Name field */}
            <label className='mb-5'>
                Name:
                <input
                    type="text"
                    defaultValue={wrestler.wrestler_name}
                    name='wrestler_name'
                    value={wrestlerDetails.wrestler_name}
                    onChange={handleInputChange}
                    className='rounded-md bg-gray-300 w-10/12 text-gray-700 p-2 mt-2 block mb-2' />
            </label>

        {/* Image URL field */}
            <label className='mt-6'>
                Image URL:
                <input
                    type="text"
                    defaultValue={wrestler.wrestler_img}
                    name='image_url'
                    value={wrestlerDetails.image_url}
                    onChange={handleInputChange}
                    className='rounded-md bg-gray-300 w-10/12 text-gray-700 p-2 mt-2 mb-2 block' />
            </label>

        {/* Bio Field */}
            <label className='mt-6'>
                Bio:
                <textarea
                    type="textarea"
                    defaultValue={wrestler.bio}
                    name='bio'
                    value={wrestlerDetails.bio}
                    onChange={handleInputChange}
                    className='rounded-md bg-gray-300 w-10/12 h-20 text-gray-700 p-2 mt-2 mb-2 block' />
            </label>


        {/* Promotion field */}
            <label className='mt-6'>
                Promotion:
               <select 
                  name="promotion_id"
                  value={wrestlerDetails.promotion_id}
                  defaultValue={wrestler.promotion_name} 
                  onChange={handleInputChange} 
                  className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-2'>
                  {promotions.map((promotion) => (
                      (promotion.promotion_name === wrestler.promotion_name) ?
                      <option 
                        key={promotion.promotion_id} 
                        value={promotion.promotion_id} 
                        name='promotion_id' 
                        className='bg-black text-gray-200'>
                      {promotion.promotion}
                      </option> 
                      :
                      <option 
                        key={promotion.promotion_id} 
                        value={promotion.promotion_id} 
                        name='promotion_id' 
                        className='bg-black text-gray-200'>
                      {promotion.promotion}
                      </option>
                  ))}
               </select>
            </label>


        {/* Finisher field */}
            <label className='mt-6'>
                Finisher:
               <select 
                  name="finisher_id"
                  value={wrestlerDetails.finisher_id} 
                  onChange={handleInputChange} 
                  className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-2'>
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
          <label className='mt-4'>
              Style:
          <select 
            name="style_id" 
            value={wrestlerDetails.style_id}  
            onChange={handleInputChange}
            className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-2'>
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
                <label className='mt-4'>
                    Allegiance:
                {(wrestler.allegiance_id == "F") ?
                    <select 
                      name="allegiance_id"
                      value={wrestlerDetails.allegiance_id} 
                      onChange={handleInputChange} 
                      className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-3 mb-2'>
                    <option value="F" selected>Face</option>
                    <option value="H">Heel</option>
                    </select>
                    :
                    <select
                      name="allegiance_id"
                      value={wrestlerDetails.allegiance_id} 
                      onChange={handleInputChange} 
                      className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-3 mb-2'>
                    <option value="H"  selected>Heel</option>
                    <option value="F">Face</option>
                    </select>
                }
                </label>


        <div className='text-center mt-5 mr-12'>
        {/* Submit button */}
            <button 
              type='submit'
              className='p-3 rounded-md w-1/2 text-gray-200 bg-gray-800 text-center'
              onClick={updateWrestlerProfile}>
                Update Profile
            </button>
        </div>
        </form>
    </div>
  )
}

export default ProfileEditForm