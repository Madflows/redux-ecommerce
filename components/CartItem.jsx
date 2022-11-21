import React from 'react'

export default function CartItem({item}) {
  return (
    <div className="flex items-start pt-8 pb-12">
      <img
        alt="{item.name}"
        src={item.imageUrl}
        className="h-16 w-16 rounded-lg object-cover"
      />
      <div className="ml-4">
        <h3 className="text-sm">{item.name}</h3>
        <dl className="mt-1 space-y-1 text-xs text-gray-500">
          <div>
            <dt className="inline">Size:</dt>
            <dd className="inline">XXS</dd>
          </div>
          <div>
            <dt className="inline">Color:</dt>
            <dd className="inline">White</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
