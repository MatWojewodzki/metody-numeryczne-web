import Section from './Section';
import CodeBlock from './CodeBlock';
import { PSEUDOCODE, CPP_CODE, PYTHON_CODE } from '../source_code/sourceCode';

const CodeSection = () => {
  return (
    <Section title={'Rozwiązania zadania za pomocą programowania'}>
      <ol className='list-decimal list-inside'>
        <li>
          <h3 className='text-xl inline'>Schemat działania programu zapisany w pseudokodzie:</h3>
          <CodeBlock filename={'pseudokod'} language={'text'}>
            {PSEUDOCODE}
          </CodeBlock>
        </li>

        <li>
          <h3 className='text-xl inline'>Rozwiązanie zadania w języku C++</h3>
          <CodeBlock filename={'.cpp'} language={'cpp'}>
            {CPP_CODE}
          </CodeBlock>
        </li>

        <li>
          <h3 className='text-xl inline'>Rozwiązanie zadanie w języku Python z wykorzystaniem bibliotek Numpy oraz Scipy (dodatkowo wykonanie wykresu)</h3>
          <CodeBlock filename={'.py'} language={'python'}>
            {PYTHON_CODE}
          </CodeBlock>
        </li>
      </ol>
    </Section>
  );
}

export default CodeSection;