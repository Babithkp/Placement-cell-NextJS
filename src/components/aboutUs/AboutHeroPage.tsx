import Image from 'next/image'
import React from 'react'
import image from '../../../public/Images/gimage.png'
import { Button } from '../ui/button'

export default function AboutHeroPage() {
  return (
    <div className='flex h-[85vh]  items-center justify-center'>
        <div className='flex flex-col gap-4'>
            <h2 className='text-4xl font-semibold'>Find Your Dream Job with Eastpoint Placement Cell</h2>
            <p className='text-lg'>Discover a wide range of job opportunities and get the support you need for career growth.</p>
            <Button className='bg-[#00448E] w-fit'>Get started</Button>
        </div>
        <div className='w-[50%]'>
            <Image src={image} alt='hero Image' />
        </div>
    </div>
  )
}
