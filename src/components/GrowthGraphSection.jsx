import React from 'react'
import AnimateCandle from './AnimateCandle'

const GrowthGraphSection = () => {
  return (
    <>
    <section className="graph-section w-full min-h-screen md:px-16 px-4 md:py-8 py-4">
        <div className=''>
            <h2 className="md:text-3xl text-xl font-semibold text-slate-700">How Salesforces Drives Job Growth</h2>
            <p className='mt-2 text-slate-700'>{`(# of worldwide jobs generated from the use pf salesforce Cloud (M))`}</p>
        </div>
        <div className='mt-10'>
            <AnimateCandle/>
        </div>
    </section>
    </>
  )
}

export default GrowthGraphSection