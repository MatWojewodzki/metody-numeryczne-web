import { InlineMath } from 'react-katex';

import Section from './Section';

const Introduction = () => {
    return (
        <Section title={'Polecenie'}>
            <p>
                Zadanie polega na obliczeniu pola zawartego między wykesami funkcji <InlineMath>f(x)=x^2</InlineMath> oraz <InlineMath>g(x)=\sin x</InlineMath> w przedziale <InlineMath>x\in[0,\pi]</InlineMath>.
            </p>
        </Section>
    );
}

export default Introduction;