import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "./Input";
import Layout from "./Layout";
import { useState } from "react";

const Form = styled.form`
  width: 400px;
  min-height: 500px;
  margin: 0 auto;
  position: relative;
  top: 20vh;
  display: flex;
  flex-direction: column;
`;
function Login() {
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [users, setUsers] = useState([]);
  const onValid = (data) => {
    const { email, password1, password2 } = data;
    if (password1 === password2) {
      setUsers((prev) => [...prev, { email, password1 }]);
      reset();
    } else {
      setError(
        "password2",
        { message: "비밀번호를 확인해줏요" },
        { shouldFocus: true }
      );
    }
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          register={register("email", {
            minLength: {
              value: 5,
              message: "너무 짧아!",
            },
          })}
          type={"text"}
          name={"email"}
        />
        <span>{errors?.email?.message}</span>
        <Input
          register={register("password1", { required: "메시지를 입력하세요" })}
          type={"password"}
          name={"password1"}
        />
        <span>{errors?.password1?.message}</span>
        <Input
          register={register("password2", { required: true })}
          type={"password"}
          name={"password2"}
        />
        <span>{errors?.password2?.message}</span>
        <button>add</button>
      </Form>
      <div>
        {users.map((user) => (
          <div>
            <h3>{user.email}</h3>
            <span>{user.password}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
}
export default Login;
