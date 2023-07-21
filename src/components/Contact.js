import React from "react";

const Contact = () => {
  const handleSendMsg = () => {
    alert("user send msg successfully");

  };
  return (
    <div className="mb-20">
      <h3 className='text-blue-300 text-2xl leading-6 font-bold pb-8  text-center'>Contact Us</h3>
      <div>
        <div className="grid grid-cols-1 bg-white p-10 container mx-auto">
          <div className="mt-10 lg:mx-0 mx-2">
            <form className="grid grid-cols-6 gap-6">
              <div className="col-span-6 md:col-span-3">
                <input
                  className="w-full bg-transparent rounded-rounded-10 py-4 px-6 text-slate-400 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-300"
                  type="text"
                  name="name1"
                  placeholder='First Name'
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <input
                  className="w-full bg-transparent rounded-rounded-10 py-4 px-6 text-slate-400 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-300"
                  type="text"
                  name="name2"
                  placeholder='Last Name'
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <input
                  className="w-full bg-transparent rounded-rounded-10 py-4 px-6 text-slate-400 placeholder-[#A2A2A2] font-normal  leading-leading-30 border border-gray-300"
                  type="email"
                  name="email"
                  placeholder='Email'
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <input
                  className="w-full bg-transparent rounded-rounded-10 py-4 px-6 text-slate-400 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-300"
                  type="text"
                  name="phone"
                  placeholder='Phone'
                />
              </div>
              <div className="col-span-6">
                <textarea name="message" rows="4"
                  className="w-full bg-transparent rounded-rounded-10 py-4 px-6 text-slate-400 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-300"
                  placeholder="Message"></textarea>
              </div>
              <div className="col-span-6">
                <button
                  className="block w-full py-4 text-xl leading-leading-30 font-semibold text-slate-400 bg-transparent  rounded-rounded-10 border border-gray-300"
                  type="submit"
                  onClick={handleSendMsg}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Contact;
