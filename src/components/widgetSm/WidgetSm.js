import React from 'react';

import "./WidgetSm.css"

import profile from "../../image/Avatar.jpg"
import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const widgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://i.pravatar.cc/150?img=8" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Shoaib Miraki</span>
                        <span className="widgetSmUserTitle">Programmer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className='widgetSmIcon' />
                        Dispaly
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i.pravatar.cc/150?img=14" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Shoaib Miraki</span>
                        <span className="widgetSmUserTitle">Programmer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className='widgetSmIcon' />
                        Dispaly
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i.pravatar.cc/150?img=19" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Shoaib Miraki</span>
                        <span className="widgetSmUserTitle">Programmer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className='widgetSmIcon' />
                        Dispaly
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i.pravatar.cc/150?img=17" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Shoaib Miraki</span>
                        <span className="widgetSmUserTitle">Programmer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon  className='widgetSmIcon'/>
                        Dispaly
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i.pravatar.cc/150?img=25" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Shoaib Miraki</span>
                        <span className="widgetSmUserTitle">Programmer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon  className='widgetSmIcon'/>
                        Dispaly
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default widgetSm;