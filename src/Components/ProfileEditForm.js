import React, { useState,useEffect } from 'react'

// API URL import
import { apiURL } from '../config/api_url';
import { select } from '@material-tailwind/react';

const ProfileEditForm = ({wrestler}) => {
    
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


  return (
    <div className='border-2 border-solid w-full border-gray-300 rounded-md p-5 bg-slate-100 text-gray-700'>
        <h2 className='text-center'>Edit {wrestler.wrestler_name}'s Profile</h2>
        <form className='mt-10 pl-10'>

        {/* Name field */}
            <label className='mb-5'>
                Name:
                <input
                    type="text"
                    defaultValue={wrestler.wrestler_name}
                    // value={wrestler.wrestler_name}
                    className='rounded-md bg-gray-300 w-10/12 text-gray-700 p-2 mt-2 block mb-6' />
            </label>

        {/* Image URL field */}
            <label className='mt-10'>
                Image URL:
                <input
                    type="text"
                    defaultValue={wrestler.wrestler_img}
                    // value={wrestler.wrestler_name}
                    className='rounded-md bg-gray-300 w-10/12 text-gray-700 p-2 mt-2 mb-6 block' />
            </label>

        {/* Bio Field */}
            <label className='mt-10'>
                Bio:
                <textarea
                    type="textarea"
                    defaultValue={wrestler.bio}
                    // value={wrestler.wrestler_name}
                    className='rounded-md bg-gray-300 w-10/12 h-20 text-gray-700 p-2 mt-2 mb-6 block' />
            </label>


        {/* Promotion field */}
            <label className='mt-10'>
                Promotion:
               <select name="promotion" defaultValue={wrestler.promotion_name} id="" className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-6'>
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
               <select name="Finisher" id="" className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-6'>
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
                <select name="Style" id="" className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-6'>
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
                    <select name="Allegiance" id="" className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-6'>
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
            <button className='p-3 rounded-md w-full text-gray-200 bg-gray-800 text-center'>
                Update Profile
            </button>

        </div>
        </form>
    </div>
  )
}

export default ProfileEditForm