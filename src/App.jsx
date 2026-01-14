
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Techstack } from './components/Techstack'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactPage } from './components/ContactPage'
import Footer from './components/Footer'
import CertificatesSection from "./components/CertificatesSection";

import './index.css'

function App() {


  return (
    <>
    <Header />
      
<Hero  />
<Techstack />
<ProjectsSection />
      <CertificatesSection />
<ContactPage />
<Footer />
    </>
  )
}


export default App
