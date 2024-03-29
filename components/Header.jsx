import React, {useContext, useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services';


const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border w-full inline-block border-yellow-400 py-8 p-2 rounded-lg mt-5 px-4">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-mono font-bold text-4xl text-yellow-500">
              VILLAGE MEN
            </span>
          </Link>
        </div>
       <div className="hidden md:float-left md:contents">
        {categories.map((category)=>(
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="md:float-right mt-2 align-middle text-yellow-400 ml-4 font-semibold cursor-pointer hover:bg-yellow-400 hover:text-white">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
      </div>

    </div>
  )
}

export default Header