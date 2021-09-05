//vendor
import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

//proj

//own
import "./styles.css";

/**
 * Central navigation file, contains controls and commonly used stuff.
 * To configure available nav buttons visit config.js file.
 * 
 * @property { * } label - Button text
 * @property { * } path - internal path to the page
 */
export default class NavigationButton extends React.Component {
    render() {
        const {
            label,
            path,
        } = this.props;

        return (
            <div>
                <Link
                    to={path}
                >
                    <div className="menuButton">
                        {label}
                    </div>
                </Link>
            </div>
        );
    }
}