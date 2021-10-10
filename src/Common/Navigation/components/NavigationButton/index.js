//vendor
import React from 'react';
import { Link } from 'react-router-dom';
import { TitleText } from 'rtc-ui-library';

//proj

//own
import Styles from './styles.module.css';

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
                    className={Styles.link}
                >
                    <div className={Styles.menuButton}>
                        <TitleText>{label}</TitleText>
                    </div>
                </Link>
            </div>
        );
    }
}