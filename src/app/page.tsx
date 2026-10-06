import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProjectsSection } from '../components/ProjectsSection';
import { StackAndEducation } from '../components/StackAndEducation';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-800 selection:text-emerald-400">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <StackAndEducation />
      </main>
      <Footer />
    </div>
  );
}
