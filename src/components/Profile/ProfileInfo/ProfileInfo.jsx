import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (<div>
            <div>
                <img src="http://ec.europa.eu/social/BlobServlet?mode=displayPicture&photoId=11068"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    )
};

export default ProfileInfo;
