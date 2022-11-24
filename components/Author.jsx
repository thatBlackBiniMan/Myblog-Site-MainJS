import React from 'react'
import Image from 'next/image';


const Author = ({author}) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-yellow-400 bg-opacity-17">
     <div className="absolute left-0 right-0 top-14">
     <img src={author.photo.url} 
    unoptimized
    height="87px"
     width="87px"
     className="align-middle rounded-full"
     alt={author.name} />
         </div>
    <h3 className="text-black my-4 text-xl font-bold">
      {author.name}
     </h3>
   <p className="text-black text-lg">{author.bio}</p>
 </div>
  )
}

export default Author