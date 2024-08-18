import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function FilterCard() {
  const fitlerData = [
    {
    fitlerType: "Location",
    arrya: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
     },
     { fitlerType: "Industry",
    arrya: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
    fitlerType: "Salary",
    arrya: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]

  return (
    <div className='w-full'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr />
      <RadioGroup>
        {fitlerData.map((data,index)=>(
          <div>
            <h1 className='font-bold text-md'>{data.fitlerType}</h1>
            {data.arrya.map((item,index)=>(
              <div className='flex items-center space-x-2 my-3'>
                <RadioGroupItem value={item} />
                <Label htmlFor={item}>{item}</Label>
                </div>
            ))}  
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterCard