import MyBody from '../MyBody/MyBody';
import MyNav from '../MyNav/MyNav';
import MySideBar from '../MySideBar/MySideBar';
import mycontainer from './MyContainer.module.css';

const MyContainer = () => {
    return(
        <>
            <div className={mycontainer.container}>
                <MyNav />
                <MyBody />
            </div>
        </>
    )
}
export default MyContainer;