import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function IconStepper(props) {
  return (
    <div id="stepper" className=' w-full flex flex-row justify-between'>
      {
        props.children.map((item, i) => {
          return <>
            {
              props.currentStep > i ?
                <div key={i} className={`w-8 h-8 text-[16px] text-white flex flex-row items-center justify-center rounded-full bg-green-400`}>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                :
                <div key={i} className={`w-8 h-8 text-[16px] text-gray-600 flex flex-row items-center justify-center rounded-full bg-green-200`}>
                  {item}
                </div>
            }
            {
              i == props.children.length - 1 ?
                <></>
                :
                <div className=' flex flex-grow flex-row px-1 items-center'>
                  {
                    props.currentStep > i ?

                      <div className=' w-full border-t-2 border-gray-600'></div>
                      :

                      <div className=' w-full border-t-2 border-gray-200'></div>
                  }
                </div>
            }
          </>
        })
      }
    </div>
  )
}
