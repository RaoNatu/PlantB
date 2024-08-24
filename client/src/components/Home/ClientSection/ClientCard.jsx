import React from 'react'

const ClientCard = ({ clientInfo }) => {
  return (
    <div className="w-[430px] shadow-md rounded-xl overflow-hidden flex-none">
      <div className="flex flex-col gap-1 items-center bg-white p-5">
        <div className="rounded-full border-2 border-themeColor">
          <img src={clientInfo.imageURL} alt="client image" />
        </div>
        <p className="text-center mt-7 text-sm text-gray-700">
          {clientInfo.feedback}
        </p>
        <h3 className="font-medium text-lg text-themeColor">
          {clientInfo.name}
        </h3>
        <p className="text-gray-400 text-sm">{clientInfo.designation}</p>
      </div>
    </div>
  )
}

export default ClientCard
