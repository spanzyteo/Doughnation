'use client'

import { useAppSelector } from '@/app/store/hooks'
import { projects } from '@/app/utils/projects'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const YourDonation = () => {
  const [selectedOption, setSelectedOption] = useState<string>('')
  const donateState = useAppSelector((state) => state.donate.donateAmount)
  const params = useParams()
  const projectId = params.id

  const selectedProject: any = projects.find(
    (item) => item.id === Number(projectId)
  )

  return (
    <div className="flex flex-col gap-6 lg:w-[50%]">
      <h1 className="font-bold text-3xl">Your Donation</h1>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-primary text-[17px]">Product</h1>
        <h1 className="text-primary text-[17px]">total</h1>
      </div>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-primary text-[17px]">{selectedProject.title}</h1>
        <h1 className="text-primary text-[17px]">{donateState}</h1>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="anonymous"
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="anonymous" className="text-sm text-primary text-[17px]">
          Make me anonymous
        </label>
      </div>
      <div className="flex items-center space-x-2 mt-6">
        <input
          type="radio"
          id="bank-transfer"
          title="bank-transfer"
          name="payment"
          value="bank-transfer"
          checked={selectedOption === 'bank-transfer'}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-5 h-5 rounded-full text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor="bank-transfer" className="text-[17px] text-primary">
          Direct Bank Transfer
        </label>
      </div>
      {selectedOption === 'bank-transfer' && (
        <p className="text-primary text-[17px]">
          You have selected <strong>Bank Transfer</strong>. Please proceed to
          donate
        </p>
      )}
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="check-payment"
          title="check-payment"
          name="payment"
          value="check-payment"
          checked={selectedOption === 'check-payment'}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-5 h-5 rounded-full text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor="bank-transfer" className="text-[17px] text-primary">
          Check Payment
        </label>
      </div>
      {selectedOption === 'check-payment' && (
        <p className="text-primary text-[17px]">
          You have selected <strong>Check Payment</strong>. Please proceed to
          check your payment
        </p>
      )}
      <h1 className="text-primary text-[17px] leading-[33px]">
        Your personal data will be used to process your order, support your
        experience throughout this website and for other purposes described in
        our privacy policy
      </h1>
      <button className='py-2 bg-secondary text-white w-[120px] uppercase font-medium cursor-pointer hover:opacity-75 active:opacity-60 transition-all duration-500 ease-in-out'>Donate</button>
    </div>
  )
}

export default YourDonation
