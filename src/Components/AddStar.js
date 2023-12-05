import React from 'react'

// Form component imports
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

const AddStar = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-4 text-gray-200 mb-10'>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="white">
            Add a Star
          </Typography>
          <Typography color="white" className="mt-1 font-normal">
            Enter the Details of your star
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 text-gray-100">
            <div className="mb-1 flex flex-col gap-6">
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
              <Typography variant="h6" color="white" className="-mb-3">
                Bio
              </Typography>
             <Textarea
              variant='outlined'
              size='lg'
              placeholder='Raised by wolves...'
              className='px-2'
             />
            <Typography variant="h6" color="white" className="-mb-3">
              Promotion
            </Typography>
             <select name="" id="" placeholder='Select a promotion' className='bg-transparent text-gray-100 p-2 border-2 rounded-md border-gray-50'>
              <option value="" className='bg-black text-gray-200'>One</option>
              <option value="" className='bg-black text-gray-200'>Two</option>
              <option value="" className='bg-black text-gray-200'>Three</option>
              <option value="" className='bg-black text-gray-200'>Four</option>
              <option value="" className='bg-black text-gray-200'>Five</option>
             </select>

            <Typography variant="h6" color="white" className="-mb-3">
              Finisher
            </Typography>
             <select name="" id="" className='bg-transparent text-gray-200 p-2 border-2 rounded-md border-gray-50'>
              <option value="" className='bg-black text-gray-200'>One</option>
              <option value="" className='bg-black text-gray-200'>Two</option>
              <option value="" className='bg-black text-gray-200'>Three</option>
              <option value="" className='bg-black text-gray-200'>Four</option>
              <option value="" className='bg-black text-gray-200'>Five</option>
             </select>
            
            <div className="flex flex-row gap-4 justify-around">
              <Typography variant="h6" color="white" className="-mb-3">
                Style
              </Typography>
              <select name="" id="" className='bg-transparent text-gray-200 p-2 border-2 rounded-md border-gray-50'>
                <option value="" className='bg-black text-gray-200'>One</option>
                <option value="" className='bg-black text-gray-200'>Two</option>
                <option value="" className='bg-black text-gray-200'>Three</option>
                <option value="" className='bg-black text-gray-200'>Four</option>
                <option value="" className='bg-black text-gray-200'>Five</option>
              </select>

              <Typography variant="h6" color="white" className="-mb-3">
                Allegiance
              </Typography>
              <select name="" id="" className='bg-transparent text-gray-200 p-2 border-2 rounded-md border-gray-50'>
                <option value="" className='bg-black text-gray-200'>One</option>
                <option value="" className='bg-black text-gray-200'>Two</option>
                <option value="" className='bg-black text-gray-200'>Three</option>
                <option value="" className='bg-black text-gray-200'>Four</option>
                <option value="" className='bg-black text-gray-200'>Five</option>
              </select>
            </div>

            <Typography variant="h6" color="white" className="-mb-3">
              Gender
            </Typography>
            <div className="flex flex-row justify-around">
              <div>
              <input
                  type="radio"
                  name="gender"
                  value="Regular"
                  id="regular"
                  // checked={gender === "Regular"}
                  // onChange={onOptionChange}
                />
                <label htmlFor="regular" className='ml-2'>Male</label>
              </div>
              
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Medium"
                  id="medium"
                  // checked={gender === "Medium"}
                  // onChange={onOptionChange}
                />
                <label htmlFor="medium" className='ml-2'>Female</label>
              </div>
            </div>

            </div>
            <Button className="mt-6 bg-gray-200 text-gray-800" fullWidth>
              Add Star
            </Button>
          </form>
      </Card>
    </div>
  )
}

export default AddStar