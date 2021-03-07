import { useRouter } from 'next/router'
import wiki from 'wikijs';
import { CodeEditor, Container, Flex, Terminal } from '../components/elements'


const Concept = (props) => {
    const { isFallback } = useRouter();
    return ( 
        <>
            <CodeEditor children={`curl https://wikigra.ph/api/${props.name}` + '\n\n' + 
                JSON.stringify(props, undefined, 2)} theme='light' blinkCursor shellSymbol />
        </>
     );
}

export async function getStaticProps({params}) {

    let page = await wiki().page(params.name);

    let data = { 
        name: params.name,
        summary: await page.summary() ,
        infobox: await page.fullInfo(),
        tables: await page.tables()
      }

    console.log(data);

    return {
      props: data, // will be passed to the page component as props
      revalidate: 30 * 24 * 60 * 60
    }
}

export async function getStaticPaths() {
    return { paths: [], fallback: true }
}
 
export default Concept;