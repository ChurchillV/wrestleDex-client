import React, { useState, useEffect } from 'react'
import { apiURL } from '../config/api_url';

// Form component imports
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

const AddStar = () => {

  const [gender, setGender] = useState("Male");
  const [styles, setStyles] = useState([]);
  const [finishers, setFinishers] = useState([]);
  const [promotions, setPromotions] = useState([]);

  const onOptionChange = e => {
    setGender(e.target.value)
  }

useEffect(() => {

  const fetchStyles = async() => {
    try {
      const response = await fetch(`${apiURL}/styles`);
      const stylesData  = await response.json();
      setStyles(stylesData);
    } catch(error) {
      console.error("Error fetching styles data:", error);
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
  
  const fetchPromotions = async() => {
    try {
      const response = await fetch(`${apiURL}/promotions`);
      const promotionsData  = await response.json();
      setPromotions(promotionsData);
    } catch(error) {
      console.error("Error fetching Promotions data:", error);
    }
  };
  
  fetchStyles();
  fetchFinishers();
  fetchPromotions();
}, []);

  return (
    <div className='flex flex-col justify-center items-center mx-4 text-gray-200 mb-10'>
      {/* Form section begins */}
        <Card color="transparent" shadow={false}>

          {/* Heading */}
          <Typography variant="h4" color="white">
            Add a Star
          </Typography>
          <Typography color="white" className="mt-1 font-normal">
            Enter the Details of your star
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 text-gray-100">
            <div className="mb-1 flex flex-col gap-6">

              {/* Name section */}
              <Typography variant="h6" color="white" className="-mb-3">
                Name
              </Typography>
              <Input
                size="lg"
                placeholder="Eg. Krusher"
                className=" !border-t-gray-200 focus:!border-t-gray-900 px-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              {/* Bio section */}
              <Typography variant="h6" color="white" className="-mb-3">
                Bio
              </Typography>
             <Textarea
              variant='outlined'
              size='lg'
              placeholder='Raised by wolves...'
              className='px-2'
             />

             {/* Promotion section */}
            <Typography variant="h6" color="white" className="-mb-3">
              Promotion
            </Typography>
             <select name="" id="" placeholder='Select a promotion' className='bg-transparent text-gray-100 p-2 border-2 rounded-md border-gray-50'>
              <option value="" className='bg-black text-gray-200'>Select a Promotion</option>
             {promotions.map((promotion) => (
                <option key={promotion.promotion_id} value={promotion.promotion_id} className='bg-black text-gray-200'>
                  {promotion.promotion}
                </option>
             ))}
             </select>

             {/* Finisher section */}
            <Typography variant="h6" color="white" className="-mb-3">
              Finisher
            </Typography>
             <select name="" id="" className='bg-transparent text-gray-200 p-2 border-2 rounded-md border-gray-50'>
              <option value="" className='bg-black text-gray-200'>Select a Finisher</option>
              {finishers.map((finisher) => (
                <option key={finisher.finisher_id} value={finisher.finisher_id} className='bg-black text-gray-200'>
                  {finisher.finisher_name}
                </option>
             ))}
             </select>
            
            {/* Style and Allegiance section */}
            <div className="flex flex-row gap-3 justify-around">
              <Typography variant="h6" color="white" className="-mb-3">
                Style
              </Typography>
              <select name="" id="" className='bg-transparent text-gray-200 p-2 border-2 rounded-md border-gray-50'>
                <option value="" className='bg-black text-gray-200'>Select Style</option>
                {styles.map((style) => (
                <option key={style.style_id} value={style.style_id} className='bg-black text-gray-200'>
                  {style.style_name}
                </option>
             ))}
              </select>

              <Typography variant="h6" color="white" className="-mb-3">
                Allegiance
              </Typography>
              <select name="" id="" className='bg-transparent text-gray-200 p-2 border-2 rounded-md border-gray-50'>
                <option value="" className='bg-black text-gray-200'>Heel/Face</option>
                <option value="F" className='bg-black text-gray-200'>Face</option>
                <option value="H" className='bg-black text-gray-200'>Heel</option>
              </select>
            </div>

             {/* Gender section */}
            <Typography variant="h6" color="white" className="-mb-3">
              Gender
            </Typography>
            <div className="flex flex-row justify-around">
              <div>
              <input
                  type="radio"
                  name="gender"
                  value="Male"
                  id="male"
                  checked={gender === "Male"}
                  onChange={onOptionChange}
                />
                <label htmlFor="regular" className='ml-2'>Male</label>
              </div>
              
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  id="female"
                  checked={gender === "Female"}
                  onChange={onOptionChange}
                />
                <label htmlFor="medium" className='ml-2'>Female</label>
              </div>
            </div>

            </div>

            {/* Submit button */}
            <Button className="mt-6 bg-gray-200 text-gray-800" fullWidth>
              Add Star
            </Button>
          </form>
      </Card>
    </div>
  )
}

export default AddStar