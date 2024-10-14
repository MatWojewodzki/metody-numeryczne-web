import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const CodeBlock = ({ language, filename, children }) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className='bg-[#14181E] rounded-lg my-5'>
      <div className='py-3 mx-6 flex justify-between'>
        <p className='text-stone-300'>
          {filename}
        </p>
        <div>
          {copied ? (
            <p className='me-6'>
              Skopiowano!
            </p>
          ) : (
            <div className='group flex'>
              <div className='invisible group-hover:visible me-2'>
                <FontAwesomeIcon icon={faCopy} />
              </div>   
              <button onClick={handleCopy}>
                Kopiuj do schowka
              </button>
            </div>
          )}
        </div>
      </div>
      <div className='pt-1'>
        <SyntaxHighlighter language={language} style={atomOneDark} showLineNumbers>
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeBlock;
// bg-[#282C34]
// bg-stone-950