import { useState } from "react";

import SuccessMessage from "./SuccessMessage";

import classes from "./Form.module.css";

export default function Form() {
  const [fullname, setFullname] = useState("");

  const [email, setEmail] = useState("");

  const [isloggedIn, setIsloggedIn] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();

    setIsloggedIn(true);

    setTimeout(()=>{
        setFullname('');
        setEmail('');
    },2000);
  }
  function handleFullnameChange(event) {
    setFullname(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  // function handleFormSubmit(event){
  // event.preventDefault();

  // const formData = new FormData (event.target);
  // const data = Object.fromEntries(formData.entries());

  // }

  return (
    isloggedIn ?<SuccessMessage fullname={fullname} email={email}/>:
    <form className={classes.form}onSubmit={handleFormSubmit}>
      <div className={classes.formControl}>
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          required
          value={fullname}
          onChange={handleFullnameChange}
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
