import Section from './Section';
import CodeBlock from './CodeBlock';
import { PSEUDOCODE, CPP_CODE, PYTHON_CODE } from '../source_code/sourceCode';
import { CPP_OUTPUT, PYTHON_OUTPUT } from '../source_code/consoleOutput';

const CodeSection = () => {
  return (
    <Section title={'Rozwiązania zadania za pomocą programowania'}>
      <ol className='list-decimal list-inside'>
        <li className='mb-12'>
          <h3 className='text-xl inline'>Schemat działania programu zapisany w pseudokodzie:</h3>
          <CodeBlock filename={'pseudokod'} language={'text'}>
            {PSEUDOCODE}
          </CodeBlock>
        </li>

        <li className='mb-12'>
          <h3 className='text-xl inline'>Rozwiązanie zadania w języku C++</h3>
          <CodeBlock filename={'.cpp'} language={'cpp'}>
            {CPP_CODE}
          </CodeBlock>
          <CodeBlock filename={'Console Output'} language={'text'}>
            {CPP_OUTPUT}
          </CodeBlock>
        </li>

        <li className='mb-12'>
          <h3 className='text-xl inline'>Rozwiązanie zadanie w języku Python z wykorzystaniem bibliotek NumPy oraz SciPy (dodatkowo wykonanie wykresu)</h3>
          <CodeBlock filename={'.py'} language={'python'}>
            {PYTHON_CODE}
          </CodeBlock>
          <CodeBlock filename={'Console Output'} language={'text'}>
            {PYTHON_OUTPUT}
          </CodeBlock>
          <img
            className='mx-auto'
            alt='Wykres przedstawiający pole między wykresami funkcji'
            src='./poleMiedzyWykresami.png'
          />
          <p className='text-xs text-center mt-1'>poleMiedzyWykresami.png</p>
        </li>
      </ol>
    </Section>
  );
}

export default CodeSection;