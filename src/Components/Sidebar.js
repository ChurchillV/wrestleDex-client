import React, {useState, useEffect} from 'react'
import { BrowserRouter as  Router, Link } from 'react-router-dom';

// Icons 
import {
  BsPlus,
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
  BsSearch,
  BsPeopleFill,
  BsDashSquareDotted
} from 'react-icons/bs'

import { FaCog } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion'

// Sidebar data 
const data = [
    {
      name: 'Menu',
      items: [
        {
          title: 'All Stars',
          icon: BsPeopleFill,
          url : '/'
        },
        {
          title: 'Search',
          icon: BsSearch,
          url : '/search'
        },
      ]
    },
    {
      name: 'Manage',
      items: [
        {
          title: 'Contribute',
          icon: BsPlus,
          url : '/add'
        },
        {
          title: 'Delete',
          icon: BsDashSquareDotted,
          url : '/delete'
        },
        {
          title: 'Update',
          icon: FaCog,
          url : '/update'
        }
      ]
    },
  ]



const Sidebar = () => {

    // SideBar animation Logic
    const [active, setActive] = useState(false)
    const controls = useAnimation()
    const controlText = useAnimation()
    const controlTitleText = useAnimation()
    
    const showMore = () => {

      controls.start({
        width: '250px',
        transition: { duration: 0.001 }
      })
      controlText.start({
        opacity: 1,
        display: 'block',
        transition: {delay:0.3}
      })
      controlTitleText.start({
        opacity: 1,
        transition: {delay:0.3}
      })
    
      setActive(true)
    }
    
    const showLess = () => {
      controls.start({
        width: '55px',
        transition: { duration: 0.001 }
      })
    
      controlText.start({
        opacity: 0,
        display: 'none',
      })
    
      controlTitleText.start({
        opacity: 0,
      })
    
      setActive(false)
    
    }
    
    useEffect(() => {
      showMore()
    },[])


  return (
        <div>
            <motion.div animate={controls} className='max-w-[250px]  animate duration-300 border-r bg-black border-gray-700 relative flex flex-col py-10 min-h-screen group' >

                {active && <BsFillArrowLeftSquareFill onClick={showLess} className='absolute hidden text-2xl text-white cursor-pointer -right-4 top-10 group-hover:block ' />}
                {!active && <BsFillArrowRightSquareFill onClick={showMore} className='absolute text-2xl text-white cursor-pointer -right-4 top-10' />}

                <div className={`${active && 'border-gray-800 border shadow-gray-800/60 shadow-lg rounded-lg  px-4'}   max-w-[220px] h-[120px] flex justify-center mx-2  flex-col mb-4`} >

                    <motion.p animate={controlText} className='font-thin text-white text-md' >
                        Welcome to the WrestleDex
                    </motion.p>

                    <Link to="/add">
                      <button className='flex items-center justify-center w-full py-2 my-2 font-bold  bg-gray-800 rounded-lg text-white' >
                          <BsPlus className='text-2xl' />

                          <motion.p animate={controlText}>
                          Contribute
                          </motion.p>

                      </button>
                    </Link>
                </div>

                <div className='grow'>
                {data.map((group, index) => (
                    <div key={index} className='my-2' >
                        <motion.p animate={controlTitleText} className='mb-2 ml-4 text-sm font-bold text-gray-500' >{group.name}</motion.p>

                        {group.items.map((item, index2) => (
                            <Link to={item.url}>
                                <div key={index2} className='flex px-4 py-1 cursor-pointer hover:bg-gray-800 rounded-md' >
                                <item.icon className='text-lg text-gray-500' />
                                <motion.p animate={controlText} className='ml-4 text-sm font-bold text-gray-400' > {item.title}</motion.p>
                                </div>
                            </Link>

                        ))}
                    </div>
                ))}
                </div>
            </motion.div>
        </div>
  )
}

export default Sidebar