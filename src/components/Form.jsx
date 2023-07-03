import React from 'react'

function Form() {
  return (
    <>
      <div className="md:w-96 border rounded-lg overflow-hidden">
      <div className="bg-gray-100 px-4 py-3">
        <h2 className="text-lg font-semibold text-gray-800">Contacto</h2>
      </div>
      <div className="p-4">
        <form>
          <div>
            <label htmlFor="name" className="text-sm font-bold text-gray-700 tracking-wide">Nombre</label>
            <input
              id="name"
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Nombre"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="text-sm font-bold text-gray-700 tracking-wide">Email</label>
            <input
              id="email"
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="text-sm font-bold text-gray-700 tracking-wide">Mensaje</label>
            <textarea
              id="message"
              className="w-full h-32 text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>
          <div className="mt-6">
            <button className="bg-teal-500   text-gray-100 p-3 rounded-lg font-semibold w-full">Enviar mensaje</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Form