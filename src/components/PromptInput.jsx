import React from 'react'

export default function PromptInput({prompt, setPrompt}) {
  return (
    <input className='bg-transparent placeholder-[#161311] text-center border-2 rounded-md border-[#161311]'
    type="text" 
    placeholder='Enter The Prompt'
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}/>
  )
}
