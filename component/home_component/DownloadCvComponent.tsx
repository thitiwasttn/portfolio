'use client'
import './DownloadCv.css'

export default function DownloadCvComponent() {
    const linkCV: string = "https://drive.google.com/file/d/1ID_sNAynq6y8GHXasc1mPi8l2F_jSEND/view?usp=drive_link";
    function downloadCV() {
        const newWindow = window.open(linkCV, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return <>
        <button id="bottone5" onClick={downloadCV}>Download CV</button>
    </>
}