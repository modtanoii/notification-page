import React from 'react'

const notification = () => {

  return (
    <div>
        <main className='bg-gray-100 md:p-2 font-jakarta text-gray-500'>
            <div className='container mx-auto p-4 md:p-8 bg-white rounded-xl md:w-[730px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl md:text-2xl font-bold text-black'>Notifications</h1>
                        <div className='rounded-md bg-blue-900 py-[2px] px-[12px] font-bold text-sm text-white'>3</div>
                    </div>
                    <p className='text-sm md:text-md hover:text-blue-900 cursor-pointer'>Mark all as read</p>
                </div>
                <div className='container flex md:tracking-wide bg-blue-50 rounded-sm p-4 mt-4 md:mt-8'>
                    <img className='w-10 h-10 md:w-12 md:h-12 mr-4' src="/assets/images/avatar-mark-webber.webp" alt="" />
                    <div className='text-sm md:text-[16px]'>
                        <span className='font-bold cursor-pointer hover:text-blue-900 text-black' id='name'>Mark Webber </span>reacted to your recent post <span className='font-bold cursor-pointer hover:text-blue-900'>My first tournament today!</span> <span className="w-2 h-2 bg-red-500 rounded-full inline-block"></span>
                        <p className='text-gray-400'>1m ago</p>
                    </div>
                </div>
                <div className='container flex md:tracking-wide bg-blue-50 rounded-sm p-4 mt-3'>
                    <img className='w-10 h-10 md:w-12 md:h-12 mr-4' src="/assets/images/avatar-angela-gray.webp" alt="" />
                    <div className='text-sm md:text-[16px]'>
                        <span className='font-bold cursor-pointer hover:text-blue-900 text-black' id='name'>Angela Gray</span> followed you <span className="w-2 h-2 bg-red-500 rounded-full inline-block"></span>
                        <p className='text-gray-400'>5m ago</p>
                    </div>
                </div>
                <div className='container flex md:tracking-wide bg-blue-50 rounded-sm p-4 mt-3'>
                    <img className='w-10 h-10 md:w-12 md:h-12 mr-4' src="/assets/images/avatar-jacob-thompson.webp" alt="" />
                    <div className='text-sm md:text-[16px] mr-4'>
                        <span className='font-bold cursor-pointer hover:text-blue-900 text-black' id='name'>Jacob Thomson</span> has joined your group <span className='font-bold cursor-pointer hover:text-blue-900'>Chess Club</span> <span className="w-2 h-2 bg-red-500 rounded-full inline-block"></span>
                        <p className='text-gray-400'>1day ago</p>
                    </div>
                </div>
                <div className='container flex md:tracking-wide rounded-sm p-4 mt-3'>
                    <img className='w-10 h-10 md:w-12 md:h-12 mr-4' src="/assets/images/avatar-rizky-hasanuddin.webp" alt="" />
                    <div className='text-sm md:text-[16px]'>
                        <span className='font-bold cursor-pointer hover:text-blue-900 text-black' id='name'>Rizky Hassanuddin</span> sent you a private message
                        <p className='text-gray-400'>5days ago</p>
                        <div className='container border border-gray-200 hover:bg-blue-100 rounded-md p-4 my-2 cursor-pointer'>
                            Hello, thanks for setting up the Chess club. I've been a member for a  few weeks now and I'm already having lots of fun and improving my game.
                        </div>
                    </div>
                </div>
                <div className='container flex md:tracking-wide justify-between rounded-sm p-4 mt-3'>
                    <img className='w-10 h-10 md:w-12 md:h-12 mr-4' src="/assets/images/avatar-kimberly-smith.webp" alt="" />
                    <div className='text-sm md:text-[16px] md:w-full mr-4'>
                        <span className='font-bold cursor-pointer hover:text-blue-900 text-black' id='name'>Kimberly Smith</span> commented on your picture
                        <p className='text-gray-400'>1week ago</p>
                    </div>
                    <img className='w-10 h-10 cursor-pointer hover:outline-2 hover:outline-blue-200 hover:rounded-md' src="/assets/images/image-chess.webp" alt="" />
                </div>
                <div className='container flex md:tracking-wide rounded-sm p-4 mt-3'>
                    <img className='w-10 h-10 md:w-12 md:h-12 mr-4' src="/assets/images/avatar-nathan-peterson.webp" alt="" />
                    <div className='text-sm md:text-[16px]'>
                        <span className='font-bold cursor-pointer hover:text-blue-900 text-black' id='name'>Nathan Peterson</span> reacted to your recent post <span className='font-bold cursor-pointer hover:text-blue-900'>5 end-game strategies to increase your win rate</span>
                        <p className='text-gray-400'>2weeks ago</p>
                    </div>
                </div>
                <div className='container flex md:tracking-wide rounded-sm p-4 mt-3'>
                    <img className='w-10 h-10 md:w-12 md:h-12 mr-4' src="/assets/images/avatar-anna-kim.webp" alt="" />
                    <div className='text-sm md:text-[16px]'>
                        <span className='font-bold cursor-pointer hover:text-blue-900 text-black' id='name'>Anna Kim</span> left the group <span className='font-bold cursor-pointer hover:text-blue-900'>Chess Club</span>
                        <p className='text-gray-400'>2weeks ago</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default notification