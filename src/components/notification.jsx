import React from 'react'

const notification = () => {
  return (
    <div>
        <main className='bg-blue-50 h-full p-4'>
            <div className='container mx-auto p-4 bg-white rounded-xl w-xl'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl font-bold font-plus-jakarta'>Notifications</h1>
                    Mark all as read
                </div>
                <div className='container flex bg-blue-50 rounded-sm p-2 mt-2'>
                    <img className='w-14 h-14 p-1' src="/assets/images/avatar-mark-webber.webp" alt="" />
                    <div>
                        Mark Webber reacted to your recent post My first tournament today!
                        <span>1m ago</span>
                    </div>
                </div>
                <div className='container flex bg-blue-50 rounded-sm p-2 mt-2'>
                    <img className='w-14 h-14 p-1' src="/assets/images/avatar-angela-gray.webp" alt="" />
                    <div>
                        Angela Gray followed you
                        <span>5m ago</span>
                    </div>
                </div>
                <div className='container flex bg-blue-50 rounded-sm p-2 mt-2'>
                    <img className='w-14 h-14 p-1' src="/assets/images/avatar-jacob-thompson.webp" alt="" />
                    <div>
                        Jacob Thomson has joined your group Chess Club
                        <span>1day ago</span>
                    </div>
                </div>
                <div className='container flex bg-blue-50 rounded-sm p-2 mt-2'>
                    <img className='w-14 h-14 p-1' src="/assets/images/avatar-rizky-hasanuddin.webp" alt="" />
                    <div>
                        Rizky Hassanuddin sent you a provate message
                        <span>5days ago</span>
                    </div>
                </div>
                <div className='container flex justify-between bg-blue-50 rounded-sm p-2 mt-2'>
                    <img className='w-14 h-14 p-1' src="/assets/images/avatar-kimberly-smith.webp" alt="" />
                    <div>
                        Kimberly Smith commented on your picture
                        <span>1week ago</span>
                    </div>
                    <img className='w-12 h-12 p-2' src="/assets/images/image-chess.webp" alt="" />
                </div>
                <div className='container flex bg-blue-50 rounded-sm p-2 mt-2'>
                    <img className='w-14 h-14 p-1' src="/assets/images/avatar-nathan-peterson.webp" alt="" />
                    <div>
                        Nathan Peterson reacted to your recent post 5 end-game strategies to Increase your win rate
                        <span>2weeks ago</span>
                    </div>
                </div>
                <div className='container flex bg-blue-50 rounded-sm p-2 mt-2'>
                    <img className='w-14 h-14 p-1' src="/assets/images/avatar-anna-kim.webp" alt="" />
                    <div>
                        Anna Kim left the group Chess Club
                        <span>2weeks ago</span>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default notification