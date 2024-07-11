import ListPannel from '@/components/Dashboard/Doctor/ListPannel'
import PannelHeader from '@/components/Dashboard/Doctor/PannelHeader'
import { Calendar } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div>  
     <div className="grid grid-cols-12">
       <div className="col-span-4 py-3 border-r border-gray-100">
        <PannelHeader title={''} count={''} icon={Calendar}/>
       <div className="px-3">
       <ListPannel appointments={[]} role={''}/>
       </div>
       </div>
        <div className="col-span-8">
          <div className="py-2 px-4 border-b border-gray-200 flex items-center justify-end">
            <div className="flex items-center gap-4">     
          </div>
        </div>
          <div className="">
            <h2>Patient Details</h2>
          </div>
        </div>
       </div>
        
    </div>
  )
}
