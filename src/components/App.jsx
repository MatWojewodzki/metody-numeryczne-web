import 'katex/dist/katex.min.css'


import Header from './Header';
import Introduction from './Introduction';
import TheorySection from './TheorySection';
import SpreadsheetSection from './SpreadsheetSection';
import CodeSection from './CodeSection';
import Animations from './Animations';
import Footer from './Footer';


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
