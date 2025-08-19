import MySideBar from '../MySideBar/MySideBar';
import MySubContent from '../MySubContent/MySubContent';
import mybody from './MyBody.module.css';

const MyBody = () => {
    return(
        <>
            <div id="body">
                <div className={mybody.mybody}>
                    <div id="bodySubContent">
                        <MySubContent/>
                    </div>
                    <div id="bodySubContent">
                        <MySubContent/>
                    </div>
                    <div id="bodySubContent">
                        <MySubContent/>
                    </div>
                </div>
                
                <MySideBar style={mybody.sidenav}/>
            </div>
        </>
    )
}
export default MyBody;