import React from "react";
import Notes from "./Notes";
const Home = () => {
  return (
    <div>
      <div className="conteiner my-3">
        <h1>Add a Note</h1>
        <div class="mb-3 ">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Email Address"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Note{" "}
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button className="btn-primary my-3">Submit</button>
        </div>
        <Notes/>
      </div>
    </div>
  );
};

export default Home;
