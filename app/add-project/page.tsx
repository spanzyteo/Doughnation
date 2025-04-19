'use client'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const AddProject = () => {
  const [formData, setFormData] = useState({
    applicationType: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    title: '',
    image: '',
    category: '',
    fundsToRaise: 0,
    description: '',
    shortStory: '',
    reasonForSupport: '',
    agreeToTerms: false,
  })

  const [image, setImage] = useState<string | null>(null)
  const [idCard, setIdCard] = useState<string | null>(null)
  const [recommendationLetter, setRecommendationLetter] = useState<
    string | null
  >(null)

  const onDropImage = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    const reader = new FileReader()
    reader.onload = () => setImage(reader.result as string)
    reader.readAsDataURL(file)
  }, [])

  const onDropIdCard = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    const reader = new FileReader()
    reader.onload = () => setIdCard(reader.result as string)
    reader.readAsDataURL(file)
  }, [])

  const onDropRecommendation = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    const reader = new FileReader()
    reader.onload = () => setRecommendationLetter(reader.result as string)
    reader.readAsDataURL(file)
  }, [])

  const {
    getRootProps: getImageRootProps,
    getInputProps: getImageInputProps,
    isDragActive: isImageDragActive,
  } = useDropzone({ onDrop: onDropImage, accept: { 'image/*': [] } })

  const {
    getRootProps: getIdCardRootProps,
    getInputProps: getIdCardInputProps,
  } = useDropzone({ onDrop: onDropIdCard, accept: { 'image/*': [] } })

  const {
    getRootProps: getRecommendationRootProps,
    getInputProps: getRecommendationInputProps,
  } = useDropzone({
    onDrop: onDropRecommendation,
    accept: { 'application/pdf': [], 'image/*': [] },
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target
    const isCheckbox = (target: EventTarget): target is HTMLInputElement =>
      (target as HTMLInputElement).checked !== undefined

    setFormData({
      ...formData,
      [name]:
        type === 'checkbox' && isCheckbox(e.target)
          ? e.target.checked
          : name === 'fundsToRaise'
          ? Number(value)
          : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const submissionData = {
      ...formData,
      image,
      idCard,
      recommendationLetter,
    }
    console.log('Submitted Data:', submissionData)
    // Send to backend or API
  }

  const isScholarship = formData.applicationType === 'Scholarship'
  const isProject = formData.applicationType === 'Project Funding'

  return (
    <div className="flex flex-col mt-[90px]">
      <div className="w-full relative">
        <img
          src="/page-bg.jpg"
          alt="background"
          className="max-h-[338px] w-full"
        />
        <h1 className="absolute top-8 lg:top-1/2 lg:left-24 left-6 font-bold text-white text-2xl md:text-5xl">
          Add New Project
        </h1>
      </div>

      <div className="flex flex-col bg-[#F7F7F9] px-5 md:px-10 xl:px-28 py-20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Application Type */}
          <div className="flex flex-col gap-2">
            <label htmlFor="applicationType" className="font-semibold">
              Application Type
            </label>
            <select
              title="applicationType"
              name="applicationType"
              value={formData.applicationType}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-md bg-white focus:outline-none"
              required
            >
              <option value="">Select Type</option>
              <option value="Project Funding">Project Funding</option>
              <option value="Scholarship">Scholarship</option>
            </select>
          </div>

          {/* Common Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="p-4 border border-gray-300 rounded-md bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-4 border border-gray-300 rounded-md bg-white"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="p-4 border border-gray-300 rounded-md bg-white"
            />
          </div>

          {/* Conditional Project Funding Fields */}
          {isProject && (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Title */}
                <input
                  type="text"
                  name="title"
                  placeholder="Project Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="p-4 border border-gray-300 rounded-md bg-white"
                  required
                />

                {/* Category */}
                <select
                  title="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="p-4 border border-gray-300 rounded-md bg-white"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Education">Education</option>
                  <option value="Medical">Medical</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Design">Design</option>
                  <option value="Technology">Technology</option>
                  <option value="Videos">Videos</option>
                </select>
              </div>

              {/* Image Upload */}
              <div>
                <label className="font-semibold">Project Image</label>
                <div
                  {...getImageRootProps()}
                  className="mt-2 border border-dashed border-gray-400 p-6 text-center cursor-pointer bg-[#F9F9F6] h-[150px] flex items-center justify-center rounded-[12px]"
                >
                  <input {...getImageInputProps()} />
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded"
                      className="w-full h-32 object-cover rounded-md"
                    />
                  ) : (
                    <p className="text-gray-500">
                      {isImageDragActive
                        ? 'Drop the image here...'
                        : 'Click or drag to upload project image'}
                    </p>
                  )}
                </div>
              </div>

              {/* Description & Short Story */}
              <textarea
                name="description"
                placeholder="Project Description..."
                value={formData.description}
                onChange={handleChange}
                className="p-4 border border-gray-300 rounded-md bg-white"
                rows={3}
              />
              <textarea
                name="shortStory"
                placeholder="Short Story..."
                value={formData.shortStory}
                onChange={handleChange}
                className="p-4 border border-gray-300 rounded-md bg-white"
                rows={3}
              />
            </>
          )}

          {/* Common Fields for Both */}
          
          {/* Funds */}
          <div className="flex flex-col gap-2">
            <label htmlFor="fundsToRaise" className="font-semibold">
              Funds To Raise
            </label>
            <input
              type="number"
              name="fundsToRaise"
              placeholder="Total Funds Needed (₦)"
              value={formData.fundsToRaise}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-md bg-white"
              required
            />
          </div>
          <textarea
            name="reasonForSupport"
            placeholder="Why do you need this support? Explain clearly..."
            value={formData.reasonForSupport}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-md bg-white"
            rows={3}
            required
          />

          {/* Upload ID Card */}
          <div>
            <label className="font-semibold">
              Upload ID Card (e.g., Government-issued ID or school ID)
            </label>
            <div
              {...getIdCardRootProps()}
              className="mt-2 border border-dashed border-gray-400 p-6 text-center cursor-pointer bg-[#F9F9F6] h-[150px] flex items-center justify-center rounded-[12px]"
            >
              <input {...getIdCardInputProps()} />
              {idCard ? (
                <p className="text-green-600 font-medium">ID uploaded</p>
              ) : (
                <p className="text-gray-500">Click or drag to upload ID Card</p>
              )}
            </div>
          </div>

          {/* Upload Recommendation Letter */}
          <div>
            <label className="font-semibold">
              Upload Recommendation Letter (optional)
            </label>
            <div
              {...getRecommendationRootProps()}
              className="mt-2 border border-dashed border-gray-400 p-6 text-center cursor-pointer bg-[#F9F9F6] h-[150px] flex items-center justify-center rounded-[12px]"
            >
              <input {...getRecommendationInputProps()} />
              {recommendationLetter ? (
                <p className="text-green-600 font-medium">Letter uploaded</p>
              ) : (
                <p className="text-gray-500">Click or drag to upload letter</p>
              )}
            </div>
          </div>

          {/* Terms Agreement */}
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <span>
              I certify that the information provided is accurate and truthful.
            </span>
          </label>

          <button
            type="submit"
            className="py-4 px-6 bg-secondary text-white font-semibold rounded-md hover:bg-tertiary transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProject
