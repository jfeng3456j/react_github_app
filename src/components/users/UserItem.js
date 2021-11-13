import React from "react";
import PropTypes from 'prop-types'

                      //destructure object
const UserItem = ({ user: { login, avatar_url, html_url }}) => {

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-gray btn-sm my-1">
          more
        </a>
      </div>
    </div>
  );
};

UserItem.prototypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;
