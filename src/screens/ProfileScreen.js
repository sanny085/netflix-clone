import React from 'react'
import './ProfileScreen.css'
import Nav from "../Nav";
import { ImUser } from 'react-icons/im';
import {useSelector} from "react-redux";
import { auth } from '../firebase';

import {useHistory} from 'react-router-dom';

import {selectUser} from '../features/userSlice';

const ProfileScreen = () => {
    const user = useSelector(selectUser);
    const history = useHistory();
    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen__body">
                <h2>User Profile</h2>
                <div className="profileScreen__info">
                    <ImUser className="userLogo"/>
                    <div className="profileScreen__detail">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                          {/*Our All plans*/}
                           <h3>Plans</h3>
                           
                          {/*End Our All plans*/}
                          <button onClick={()=>(auth.signOut(),history.push("/"))} className="profileScreen__signout">Sign Out</button>
                        </div>
                    </div>

                </div>
            </div>
          
        </div>
    )
}

export default ProfileScreen
