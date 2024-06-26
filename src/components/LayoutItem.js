import React from 'react'

const LayoutItem = ({children, className=''}) => {
return (
    <div className={`${className} w-full h-full inline-block z-0 bg-light py-24 px-32 dark:bg-dark
    xl:p-24 lg:p-16 md:p-12 sm:p-8
    `}>
        {children}
    </div>
)
}

export default LayoutItem