import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleRegister}
          className="bg-slate-800 p-8 rounded-xl w-96"
        >
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 rounded bg-slate-700"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-2 rounded bg-slate-700"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-orange-500 py-2 rounded">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
