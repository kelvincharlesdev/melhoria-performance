import { useState, useEffect, useMemo } from 'react'
// import { useMarketplace } from '../../contexts/marketPlace.context'
import { formataHora } from '../../helpers/formatters'

export const Relogio = () => {
  // const { setData } = useMarketplace();
  const [dataAtual, setDataAtual] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDataAtual(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const horaFormatada = useMemo(() => formataHora(dataAtual), [dataAtual])

  return (
    <div className='py-12 sm:px-6 lg:px-8 shadow-2xl my-5 rounded-2xl'>
      <h1 className='text-center text-gray-500 text-2xl font-medium uppercase'>
        {horaFormatada}
      </h1>
    </div>
  )
}
