import React from 'react'

export default function Dropdown() {
  return (
    <div className='absolute -bottom-[8rem] bg-slate-500 w-[6rem] '>
        <ul>
            <li className='p-[1px] hover:bg-slate-100 text-center'>item 1</li>
            <li className='p-[1px] hover:bg-slate-100 text-center'>item 2</li>
            <li className='p-[1px] hover:bg-slate-100 text-center'>item 3</li>
            <li className='p-[1px] hover:bg-slate-100 text-center'>item 4</li>
            <li className='p-[1px] hover:bg-slate-100 text-center'>item 5</li>
        </ul>
    </div>
  )
}
