import React from 'react'

 const Sidebar = () => {
  return (
    <div style={{flex:.2}} className='mt-20 border-2 border-rose-500'>
        <div style={{backgroundColor: 'white'}} className='flex flex-col  ml-20 mt-5 p-5 mb-5 rounded-md'>
            <div className='flex mb-3'>
                <img className='w-4 mr-3' src='https://www.svgrepo.com/show/483341/home.svg' />
                <h1 className='text-xl uppercase'>My Feed</h1>
            </div>
            <div className='flex mb-3'>
                <img className='w-4 mr-3' src='https://www.svgrepo.com/show/488260/leaderboard.svg' />
                <h1 className='text-xl uppercase'>Leaderboard</h1>
            </div>
            <div className='flex mb-3'>
                <img className='w-4 mr-3' src='https://www.svgrepo.com/show/512729/profile-round-1342.svg' />
                <h1 className='text-xl uppercase'>My Profile</h1>
            </div>
        </div>
        <div style={{backgroundColor:'white'}} >

        </div>
        </div>
    
  )
}

export default Sidebar