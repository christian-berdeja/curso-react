import PropTypes from 'prop-types';
import mysidebar from './MySideBar.module.css';

const MySideBar = ({style}) => {
    return(
        <>
            <div className={style.sidenav}></div>
        </>
    )
}

export default MySideBar;