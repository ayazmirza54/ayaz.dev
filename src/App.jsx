import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FileDown, Github } from 'lucide-react'
function App() {

    const handleDownload = () => {
      // Use the correct path to the file in the public folder
      const cvUrl = "/AyazMirzaResume.pdf";

      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "Ayaz_Resume.pdf";

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    
  }
  return (
    <>
      <div className="container bg-[#17181c]">
        <header> <div className="flex flex-col items-start">
          <div>&nbsp;</div>
          <div className="text-white text-2xl md:text-3xl mx-4 hero p-[10px] md:p-[20px] border-white border-b border-white self-center md:self-start">ayaz.info</div>
          <br></br>
        </div>
          <div className="flex flex-col items-start nav">
            <div className="flex flex-col md:flex-row justify-between border border-white w-[100%] md:h-[100px] justify-center items-center">
              <div className="text-white flex navbar text-center text-xl lg:text-2xl font-mono w-full md:w-1/3 md:h-[100%] justify-center items-center p-4 border-b md:border-b-0 md:border-r border-white">About me</div>
              <div className="text-white flex navbar text-center text-xl lg:text-2xl font-mono w-full md:w-1/3 md:h-[100%] justify-center items-center p-4 border-b md:border-b-0 md:border-r border-white"><a onClick={handleDownload} className="text-white flex download decoration-none  text-center text-xl lg:text-2xl font-mono justity-center items-center">download resume &nbsp; <FileDown /></a></div>
              <div className="text-white flex navbar text-center text-xl lg:text-2xl font-mono w-full md:w-1/3 md:h-[100%] justify-center items-center p-4"><a href="https://github.com/ayazmirza54" target='_blank' className='text-white flex justity-center items-center download decoration-none  text-center text-xl lg:text-2xl font-mono'>Github&nbsp;<Github></Github></a></div>
            </div></div>
        </header>
        <main>
          <div className="flex flex-col items-start p-5 md:p-[40px] text-white">
            <ul className="list-disc marker:text-white pl-5 text-base md:text-lg">
              <li>Senior DevOps Engineer at Wipro with 5 years’ experience in the telecom sector</li>
              <li>Proficient in Ansible, shell scripting, AWS, Prometheus &amp; Grafana</li>
              <li>Creator of AI-powered tools (Gen-a-Email, AnsibleBot, CurlBot)</li>
              <li>Developed a Python TUI EC2 manager and one-click CI/CD pipelines</li>
              <li>Full-stack web developer using React (frontend) &amp; Express (backend)</li>
              <li>Integrates AI models (Gemini, Claude, ChatGPT) to automate workflows</li>
              <li>Founder of AI Gadgets Marketplace (<a href="https://aigadgets.show/">aigadgets.show</a>)</li>
              <li>Content creator on “The Weekend Coder” YouTube channel</li>


            </ul>
          </div>
        </main >
        <main>


        </main>
      </div >
    </>
  )
}

export default App
