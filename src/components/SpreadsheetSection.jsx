import Section from "./Section"

const SpreadsheetSection = () => {
    return (
        <Section title={'Rozwiązanie w arkuszu kalkulacyjnym'}>
            <p className="ps-2">Bisekcja:</p>
            <iframe
                className='w-full h-[600px] my-4 rounded-md'
                frameborder="0"
                src="https://gpe-my.sharepoint.com/personal/barkasy38_edu_gdansk_pl/_layouts/15/Doc.aspx?sourcedoc={6699c1e9-99da-4463-95aa-b8501af94aa0}&action=embedview&wdAllowInteractivity=False&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True">
            </iframe>
            <p className="ps-2">Całka:</p>
            <iframe
                className='w-full h-[600px] my-4 rounded-md'
                frameborder="0"
                src="https://gpe-my.sharepoint.com/personal/barkasy38_edu_gdansk_pl/_layouts/15/Doc.aspx?sourcedoc={b9a934a6-f016-45b0-aadb-23ae8565e69d}&action=embedview&wdAllowInteractivity=False&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True">
            </iframe>
        </Section>
    );
}

export default SpreadsheetSection;