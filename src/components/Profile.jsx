import React from "react";
import Nav from "./Nav";

function Profile() {
  let avatar = `https://i.pravatar.cc/150?img=4`;
  return (
    <div>
      <Nav title="Profile" />
      <div className="form__container">
        <form action="">
          <div className="avatar">
            <img src={avatar} alt="Profile pic"/>
          </div>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              autoFocus
            />
          </label>
          <br />
          <label htmlFor="name">
            Reg
            <input type="text" name="reg" id="reg" placeholder="S13/0000/09" />
          </label>
          <label htmlFor="phone">
            Phone number
            <input type="number" name="phone" id="phone" />
          </label>
          <label htmlFor="email">
            Email Address
            <input type="email" name="email" id="email" />
          </label>
          <label for="pet-select">
            Interests:
            <select name="pets" id="pet-select" >
              <option value="">--Select--</option>
              <option value="cat">IOT</option>
              <option value="hamster">Cyber security</option>
              <option value="dog">Web developmet </option>
              <option value="parrot">Backend developer</option>
              <option value="spider">Full stack</option>
              <option value="goldfish">Software engineer</option>
            </select>
          </label>

          <br />
          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
}

export default Profile;
