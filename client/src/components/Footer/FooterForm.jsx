import React from 'react'

const FooterForm = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h2 className="capitalize font-medium text-3xl">sign up to newsletter</h2>
      <h4 className="text-lg text-gray700">
        To Get The Latest News From Us Please Subscribe Your Email.
      </h4>
      <form action="#" className="text-sm">
        <input
          type="text"
          placeholder="Email"
          className="pl-4 py-3 rounded-l-xl w-[40rem] outline-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="px-8 py-3 cursor-pointer bg-themeColor text-white hover:bg-black uppercase rounded-r-xl transition-all ease-in-out duration-[0.3s]"
        />
      </form>
    </div>
  )
}

export default FooterForm
