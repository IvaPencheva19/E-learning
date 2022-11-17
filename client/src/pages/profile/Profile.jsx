import "./profile.scss";
import jwt from "jwt-decode";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import EditProfileDialog from "../../components/profile/editDialog/EditProfileDialog";
import * as userService from "../../services/userService";

import { SERVER_AUTHORIZATION_HEADER_NAME } from "../../config/constants";

const Single = () => {
  const { user, setUser } = useContext(AuthContext);

  const [editProfile, setEditProfile] = useState(false);

  const editProfileClickHandler = (e) => {
    setEditProfile(true);
  }

  const closeHandler = () => {
    setEditProfile(false);
  }

  const onUserEditHandler = (profileData) => {
    
    userService.updateProfile(profileData)
      .then(result => {

        const user = jwt(result[SERVER_AUTHORIZATION_HEADER_NAME]);
        user[SERVER_AUTHORIZATION_HEADER_NAME] =
          result[SERVER_AUTHORIZATION_HEADER_NAME];

        setUser(user);
        closeHandler();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton" onClick={editProfileClickHandler}> Edit </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={user.imageUrl}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.firstName} {user.lastName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Username:</span>
                  <span className="itemValue">{user.username}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">
                    {user.role}
                  </span>
                </div>

                {editProfile &&
                  <EditProfileDialog
                    user={user}
                    openDialog={editProfile}
                    onClose={closeHandler}
                    onSave={onUserEditHandler}
                  />
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
