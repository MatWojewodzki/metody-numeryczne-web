import 'katex/dist/katex.min.css'


import Header from './components/Header';
import Introduction from './components/Introduction';
import TheorySection from './components/TheorySection';
import SpreadsheetSection from './components/SpreadsheetSection';
import CodeSection from './components/CodeSection';
import Footer from './components/Footer';


function App() {

  return (
    <div className='min-h-dvh flex flex-col bg-gray-800 text-zinc-50 font-sans'>
      <Header />
      <main className='flex-grow'>
        <div className=' max-w-screen-lg mx-auto p-5'>
          <Introduction />
          <TheorySection />
          <SpreadsheetSection />
          <CodeSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
