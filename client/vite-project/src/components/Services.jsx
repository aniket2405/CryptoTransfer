import React from 'react'
import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'

const ServiceCard = ({
  color,
  title,
  icon,
  subtitle,
}) => (
  <div className='flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h3 className='mt-2 text-white text-lg'>
        {title}
      </h3>
      <p className='mt-1 text-white text-sm md:w-9/12'>
        {subtitle}
      </p>
    </div>
  </div>
)

const Services = () => (
  <div className='flex w-full justify-center items-center gradient-bg-services'>
    <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
      <div className='flex-1 flex flex-col justify-start items-start'>
        <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient '>
          Services that are
          <br />
          offered
        </h1>
        <p className='text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base'>
          Best place to buy and sell your crypto
          assets
        </p>
      </div>

      <div className='flex-1 flex flex-col justify-start items-center'>
        <ServiceCard
          color='bg-[#2952E3]'
          title='Guranteed security'
          icon={
            <BsShieldFillCheck
              fontSize={21}
              className='text-white'
            />
          }
          subtitle='We always maintain privacy and the quality of our products. Decentralized network secures the payment.'
        />
        <ServiceCard
          color='bg-[#8945F8]'
          title='Best exchange rates'
          icon={
            <BiSearchAlt
              fontSize={21}
              className='text-white'
            />
          }
          subtitle='You will find the best exchange rates here, according to industry standards, without any complaints.'
        />
        <ServiceCard
          color='bg-[#F85550]'
          title='Fastest transactions'
          icon={
            <RiHeart2Fill
              fontSize={21}
              className='text-white'
            />
          }
          subtitle='The fastest transactions are guranteed with the incorporation of ethereum protocol.'
        />
      </div>
    </div>
  </div>
)

export default Services
