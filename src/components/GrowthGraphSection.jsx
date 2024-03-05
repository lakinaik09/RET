import React from 'react'
import AnimateCandle from './AnimateCandle'
import { Link } from 'react-router-dom'

const GrowthGraphSection = () => {
  return (
    <>
    <section className="graph-section w-full min-h-screen md:px-16 px-4 md:py-8 py-4">
        <div className=''>
            <h2 className="md:text-3xl text-xl font-semibold text-slate-700">How Salesforces Drives Job Growth</h2>
            <p className='mt-2 text-slate-700'>{`(Number of worldwide jobs generated from the use of Salesforce)`}</p>
              <p className="text-slate-700 text-sm md:text-lg mt-4">
              Salesforce Celebrated its 25th Anniversary in February 2024, and
              it has been a wild and rapid Growth for them but at the same time
              what this Rapid Growth Means is that there is a Chronic Shortage
              of Skilled Salesforce Professionals in the Market. A latest report
              by IDC shows how Salesforce Economy Employment is doubling in
              2026.
            </p>
        </div>
        <div className='mt-10'>
            <AnimateCandle/>
            <p className="md:mt-5 mt-2 text-black font-semibold">Source : <Link className='text-blue-700' to="https://www.salesforce.com/content/dam/web/en_us/www/documents/reports/idc-salesforce-economy-report.pdf" target="_blank">https://www.salesforce.com/content/dam/web/en_us/www/documents/reports/idc-salesforce-economy-report.pdf</Link> 
            </p>
        </div>
    </section>
    </>
  )
}

export default GrowthGraphSection