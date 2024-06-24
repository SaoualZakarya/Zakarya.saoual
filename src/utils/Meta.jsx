import { Helmet } from 'react-helmet';

export const Meta = (props) => {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title> {props.title}</title>
        </Helmet>
    </>
    
  )
}