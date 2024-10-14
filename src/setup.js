import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

export const setupHighlighter = () => {
    SyntaxHighlighter.registerLanguage('jsx', jsx);
}