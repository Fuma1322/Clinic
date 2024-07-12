import { getServices } from '@/actions/services'
import NewButton from '@/components/Dashboard/Doctor/NewButton'
import PannelHeader from '@/components/Dashboard/Doctor/PannelHeader'
import ServiceCard from '@/components/Dashboard/ServiceCard'
import { ScrollArea } from '@/components/ui/scroll-area'
import { LayoutGrid } from 'lucide-react'
import React from 'react'

export default async function page() {
  const services = (await getServices()).data || [];
  return (
    <div>
      
       <div className="grid grid-cols-12">
       <div className="lg:col-span-4 col-span-full py-3 border-r border-gray-100">
        <div className="flex items-center justify-between">
        <PannelHeader 
         title='Services' 
         count={(services.length).toString().padStart(2, "0")} 
         icon={LayoutGrid}
        />
        <div className="lg:hidden">
        <NewButton title='New Services' href='/dashboard/services/new'/>
        </div>
        </div>
       <div className="px-3">
       <ScrollArea className="h-96 w-full">
            {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
            ))}
        </ScrollArea>
       </div>
       </div>
        <div className="lg:col-span-8 col-span-full hidden lg:block">
          <div className="py-2 px-4 border-b border-gray-200 flex items-center justify-end">
            <div className="flex items-center gap-4">
              <NewButton title='New Services' href='/dashboard/services/new'/>
          </div>
        </div>

        {/* DISPLAY PANEL */}
    <div className="flex h-1/2 items-center justify-center">
        <div className=' py-4 px-6 text-center border-white shadow-md rounded-md flex flex-col items-center gap-1 text-sm'>
            <LayoutGrid/>
            <div className="py-3">
                {" "}
            <p>You have {services.length.toString().padStart(2,"0")}{" "} Services today.</p>
            </div>
            <NewButton title='New Service' href="/dashboard/services/new"/>
        </div>
    </div>
        </div>
       </div>
        
    </div>
  )
}
