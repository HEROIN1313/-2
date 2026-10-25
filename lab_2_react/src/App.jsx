import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        <main className="space-y-6">
          <About />
          <Education />
          <Skills />
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;