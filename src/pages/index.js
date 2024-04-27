import LayoutItem from '@/components/LayoutItem'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedTextItem from '@/components/AnimatedTextItem'
import Link from 'next/link'
import { LinkArrow } from '@/components/IconsItem'
import HireMeItem from '@/components/HireMeItem'


export default function Home() {
    return (
        <>
        <Head>
            <title>Gelo | Portfolio</title>
            <meta name="description" content="s" />

        </Head>
        <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
            <LayoutItem className='pt-0'>
                <div className="flex items-center justify-between w-full">
                    <div className='w-1/2'>
                        <Image src={profilePic} className='w-full h-auto' 
                        priority 
                        sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw'
                        />
                    </div>
                    <div className='w-1/2 flex flex-col items-center self-center'>
                        
                        <AnimatedTextItem text='Turning Vision Into Reality With Code And Design.' className='!text-left !text-6xl'/>
                        <p className='my-4 text-base font-medium'>
                            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects, showcasing my expertise in web development.
                        </p>
                        <div className='flex items-center self-start mt-2'>
                            <Link href='/dummy.pdf' target='_blank'
                            className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent
                            hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:border-light dark:hover:text-light'
                            download={true}
                            >Resume <LinkArrow className={'w-6 ml-1'}/>
                            </Link>

                            <Link href='mailto:jbtorres6@up.edu.ph' target='_blank'
                            className='ml-4 text-lg font-medium capitalize text-dark underline underline-offset-8 dark:text-light'
                            
                            >Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            </LayoutItem>

            <HireMeItem />
        </main>
        </>
    )
}
// 1:06:
