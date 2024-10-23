
const Section = ({ title, sectionStyles = 'mb-20', children }) => {
  return (
    <section className={sectionStyles}>
        <h2 className='text-2xl font-semibold mb-8'>
            {title}
        </h2>
        {children}
    </section>
  );
}

export default Section;