'use client'

export default function ProductGallery({ image }) {
  return (
    <div className="w-full h-96 bg-gray-100 rounded overflow-hidden mb-6">
      <img src={image} alt="Product" className="w-full h-full object-cover" />
    </div>
  )
}
