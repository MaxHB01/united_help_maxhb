import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import {ToolTip} from  '@components';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
            <nav className="navigation">
                <ul className='navigation-items'>
                    <li className='navigation-item'>
                    
                            <Link to="/">
                                <FontAwesomeIcon icon={faDollarSign} />
                            </Link>
                    </li>
                </ul>
            </nav>
    );
}