import React from 'react'

const Footer = () => {
  return (
    <>
        <footer style={{backgroundColor:'#181818'}}>
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
        <div style={{fontWeight:'bold',fontSize:'2.2rem',letterSpacing:'0.5px'}}>
                <span style={{fontSize:'1.4rem',fontWeight:'bold',letterSpacing:'0.5px'}}><i>Abhudaya</i></span>
                <span style={{color:'#FF4A17',fontWeight:'bold',fontSize:'2.2rem'}}>E</span>lite
            </div>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="me-4 md:me-6">Teams</a>
                </li>
                <li>
                    <a href="#" class="me-4 md:me-6">Blogs</a>
                </li>
                <li>
                    <a href="#" class="">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a>Abhyudaya Elite</a>. All Rights Reserved.</span>
    </div>
</footer>
    </>
  )
}

export default Footer