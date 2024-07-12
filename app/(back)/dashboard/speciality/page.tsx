import { getSpecialities } from '@/actions/specialities'
import NewButton from '@/components/Dashboard/Doctor/NewButton'
import PannelHeader from '@/components/Dashboard/Doctor/PannelHeader'
import ServiceCard from '@/components/Dashboard/ServiceCard'
import { ScrollArea } from '@/components/ui/scroll-area'
import SpecialityCard from '@components/Dashboard/SpecialityCard'
import { Anvil } from 'lucide-react'
import React from 'react'

export default async function page() {
  const specialities = (await getSpecialities()).data || [];
  return (
    <div>
      
       <div className="grid grid-cols-12">
       <div className="lg:col-span-4 col-span-full py-3 border-r border-gray-100">
        <div className="flex items-center justify-between">
        <PannelHeader 
         title='Specialities' 
         count={(specialities.length).toString().padStart(2, "0")} 
         icon={Anvil}
        />
        <div className="lg:hidden">
        <NewButton title='New Speciality' href='/dashboard/specialities/new'/>
        </div>
        </div>
       <div className="px-3">
       <ScrollArea className="h-96 w-full">
            {specialities.map((speciality,i) => (
                <SpecialityCard key={i} speciality={speciality} />
            ))}
        </ScrollArea>
       </div>
       </div>
        <div className="lg:col-span-8 col-span-full hidden lg:block">
          <div className="py-2 px-4 border-b border-gray-200 flex items-center justify-end">
            <div className="flex items-center gap-4">
              <NewButton title='New Speciaity' href='/dashboard/specialities/new'/>
          </div>
        </div>

        {/* //DISPLAY PANEL */}
    <div className="flex h-1/2 items-center justify-center">
        <div className=' py-4 px-6 text-center border-white shadow-md rounded-md flex flex-col items-center gap-1 text-sm'>
            <Anvil/>
            <div className="py-3">
                {" "}
            <p>You have {specialities.length.toString().padStart(2,"0")}{" "} Specialities today.</p>
            </div>
            <NewButton title='New Speciality' href="/dashboard/specialities/new"/>
        </div>
    </div>
        </div>
       </div>
        
    </div>
  )
}
