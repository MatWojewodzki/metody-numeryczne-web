import { InlineMath, BlockMath } from "react-katex";
import Section from "./Section";

const TheorySection = () => {
  return (
    <Section title={'Teoria matematyczna użyta to rozwiązania zadania'}>
      <p>
      Metodą <b>bisekcji</b> jesteśmy w stanie określić punkt przecięcia funkcji ciągłej <InlineMath>f(x)</InlineMath> z osią <InlineMath>OX</InlineMath> w danym przedziale. 
      Przebieg algorytmu:
      </p>
      <ol className='list-decimal list-inside my-2 ps-3'>
        <li>
          Sprawdzenie, czy pierwiastkiem równania jest punkt <InlineMath math={String.raw`x_{1}={\tfrac {a+b}{2}}`} />. Jeżeli tak jest, algorytm kończy działanie, a punkt <InlineMath math={String.raw`x_{1}`} /> jest szukanym miejscem zerowym.
        </li>
        <li>
          W przeciwnym razie, dopóki nie osiągniemy żądanej dokładności, czyli dopóki <InlineMath math={String.raw`\mid a-b\mid >\epsilon`} />:
        </li>
        <ol className='list-inside ps-6 list-decimal'>
          <li>
            Zgodnie ze wzorem z punktu pierwszego ponownie wyznaczane jest <InlineMath math={String.raw`x_{1}`} />, dzieląc przedział <InlineMath math={String.raw`[a,b]`} /> na dwa mniejsze przedziały: <InlineMath math='[a,x_{1}]' /> i <InlineMath math='[x_{1},b]' />.
          </li>
          <li>
            Wybierany jest koniec przedziału, którego wartość funkcji posiada znak przeciwny do <InlineMath math='f(x_{1})' /> i odpowiednio górny albo dolny kraniec przedziału <InlineMath>b</InlineMath> albo <InlineMath>a</InlineMath> przyjmuje wartość <InlineMath math={String.raw`x_{1}`} />
          </li>
          <li>
            Po osiągnięciu żądanej dokładności algorytm kończy działanie, a szukany pierwiastek równania wynosi <InlineMath math={String.raw`\tfrac {a+b}{2}`} />.
          </li>
        </ol>
      </ol>
      <p className="mt-5">
        Metoda bisekcji opiera się na <b>twierdzeniu Darboux</b>: Jeżeli funkcja ciągła <InlineMath math={String.raw`\displaystyle f(x)`} /> ma na końcach przedziału domkniętego wartości różnych znaków, to wewnątrz tego przedziału, istnieje co najmniej jeden pierwiastek równania <InlineMath math={String.raw`\displaystyle f(x)=0`} />.
      </p>
      <img
        className="mx-auto my-3"
        src='./bisekcja.gif'
      />
      <p className="mt-8">
        <b>Całkowanie numeryczne</b>, często zwane kwadraturą, polega na przybliżonym obliczniu całek oznaczonych.
      </p>
      <p>
        Najprostsza z metod kwadraturowych polega na zastosowaniu wzoru:
      </p>
      <BlockMath math={String.raw`{\displaystyle \int _{x_{0}}^{x_{n}}\!\!f(x)\approx h\sum _{i=0}^{n-1}f(x_{i}+\alpha h),\quad h={\tfrac {x_{n}-x_{0}}{n}},}`} />
      <p>
        w którym <InlineMath>n</InlineMath> jest liczbą podprzedziałow o długości <InlineMath>h</InlineMath>.
      </p>
      <img
        className="mx-auto my-3"
        src="./calka.gif"
        alt="całka"
      />
      <iframe
        className='w-full h-[600px] rounded-md my-3'
        src="https://www.geogebra.org/classic/jdpqexj5?embed"
        alt="całka w geogebrze"
      />
    </Section>
  )
}

export default TheorySection;

// Metoda ta ma trzy warianty:
// 1. gdy {\displaystyle \alpha =0,}
// 2. gdy {\displaystyle \alpha ={\tfrac {1}{2}}} (najdokładniejszy sposób)
// 3. gdy {\displaystyle \alpha =1.}
// Istnieje również wariant ogólny {\displaystyle \alpha \in [0,\,1].}'