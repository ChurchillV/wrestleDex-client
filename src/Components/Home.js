import React, { useState, useEffect} from 'react'

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:2099/wrestlers'); 
            const result = await response.json();
            console.log('API Response:', result);
            setData(result);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
        };

        fetchData();
    }, []);

  return (
    <div className='text-white items-center px-10'>
        <div>
      <h1 className="text-2xl font-bold mb-4">Home Page - Display Data</h1>

      {loading ? (
        <p className='text-white'>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map(item => (
           <div key={item.wrestler_id} class="card">
           <img src={item.wrestler_img} alt="#" class="w-full h-32 sm:h-48 object-contain bg-slate-600" />
           <div class="m-4">
               <span class="text-bold text-gray-200">{item.wrestler_name}</span>
               <span class="block text-gray-400 text-sm">{item.promotion_name}</span>
           </div>
           {
                item.wrestler_allegiance == 'F' ?
                    <div class="face-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                        <span>{item.allegiance_name}</span>
                    </div>
                    :
                    <div class="heel-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" style={{fill : '#eeeeee'}} class="w-5 h-5 inline mr-2">
                            <title>Evil Smile Square Emoticon Face SVG icon</title>
                            <g><g><path d="M467.8,616.3c-84.7,0-158.3-9.9-219.1-23.4c-106.6-23.6-187.2-60-238.7-88.4c22.5,82.1,65.8,159.5,130.1,223.9c197.9,197.9,519.9,197.8,717.8,0C924.1,662.2,968.1,582,990,497.3C789.2,587.1,612.3,616.3,467.8,616.3z M742,741.7c-133.8,98.8-351.5,98.8-485.3,0c-43.5-32.2-72.8-70.9-88-111.9c34.8,14.2,89.3,32.4,161.4,44.1c41.1,6.7,90.9,11.7,148.1,11.7c97.7,0,217.3-14.6,353.1-59.5C816.5,668.5,786.8,708.6,742,741.7z"></path><path d="M674.5,361.5c38.7,0,70.1-31.4,70.1-70.2c0-19-7.6-36.2-19.8-48.8l58.6-58.6c13.9-13.9,13.9-36.4,0-50.3c-13.9-13.9-36.5-13.9-50.3,0l-107,106.9c-0.2,0.2-0.3,0.4-0.4,0.5c-13.1,12.7-21.3,30.6-21.3,50.3C604.4,330.1,635.8,361.5,674.5,361.5z"></path><path d="M284.5,242.5c-12.3,12.6-19.8,29.8-19.8,48.8c0,38.8,31.4,70.2,70.1,70.2c38.7,0,70.1-31.4,70.1-70.2c0-19.7-8.2-37.5-21.3-50.3c-0.2-0.2-0.3-0.4-0.4-0.5L276.3,133.6c-13.9-13.9-36.5-13.9-50.3,0c-13.9,13.9-13.9,36.4,0,50.3L284.5,242.5z"></path>
                            </g></g>
                        </svg>
                        <span>{item.allegiance_name}</span>
                    </div>
            }
       </div>
          ))}
        </div>
      )}
    </div>
    </div>
  )
}

export default Home