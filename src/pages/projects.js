import AnimatedTextItem from '@/components/AnimatedTextItem'
import { GithubIcon } from '@/components/IconsItem'
import LayoutItem from '@/components/LayoutItem'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/chatprj.png'
import {motion} from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image)

const FeaturedProject = ({type, title, summary, img, link, github}) =>{
    return(
        <article className='w-full flex items-center justify-between relative rounded-3xl border border-solid rounded-br-2xl border-dark bg-light shadow-2xl p-12 dark:border-light dark:bg-dark
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light'  />

            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg '
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6
            lg:w-full lg:pl-0 lg:pt-6
            '> 
                <span className='text-primary font font-medium text-xl dark:text-primaryDark
                lg:w-full xs:text-base
                '>{type}</span>
                
                <Link href={link} target='_blank' className='hover:underline underline-offset-4 dark:text-light'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>
                    {summary}
                </p>

                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>

                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-2 dark:hover:border-light
                    sm:px-4 sm:text-base
                    '>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, summary, img, link, github}) =>{
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark dark:border-2
        '>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'  />
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg '
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}} 
                priority 
                sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50wv'
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'> 
                <span className='text-primary font font-medium text-xl dark:text-primaryDark'>{type}</span>
                
                <Link href={link} target='_blank' className='hover:underline underline-offset-4 dark:text-light'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>
                    {summary}
                </p>

                <div className=' flex items-center justify-between w-full'>
                    <Link href={link} target='_blank' className=' text-dark text-lg  font-semibold underline underline-offset-2 dark:text-light'>
                        Visit
                    </Link>

                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
return (
        <>
            <Head>
                <title>Gelo | Projects Page</title>
                <meta name='description' content='just a description' />
            </Head>

            <TransitionEffect />
            
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <LayoutItem className='pt-16'>
                    <AnimatedTextItem text='Imagination Trumps Knowledge!'
                    className='mb-20 lg:!text-7xl sm:mb-8 sm!text-6xl xs:!text-4xl'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12 '>
                            <FeaturedProject 
                            title='Chatprj'
                            type='Featured Project'
                            summary='Deployed. Created when I tried to learn MERN stack and WebSockets. Equipped with fully functioning features of commong chat app.'
                            link='https://mern-socket-io.onrender.com'
                            github='https://github.com/JATorres-zxc/MERN-Socket.io'
                            img={project1}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Project 
                            title='Chatprj'
                            type='Basic Project'
                            summary='Deployed. Created when I tried to learn MERN stack and WebSockets. Equipped with fully functioning features of commong chat app.'
                            link='https://mern-socket-io.onrender.com'
                            github='https://github.com/JATorres-zxc/MERN-Socket.io'
                            img={project1}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Project 
                            title='Chatprj'
                            type='Basic Project'
                            summary='Deployed. Created when I tried to learn MERN stack and WebSockets. Equipped with fully functioning features of commong chat app.'
                            link='https://mern-socket-io.onrender.com'
                            github='https://github.com/JATorres-zxc/MERN-Socket.io'
                            img={project1}
                            />
                        </div>

                        <div className='col-span-12 '>
                            <FeaturedProject 
                            title='Chatprj'
                            type='Featured Project'
                            summary='Deployed. Created when I tried to learn MERN stack and WebSockets. Equipped with fully functioning features of commong chat app.'
                            link='https://mern-socket-io.onrender.com'
                            github='https://github.com/JATorres-zxc/MERN-Socket.io'
                            img={project1}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Project 
                            title='Chatprj'
                            type='Basic Project'
                            summary='Deployed. Created when I tried to learn MERN stack and WebSockets. Equipped with fully functioning features of commong chat app.'
                            link='https://mern-socket-io.onrender.com'
                            github='https://github.com/JATorres-zxc/MERN-Socket.io'
                            img={project1}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Project 
                            title='Chatprj'
                            type='Basic Project'
                            summary='Deployed. Created when I tried to learn MERN stack and WebSockets. Equipped with fully functioning features of commong chat app.'
                            link='https://mern-socket-io.onrender.com'
                            github='https://github.com/JATorres-zxc/MERN-Socket.io'
                            img={project1}
                            />
                        </div>
                    </div>
                </LayoutItem>
            </main>
        </>
    )
}

export default projects