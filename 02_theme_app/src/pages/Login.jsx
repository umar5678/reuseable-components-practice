import React, { useState } from "react";
import { H1 } from "../components/ui/Typography";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Textarea from "../components/ui/Textarea";

const Login = () => {
  const [text, setText] = useState("");

  const handleLog = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <div className="h-screen ">
      <div className="">
        <H1>Login Form</H1>
        <form action="">
          <Input label="Email" type="email" placeholder="Enter your email" />
          <Input
            label="Password"
            type="password"
           
            placeholder="Enter your password"
          />
          <Button variant="primary" type="submit" className="my-3">
            Submit
          </Button>
          <Button size="lg" className="ml-3" variant="primary-outline">
            Signup{" "}
          </Button>
        </form>

        <form action="" onSubmit={handleLog}>
          <Textarea
            label="Your Message"
            placeholder="Enter your message here"
            name="my-textarea"
            onChange={(e) => setText(e.target.value)}
          />

          <Button type="submit">
            Log textarea
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
