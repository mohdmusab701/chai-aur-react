import React from 'react'

function Card({user}) {
    console.log(user)
    return (
<div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHV2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    alt="Aviator"
    className="h-full w-full rounded-md object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{user}</h1>

    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>

    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile
    </button>
  </div>
</div>
    )
}

export default Card
