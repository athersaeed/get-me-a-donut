import React from 'react'

const Username = async ({ params }) => {
  const { username } = await params
  return (
    <>
      {/* cover photo */}
      <div className='cover w-full '>
        <img className='w-full h-96' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/11441202/a1e9776ffd0b477da1756230126062f3/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/3.jpg?token-hash=-tEPQoTi1fjvts_ncaGi3PQdfWWyOSyoZrUy_XYS9Q4%3D&token-time=1770163200" alt="cover photo" />
      </div>
      {/* profile photo */}
      <div className='profile flex items-center justify-center gap-4 mx-auto'>
        <img className='w-16 h-16 object-cover rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqDy87k0kwsM5_7DqsQwlquEj47Fsu7u7F3Q&s" alt="profile photo" />
        <div className='flex flex-col'>
          <h1 className='font-bold text-2xl'>{username}</h1>
          <p className='text-sm text-gray-500'>creating cats since 2022</p>
          <p className='text-sm text-gray-500'>100 followers <span className='font-bold text-lg '>.</span> 100 following</p>
        </div>
      </div>
      {/* <div className='flex gap-2'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all'>Follow</button>
          <button className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all'>Message</button>
        </div> */}


      <div className="bg-white text-black h-1 opacity-5 my-6"></div>


      <div className='payment flex gap-4 w-[80%] mx-auto h-100'>
        {/* <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all'>Pay</button> */}
        <div className='supporters w-1/2 bg-slate-900 p-4 rounded-lg'>
          {/* Show list of all the supporters asa a leaderboard */}
          <h2 className='text-2xl font-bold text-white'>Supporters</h2>
          <ul className='text-white mx-5 text-lg'>
            <li className='my-2 flex gap-2'>
              <img className='w-6 object-cover rounded-xl' src="avatar.gif" alt="supporter icon"/>
              Supporter donated <span className='font-bold text-lg'>$###</span> with a message "i love you bro lots of love "</li>
            <li className='my-2 flex gap-2'>
              <img className='w-6 object-cover rounded-xl' src="avatar.gif" alt="supporter icon"/>
              Supporter donated <span className='font-bold text-lg'>$###</span> with a message "i love you bro lots of love "</li>
            <li className='my-2 flex gap-2'>
              <img className='w-6 object-cover rounded-xl' src="avatar.gif" alt="supporter icon"/>
              Supporter donated <span className='font-bold text-lg'>$###</span> with a message "i love you bro lots of love "</li>
            <li className='my-2 flex gap-2'>
              <img className='w-6 object-cover rounded-xl' src="avatar.gif" alt="supporter icon"/>
              Supporter donated <span className='font-bold text-lg'>$###</span> with a message "i love you bro lots of love "</li>
            <li className='my-2 flex gap-2'>
              <img className='w-6 object-cover rounded-xl' src="avatar.gif" alt="supporter icon"/>
              Supporter donated <span className='font-bold text-lg'>$###</span> with a message "i love you bro lots of love "</li>
          </ul>
        </div>

        <div className='make-payment w-1/2 bg-slate-900 p-4 rounded-lg'>
          <h2 className='text-2xl font-bold text-white'>Make Payment</h2>
          <form action="">
            <input type="text" placeholder='Enter your name' className='w-full p-2 rounded-lg my-2 border-2 border-gray-300' />
            <input type="text" placeholder='Enter your amount' className='w-full p-2 rounded-lg my-2 border-2 border-gray-300' />
            {/* <input type="text" placeholder='Enter your message' className='w-full p-2 rounded-lg my-2 border-2 border-gray-300' /> */}
            <button type='submit' className='w-full bg-blue-500 text-white px-4 py-2 my-2 rounded-lg hover:bg-blue-600 transition-all'>Pay</button>
          </form>
          <div className='flex gap-2'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all my-2 mr-5'>$1</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all my-2 mr-5'>$2</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all my-2 mr-5'>$3</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default Username
