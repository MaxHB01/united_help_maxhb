import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ToolTip } from '@components';

import "./navigation.scss";



export default function Navigation() {
    return (
            <nav className="navigation">
                
                <div className="navigation-items">
                    <ToolTip text='Home' position='right'>
                        <Link to={'/'} className='navigation-item active'>
                            <FontAwesomeIcon icon={faDollarSign} />
                        </Link> 
                    </ToolTip>
                    <ToolTip text='Samen gekocht' position='right'>
                        <Link to={'/SamenGekocht'} className='navigation-item active'>
                            <FontAwesomeIcon icon={faListAlt} />
                        </Link> 
                    </ToolTip>
                    <ToolTip text='Voorspelde sales' position='right'>
                        <Link to={'/Voorspeld'} className='navigation-item active'>
                            <FontAwesomeIcon icon={faDollarSign} />
                        </Link> 
                    </ToolTip>
                </div>

            </nav>
    );
}