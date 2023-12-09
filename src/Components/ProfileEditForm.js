import React from 'react'

const ProfileEditForm = () => {
  return (
    <div className='border-2 border-solid border-gray-300 rounded-md p-5 bg-slate-100 text-gray-700'>
        <h2 className='text-center'>Edit Cena's Profile</h2>
        <form className='mt-10'>

        {/* Name field */}
            <label className='mb-5'>
                Name:
                <input
                    type="text"
                    defaultValue="Cena"
                    // value={wrestler.wrestler_name}
                    className='rounded-md bg-gray-300 w-10/12 text-gray-700 p-2 mt-2 block mb-6' />
            </label>

        {/* Image URL field */}
            <label className='mt-10'>
                Image URL:
                <input
                    type="text"
                    defaultValue="img"
                    // value={wrestler.wrestler_name}
                    className='rounded-md bg-gray-300 w-10/12 text-gray-700 p-2 mt-2 mb-6 block' />
            </label>

        {/* Bio Field */}
            <label className='mt-10'>
                Bio:
                <textarea
                    type="textarea"
                    defaultValue="img"
                    // value={wrestler.wrestler_name}
                    className='rounded-md bg-gray-300 w-10/12 h-20 text-gray-700 p-2 mt-2 mb-6 block' />
            </label>


        {/* Promotion field */}
            <label className='mt-10'>
                Promotion:
               <select name="promotion" id="" className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-6'>
                    <option value="">Promo1</option>
                    <option value="">Promo2</option>
                    <option value="">Promo3</option>
                    <option value="">Promo4</option>
               </select>
            </label>


        {/* Finisher field */}
            <label className='mt-10'>
                Finisher:
               <select name="Finisher" id="" className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-6'>
                    <option value="">Promo1</option>
                    <option value="">Promo2</option>
                    <option value="">Promo3</option>
                    <option value="">Promo4</option>
               </select>
            </label>


        <div className="flex flex-row justify-around mt-5">
            {/* Style field */}
                <label className=''>
                    Style:
                <select name="Style" id="" className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-6'>
                        <option value="">Promo1</option>
                        <option value="">Promo2</option>
                        <option value="">Promo3</option>
                        <option value="">Promo4</option>
                </select>
                </label>

            {/* Allegiance field */}
                <label className=''>
                    Allegiance:
                <select name="Allegiance" id="" className='block w-10/12 rounded-md bg-gray-300 text-gray-700 p-2 mt-2 mb-6'>
                        <option value="">Promo1</option>
                        <option value="">Promo2</option>
                        <option value="">Promo3</option>
                        <option value="">Promo4</option>
                </select>
                </label>
        </div>

        {/* Gender field */}
            <label className='mt-10'>
                <span className='block'>Gender:</span>
                <div className="flex flex-row justify-around">
                    <div className=''>
                        <input type="radio" name="gender" id="" /> Male
                    </div>
                    <div>
                        <input type="radio" name="gender" id="" /> Female
                    </div>
                </div>
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