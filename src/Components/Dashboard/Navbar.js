import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 bg-gradient-to-r from-indigo-500 to-fuchsia-500 flex justify-around font-mono px-2 " >
        <div>
        <h1 style={{color:'white'}} className="pt-2.5 text-2xl font-bold ml-20 font-serif " >LOOMINATE</h1>
        </div>
        <div className='flex'>
        <input style={{width:'40rem'}} type='text' className=" h-9 my-2 mx-12 font-light text-xm rounded-lg" placeholder='Search Anything Here'></input>
        <svg style={{margin:'17'}}  xmlns="http://www.w3.org/2000/svg" className='absolute' viewBox="0 0 50 50" id="search" width="30px" height="30"><path fill="#231F20" d="M20.921 31.898c2.758 0 5.367-.956 7.458-2.704l1.077 1.077-.358.358a1 1 0 0 0 0 1.414l8.257 8.256a.997.997 0 0 0 1.414 0l2.208-2.208a1 1 0 0 0 0-1.414l-8.257-8.256a.999.999 0 0 0-1.414 0l-.436.436-1.073-1.073a11.555 11.555 0 0 0 2.777-7.537c0-3.112-1.212-6.038-3.413-8.239s-5.127-3.413-8.239-3.413-6.038 1.212-8.238 3.413a11.574 11.574 0 0 0-3.413 8.239c0 3.112 1.212 6.038 3.413 8.238a11.563 11.563 0 0 0 8.237 3.413zm17.934 5.487-.794.793-6.843-6.842.794-.793 6.843 6.842zM14.097 13.423c1.823-1.823 4.246-2.827 6.824-2.827s5.002 1.004 6.825 2.827a9.59 9.59 0 0 1 2.827 6.825 9.587 9.587 0 0 1-2.827 6.824c-1.823 1.823-4.247 2.827-6.825 2.827s-5.001-1.004-6.824-2.827a9.589 9.589 0 0 1-2.827-6.824 9.583 9.583 0 0 1 2.827-6.825z"></path></svg>
        </div>
        <div className='flex justify-between justify-items-start m-2 mr-20'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="inbox" width="30px" height="30px"><path d="M61.1 12.6H2.9c-1.6 0-2.9 1.3-2.9 2.9v33c0 1.6 1.3 2.9 2.9 2.9h58.2c1.6 0 2.9-1.3 2.9-2.9v-33c0-1.6-1.3-2.9-2.9-2.9zm-1.2 1.9L32.5 33.4c-.3.2-.8.2-1.1 0L4.1 14.5h55.8zm2.2 34c0 .5-.4 1-1 1H2.9c-.5 0-1-.4-1-1V15.4L30.4 35c.5.3 1.1.5 1.6.5.6 0 1.2-.2 1.6-.5L62 15.4v33.1z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 512 512" id="bell"><path d="M381.7 225.9c0-97.6-52.5-130.8-101.6-138.2 0-.5.1-1 .1-1.6 0-12.3-10.9-22.1-24.2-22.1-13.3 0-23.8 9.8-23.8 22.1 0 .6 0 1.1.1 1.6-49.2 7.5-102 40.8-102 138.4 0 113.8-28.3 126-66.3 158h384c-37.8-32.1-66.3-44.4-66.3-158.2zM107.2 368c8.6-9 16.4-18.4 22.7-31.8 12-25.3 17.4-59.2 17.4-110.2 0-46.4 12.5-80.4 37.1-101.2 22.9-19.3 51.7-23.3 71.8-23.3 20.1 0 48.9 4 71.6 23.3 24.5 20.7 37 54.5 37 100.9 0 83.8 14.9 117.3 40.3 142.3H107.2zM256.2 448c26.8 0 48.8-19.9 51.7-43H204.5c2.8 23.1 24.9 43 51.7 43z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" id="user"><path fill="#000" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z" clip-rule="evenodd"></path></svg>
       </div>
    </div>
  )
}
export default Navbar