import { Country, State } from 'country-state-city'
import React, { useEffect, useState } from 'react'
import Select, { SingleValue } from 'react-select'


type Option = {
  value: string
  label: string
}

const BillingSection = () => {
  const [countryValue, setCountryValue] = useState<Option | null>(null)
  const [stateOptions, setStateOptions] = useState<Option[]>([])
  const [stateValue, setStateValue] = useState<Option | null>(null)
  const [isStateDisabled, setIsStateDisabled] = useState(true) // Disable state dropdown initially
  const [countryOptions, setCountryOptions] = useState<Option[]>([])
  // Fetch country list on the client side
  useEffect(() => {
    setCountryOptions(
      Country.getAllCountries().map((country) => ({
        value: country.isoCode,
        label: country.name,
      }))
    )
  }, [])

  // Fetch state list whenever a country is selected
  useEffect(() => {
    if (countryValue) {
      const states = State.getStatesOfCountry(countryValue.value).map(
        (state) => ({
          value: state.isoCode,
          label: state.name,
        })
      )

      setStateOptions(
        states.length > 0
          ? states
          : [{ value: 'no-states', label: 'No states available' }]
      )
      setIsStateDisabled(states.length === 0)
    } else {
      setStateOptions([])
      setIsStateDisabled(true)
    }
  }, [countryValue])
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-3xl">Billing details</h1>
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="flex flex-col gap-4">
          <label htmlFor="First Name" className="text-primary text-[17px]">
            First Name *
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="bg-white border border-[#E9E9EE] w-full px-4 py-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="Last Name" className="text-primary text-[17px]">
            Last Name *
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="bg-white border border-[#E9E9EE] w-full px-4 py-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="Last Name" className="text-primary text-[17px]">
          Company Name (optional)
        </label>
        <input
          type="text"
          placeholder="Company Name"
          className="bg-white border border-[#E9E9EE] w-full px-4 py-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="country" className="text-primary text-[17px]">
          Country / Region *
        </label>
        <Select
          name="country"
          options={countryOptions}
          value={countryValue}
          onChange={setCountryValue}
          placeholder="Select a country"
          className="bg-white w-full focus:outline-none"
          // isDisabled={options.length === 0}
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="Address" className="text-primary text-[17px]">
          Street address *
        </label>
        <input
          type="text"
          name="address"
          placeholder="House number and street name"
          className="bg-white border border-[#E9E9EE] w-full px-4 py-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="Town" className="text-primary text-[17px]">
          Town / City *
        </label>
        <input
          type="text"
          name="town"
          placeholder="Town / City"
          className="bg-white border border-[#E9E9EE] w-full px-4 py-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="state" className="text-primary text-[17px]">
          State *
        </label>
        <Select
          options={stateOptions}
          value={stateValue}
          onChange={setStateValue}
          placeholder="Select a state"
          className="bg-white w-full focus:outline-none"
          isDisabled={isStateDisabled}
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="Phone" className="text-primary text-[17px]">
          Phone *
        </label>
        <input
          type="phone"
          name="town"
          placeholder="Phone"
          className="bg-white border border-[#E9E9EE] w-full px-4 py-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="email" className="text-primary text-[17px]">
          Email address *
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-white border border-[#E9E9EE] w-full px-4 py-2 focus:outline-none"
        />
      </div>
      <h1 className="font-bold text-3xl">Additional Information</h1>
      <div className="flex flex-col gap-4">
        <label htmlFor="notes" className="text-primary text-[17px]">
          Donation notes (optional)
        </label>
        <textarea
          name="notes"
          placeholder="notes about your donation"
          className="bg-white border border-[#E9E9EE] w-full px-4 py-2 focus:outline-none"
          rows={3}
        />
      </div>
    </div>
  )
}

export default BillingSection
