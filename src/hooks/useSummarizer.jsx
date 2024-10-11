import { useState } from "react";

const useSummarizer = () => {
    const [videoUrl, setVideoUrl] = useState(''); 
    const [prompt, setPrompt] = useState(''); 
    console.log(videoUrl, prompt);
    return { videoUrl, setVideoUrl, prompt, setPrompt };
}

export default useSummarizer