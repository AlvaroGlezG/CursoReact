import {Link} from 'wouter';

export default function Category ({categoria}) {

    return (<>
        <Link to={`films/${categoria}`}>
            <h4>{categoria}</h4>
        </Link>
    </>);

}