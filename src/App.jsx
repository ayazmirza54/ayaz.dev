import './App.css'
import { FileDown, Github, Linkedin, Globe, Brain, Terminal, Wrench, ShoppingBag, Search, FileText } from 'lucide-react'
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
  const links = [
    { title: "email", href: "mailto:hey@nexxel.dev" },
    { title: "x.com", href: "https://x.com/nexxeln" },
    { title: "github", href: "https://github.com/nexxeln" },
    { title: "linkedin", href: "https://www.linkedin.com/in/shoubhit-dash" },
    { title: "book a call", href: "https://cal.com/nexxel" },
  ]
  return (
    <>
      <div className="container bg-[#17181c]">
        <header> <div className="flex flex-col">
          <div>&nbsp;</div>
          <div className="text-white site-title mx-4 hero p-[10px] md:p-[20px] border-white border-b border-white self-center md:self-center">ayaz.gpt</div>
          <div className="text-white text-[20px] p-[10px] md:p-[20px] text-center">Grind. Plan. Tinker.</div>
          <div className='text-white subtext mx-4 p-[10px] md:p-[20px] border-white text-center'>Senior Consultant, Wipro Ltd.</div>
          <div className="text-white subtext p-[10px] md:p-[20px] text-center">Lucknow, IND</div>
          <br></br>
        </div>

          <div className="flex flex-col items-start nav">
            <div className="flex flex-col md:flex-row justify-between border border-[#565f89] w-[100%] md:h-[100px] justify-center items-center">
              <div className="text-white flex navbar text-center text-xl lg:text-2xl font-mono w-full md:w-1/3 md:h-[100%] justify-center items-center p-4 border-b md:border-b-2 md:border-r-2 border-[#565f89]"><a href="https://linkedin.com/in/ayazmirza54" target='_blank' className='text-white flex justity-center items-center download decoration-none  text-center text-xl lg:text-2xl font-mono'>Linkedin&nbsp;<Linkedin></Linkedin></a></div>
              <div className="text-white flex navbar text-center text-xl lg:text-2xl font-mono w-full md:w-1/3 md:h-[100%] justify-center items-center p-4 border md:border-b-2 md:border-r-2  md:border-r border-[#565f89]"><a onClick={handleDownload} className="text-white flex download decoration-none  text-center text-xl lg:text-2xl font-mono justity-center items-center">download resume &nbsp; <FileDown /></a></div>
              <div className="text-white flex navbar text-center text-xl lg:text-2xl font-mono w-full md:w-1/3 md:h-[100%] justify-center items-center border-b-2  md:border-b-2 border-[#565f89] p-4"><a href="https://github.com/ayazmirza54" target='_blank' className='text-white flex justity-center items-center download decoration-none  text-center text-xl lg:text-2xl font-mono'>Github&nbsp;<Github></Github></a></div>
            </div></div>
        </header>
        <main>
          <div className="flex flex-col justify-center items-center p-5 md:p-[40px] text-white">
            <div className=''>
              <div className="flex subtitle text-white text-xl md:text-2xl p-[10px] md:p-[20px] mx-auto md:self-center">
                🛠️ About my tech expertise
              </div>
              <br />

              <ul className="list-disc marker:text-white pl-5 pb-10 text-base md:text-lg">
                <li>Senior Consultant at Wipro with 5 years' experience of ETL development using Ab Initio ETL tool serving a top Indonesian client in the telecom sector</li>
                <li>Proficient in cloud tech like AWS, GCP</li>
                <li>Crafted SQL queries that turn raw data into crystal-clear insights — fast, efficient, and detailed.</li>
                <li>Expert in server automation using Ansible, Shell scripts and Python</li>
                <li>Implemented Prometheus, Node Exporter, and Grafana to track system performance and catch issues early.</li>
                <li>Creator of GenAI applicaitons like Gen-a-Email, QuerySmith, UnixBot and automation tools like AnsibleBot, CurlBot, Shellbot</li>
                <li>Developed a Python TUI EC2 manager and one-click CI/CD pipelines</li>
                <li>Full-stack web developer using React (frontend) &amp; Express (backend)</li>
                <li>Integrated GenAI applications (Gemini, Claude, ChatGPT) to automate workflows and streamline processes</li>
                <li>Built an AI Gadgets Marketplace (<a href="https://aigadgets.show/">aigadgets.show</a>)</li>
              </ul>
            </div>
          </div>
        </main >
        <section>
          <div className='flex flex-col p-5 md:p-[40px] text-white border-t-2 border-[#565f89] '>
            <div className="flex subtext-projects text-white text-xl md:text-3xl">
              🚀 Projects

            </div>
            <ul className="projects list-disc marker:text-white pl-5 pb-10">
              <li><a href="https://websearchai.streamlit.app/" target="_blank" rel="noopener noreferrer" className="project-link"><Globe className="project-icon" size={18} /> WebSearchAI</a></li>
              <li><a href="https://intellisketch.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link"><Brain className="project-icon" size={18} /> Intellisketch</a></li>
              <li><a href="https://unix-bot.streamlit.app/" target="_blank" rel="noopener noreferrer" className="project-link"><Terminal className="project-icon" size={18} /> UnixBot</a></li>
              <li><a href="https://github.com/ayazmirza54/ec2-manager-tui" target="_blank" rel="noopener noreferrer" className="project-link"><Github className="project-icon" size={18} /> EC2 Manager TUI</a></li>
              <li><a href="https://devopslab.streamlit.app/" target="_blank" rel="noopener noreferrer" className="project-link"><Wrench className="project-icon" size={18} /> DevOpsLab</a></li>
              <li><a href="https://aigadgets.show/" target="_blank" rel="noopener noreferrer" className="project-link"><ShoppingBag className="project-icon" size={18} /> AI Gadgets Marketplace</a></li>
              <li><a href="https://query-smith.streamlit.app/" target="_blank" rel="noopener noreferrer" className="project-link"><Search className="project-icon" size={18} /> QuerySmith</a></li>
              <li><a href="https://texttocontent.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link"><FileText className="project-icon" size={18} />Text-to-Content AI</a></li>
            </ul>
          </div>

        </section>

      </div >
    </>
  )
}

export default App
