import Section from "./Section"

const SpreadsheetSection = () => {
    return (
        <Section title={'Rozwiązanie w arkuszu kalkulacyjnym'}>
            <p className="ps-2">Bisekcja:</p>
            <iframe
                className='w-full h-[600px] my-4 rounded-md'
                frameborder="0"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQVZYPeIOH0Cd0OpG-eBt0494HKuvIbKHmMyQzo9dy3CN3fWoMOWOj6RiZt0BsxvbWMobhwgz6Ne8gS/pubhtml?widget=true&amp;headers=false">
            </iframe>
            <p className="ps-2">Całka:</p>
            <iframe
                className='w-full h-[600px] my-4 rounded-md'
                frameborder="0"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSc3WQSkFw31GOoeYVvNlF0jMSEbDlCFdRFVTUBLInrVSXXWOJqDY2CmNNCAH75psTYvjAgNLQ7QBnD/pubhtml?widget=true&amp;headers=false">
            </iframe>
        </Section>
    );
}

export default SpreadsheetSection;