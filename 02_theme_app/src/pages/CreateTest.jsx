import React from 'react'
import CreateMCQs from "../components/mcqs/CreateMCQs"


const CreateTest = () => {
  return (
      <div className='min-h-screen py-4'> 
          
          <CreateMCQs />
          <DisplayMcqs/>
    </div>
  )
}

export default CreateTest