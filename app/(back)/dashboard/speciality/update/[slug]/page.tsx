import { getSpecialityBySlug } from '@/actions/specialities';
import SpecialityForm from '@components/Dashboard/SpecialityForm';
import React from 'react'

export default async function page({
  params:{ slug },
}:{
  params:{slug:string};
}) {
  const speciality = (await getSpecialityBySlug(slug))?.data;
  return (
    <div>
        {/* <ServiceForm title="Update Service" initialData={service} /> */}
        {speciality && speciality.id && <SpecialityForm title="Update Service" initialData={speciality} />}
    </div>
  )
}
