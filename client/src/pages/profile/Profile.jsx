import "./profile.scss";
import jwt from "jwt-decode";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import EditProfileDialog from "../../components/profile/editDialog/EditProfileDialog";
import ChangePasswordDialog from "../../components/profile/changePassword/ChangePasswordDialog";
import * as userService from "../../services/userService";

import { SERVER_AUTHORIZATION_HEADER_NAME } from "../../config/constants";

const Single = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editProfile, setEditProfile] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const closeHandler = () => {
    setEditProfile(false);
    setChangePassword(false);
  };

  const editProfileClickHandler = () => {
    setEditProfile(true);
  };
  const changePasswordClickHandler = () => {
    setChangePassword(true);
  };

  const onUserEditHandler = (profileData, setErrors) => {
    userService
      .updateProfile(profileData)
      .then((result) => {
        const user = jwt(result[SERVER_AUTHORIZATION_HEADER_NAME]);
        user[SERVER_AUTHORIZATION_HEADER_NAME] =
          result[SERVER_AUTHORIZATION_HEADER_NAME];

        setUser(user);
        closeHandler();
      })
      .catch((err) => {
        setErrors((errors) => ({
          ...errors,
          serverMsg: err.message,
        }));
      });
  };
  const onChangePasswordHandler = (currentPassword, newPassword, setErrors) => {
    userService
      .updatePassword(currentPassword, newPassword)
      .then(() => {
        closeHandler();
      })
      .catch((err) => {
        console.error(err);
        setErrors((errors) => ({
          ...errors,
          serverMsg: err.message,
        }));
      });
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButtonsContainer">
              <button onClick={editProfileClickHandler}>Edit</button>
              <button onClick={changePasswordClickHandler}>
                Change Password
              </button>
            </div>
            <h1 className="title">Profile</h1>
            <div className="item">
              <img src={user.imageUrl} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">
                  {user.firstName} {user.lastName}
                </h1>
                <div className="detailItem">
                  <span className="itemValueEmail">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Username: </span>
                  <span className="itemValue">{user.username}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{user.role}</span>
                </div>

                {editProfile && (
                  <EditProfileDialog
                    user={user}
                    openDialog={editProfile}
                    onClose={closeHandler}
                    onSave={onUserEditHandler}
                  />
                )}

                {changePassword && (
                  <ChangePasswordDialog
                    openDialog={changePassword}
                    onClose={closeHandler}
                    onSave={onChangePasswordHandler}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
