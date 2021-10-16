import React, { useEffect, useState } from "react";

export default function Form() {
  const fetchItems = () => {
    const list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    bloodgroup: "",
  });
  const [items, setItems] = useState(fetchItems());

  const submitFrom = (e) => {
    e.preventDefault();
    const { name, age, email, bloodgroup } = data;

    if (name === "" && email === "" && age === "" && bloodgroup === "") {
    } else {
      setItems([...items, data]);
      setData({
        name: "",
        email: "",
        age: "",
        bloodgroup: "",
      });
    }
  };
  let name, value;
  const getDetails = (e) => {
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="container px-5 my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 rounded-3 shadow-lg">
              <div className="card-body p-4">
                <div className="text-center">
                  <div className="h1 fw-light">Contact Form</div>
                  <p className="mb-4 text-muted">Enter Your Details</p>
                </div>
                <form onSubmit={submitFrom}>
                  {/* <!-- Name Input --> */}
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      //   required
                      value={data.name}
                      onChange={getDetails}
                    />
                    <label htmlFor="name">Full Name</label>
                  </div>
                  {/* <!-- Email Input --> */}
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="emailAddress"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      //   required
                      value={data.email}
                      onChange={getDetails}
                    />
                    <label htmlFor="emailAddress">Email Address</label>
                  </div>
                  {/* <!-- Age Input --> */}
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      type="number"
                      name="age"
                      placeholder="Age"
                      //   required
                      value={data.age}
                      onChange={getDetails}
                    />
                    <label>Your Age</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="bloodgroup"
                      placeholder="Blood Group"
                      //   required
                      value={data.bloodgroup}
                      onChange={getDetails}
                    />
                    <label>Blood Group</label>
                  </div>
                  <button className="btn btn-primary my-3 ">Submit</button>
                </form>
                {/* <!-- End of contact form --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
