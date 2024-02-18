import AboutHeroPage from '@/components/aboutUs/AboutHeroPage'
import AboutOurTeam from '@/components/aboutUs/AboutOurTeam'
import AboutQuestions from '@/components/aboutUs/AboutQuestions'
import AboutStatics from '@/components/aboutUs/AboutStatics'
import AboutUsWords from '@/components/aboutUs/AboutUsWords'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col items-center'>
        <div className='w-[90%] flex justify-center flex-col'>
            <AboutHeroPage/>
            <AboutUsWords/>
            <AboutOurTeam/>
            <AboutStatics/>
            <AboutQuestions/>
        </div>
    </div>
  )
}
