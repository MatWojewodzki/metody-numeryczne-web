
const Section = ({ title, children }) => {
  return (
    <section className='mb-20'>
        <h2 className='text-2xl font-semibold mb-8'>
            {title}
        </h2>
        {children}
    </section>
  );
}

export default Section;