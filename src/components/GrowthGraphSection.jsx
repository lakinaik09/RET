import React from 'react'
import AnimateCandle from './AnimateCandle'
import { Link } from 'react-router-dom'

const GrowthGraphSection = () => {
  return (
    <>
    <section className="graph-section min-h-screen md:px-16 px-6 md:py-8 py-4 dark:bg-slate-900 dark:text-slate-300">
        <div className=''>
            <h2 className="md:text-3xl text-xl font-semibold text-slate-700 dark:text-slate-300">How Salesforces Drives Job Growth</h2>
            <p className='mt-2 text-slate-700 dark:text-slate-300'>{`(Number of worldwide jobs generated from the use of Salesforce)`}</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm md:text-lg mt-4">
              Salesforce celebrated its 25th Anniversary in February 2024, marking a period of wild and rapid growth for the company. However, this rapid growth also signifies a chronic shortage of skilled Salesforce professionals in the market. The latest report by IDC shows that employment within the Salesforce economy is expected to double by 2026.
            </p>
        </div>
        <div className='mt-10'>
            <AnimateCandle/>
            <p className="md:mt-5 mt-2 text-black dark:text-slate-300 font-semibold ">Note : Click <Link to="https://www.salesforce.com/content/dam/web/en_us/www/documents/reports/idc-salesforce-economy-report.pdf" target="_blank"  className='text-blue-600'>here</Link> to view the source
            </p>

        </div>
    </section>
    </>
  )
}

export default GrowthGraphSection