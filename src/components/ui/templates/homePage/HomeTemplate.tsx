import React from 'react'
import Button from '../../atoms/button/Button'
import  './Home.scss'

function HomeTemplate() {
  return (
    <div className="home flex flex-col gap-3 items-center justify-center min-h-screen text-black">
      <h2 className="text-4xl font-bold text-center mt-8">
        Conecta, Colabora, Cambia el mundo
      </h2>
      <p className="text-lg text-center mt-4 mx-24">
        Únete a nuestra comunidad de voluntarios y organizadores. Encuentra proyectos que te apasionen o crea los tuyos propios para hacer una diferencia en tu comunidad.
      </p>
      <div className='flex gap-1'>
        <Button className="border border-slate-950" size='large' variant="primary">
            Explorar proyectos
        </Button>
        <Button className="border border-gray-400" size='large' variant="secondary">
            Comenzar como organizador
        </Button>
      </div>
    </div>
  )
}

export default HomeTemplate