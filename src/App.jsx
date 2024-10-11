import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import VideoInput from './components/VideoInput';
import PromptInput from './components/PromptInput';
import useSummarizer from './hooks/useSummarizer';
import SummarizeButton from './components/SummarizeButton';
import OutputField from './components/OuputField';
function App() {
  const {videoUrl, setVideoUrl, prompt, setPrompt} = useSummarizer();

  return (
    <>
      <main className='flex flex-col justify-center items-center min-h-screen bg-[#DDD0C8]'>
        <div className='flex flex-col justify-center items-center p-10'>
          <div className='flex flex-col max-w-[350px] gap-2 text-center pb-16'>
            <h1 className='font-semibold text-[#161311] text-2xl'>Youtube Summarizer</h1>
            <p className='font-normal text-[#161311]'>Easily Generate Concise Summaries Of Given Youtube Videos. Just input the youtube video link
              as well as the prompt and let AI do the rest.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-3 bg-[#b9a091] min-w-[350px] py-10 border-2 border-[#987f70] rounded-md'>
            <VideoInput videoUrl={videoUrl} setVideoUrl={setVideoUrl}/>
            <PromptInput prompt={prompt} setPrompt={setPrompt}/>
            <SummarizeButton/>
          </div>
          <OutputField/>
        </div>
      </main>
    </>
  )
}

export default App
