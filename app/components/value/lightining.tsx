'use client'

import { useState } from 'react'

export default function LightiningIcon() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <svg className='w-5' viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>63. Lighting bolt</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="63.-Lighting-bolt" stroke="none" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <g transform="translate(16.000000, 2.000000)" id="Layer-1" stroke="white" strokeWidth="4">
                <path d="M38.9948707,37.6837978 L38.9948707,3.16090149 C38.9948707,-0.55368264 37.3015616,-1.07285404 35.212759,2.02111931 L0.9889463,52.7140687 C-1.10326869,55.8130965 0.233575023,58.316203 3.96724852,58.316203 L28.5478613,58.316203 L28.5478616,92.8390986 C28.5478616,96.5536827 30.2411708,97.072854 32.3299734,93.9788807 L66.5537861,43.2859313 C68.6460011,40.1869035 67.3091573,37.6837971 63.5754837,37.6837972 L38.9948707,37.6837978 L38.9948707,37.6837978 Z"></path>
            </g>
        </g>
    </svg>
  )
}
