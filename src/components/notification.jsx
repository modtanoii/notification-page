import React from 'react'

const notification = () => {
  return (
    <div>
        <main className='bg-gray-100 h-full md:p-2 font-jakarta'>
            <div className='container mx-auto p-4 md:p-8 bg-white rounded-xl md:w-2xl'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-[20px] font-bold'>Notifications</h1>
                        <div className='rounded-md bg-blue-900 px-3 font-bold text-white'>3</div>
                    </div>
                    <p className='text-[15px]'>Mark all as read</p>
                </div>
                <div className='container flex bg-gray-100 rounded-sm p-3 mt-4 md:mt-8'>
                    <img className='w-12 h-12 mr-4' src="/assets/images/avatar-mark-webber.webp" alt="" />
                    <div className='text-[15px]'>
                        <span className='font-bold' id='name'>Mark Webber </span>reacted to your recent post <span className='font-bold'>My first tournament today!</span>
                        <p className='text-gray-400'>1m ago</p>
                    </div>
                </div>
                <div className='container flex bg-gray-100 rounded-sm p-3 mt-3'>
                    <img className='w-12 h-12 mr-4' src="/assets/images/avatar-angela-gray.webp" alt="" />
                    <div className='text-[15px]'>
                        <span className='font-bold' id='name'>Angela Gray</span> followed you
                        <p className='text-gray-400'>5m ago</p>
                    </div>
                </div>
                <div className='container flex bg-gray-100 rounded-sm p-3 mt-3'>
                    <img className='w-12 h-12 mr-4' src="/assets/images/avatar-jacob-thompson.webp" alt="" />
                    <div className='text-[15px]'>
                        <span className='font-bold' id='name'>Jacob Thomson</span> has joined your group Chess Club
                        <p className='text-gray-400'>1day ago</p>
                    </div>
                </div>
                <div className='container flex bg-gray-100 rounded-sm p-3 mt-3'>
                    <img className='w-12 h-12 mr-4' src="/assets/images/avatar-rizky-hasanuddin.webp" alt="" />
                    <div className='text-[15px]'>
                        <span className='font-bold' id='name'>Rizky Hassanuddin</span> sent you a provate message
                        <p className='text-gray-400'>5days ago</p>
                        <div className='container bg-blue-100 rounded-md p-4 my-2'>
                            Hello, thanks for setting up the Chess club. I've been a member for a  few weeks now and I'm already having lots of fun and improving my game.
                        </div>
                    </div>
                </div>
                <div className='container flex bg-gray-100 rounded-sm p-3 mt-3'>
                    <img className='w-12 h-12 mr-4' src="/assets/images/avatar-kimberly-smith.webp" alt="" />
                    <div className='text-[15px]'>
                        <span className='font-bold' id='name'>Kimberly Smith</span> commented on your picture
                        <p className='text-gray-400'>1week ago</p>
                    </div>
                    <img className='w-12 h-12 p-2' src="/assets/images/image-chess.webp" alt="" />
                </div>
                <div className='container flex bg-gray-100 rounded-sm p-3 mt-3'>
                    <img className='w-12 h-12 mr-4' src="/assets/images/avatar-nathan-peterson.webp" alt="" />
                    <div className='text-[15px]'>
                        <span className='font-bold' id='name'>Nathan Peterson</span> reacted to your recent post 5 end-game strategies to Increase your win rate
                        <p className='text-gray-400'>2weeks ago</p>
                    </div>
                </div>
                <div className='container flex bg-gray-100 rounded-sm p-3 mt-3'>
                    <img className='w-12 h-12 mr-4' src="/assets/images/avatar-anna-kim.webp" alt="" />
                    <div className='text-[15px]'>
                        <span className='font-bold' id='name'>Anna Kim</span> left the group Chess Club
                        <p className='text-gray-400'>2weeks ago</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default notification