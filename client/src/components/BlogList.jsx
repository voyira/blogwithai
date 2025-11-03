import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'

const BlogList = () => {
    const [menu, setMenu] = useState('All')

    return (
        <div>
            <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
                {blogCategories.map((item) => (
                    <div key={item} className='relative'>

                    </div>
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
                {/* ---blog cards------ */}
            </div>
        </div>



    );
};
