import { set, useForm } from "react-hook-form";
import { API_URL } from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const Navigate = useNavigate();


    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, data, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 200) {
                toast.success("✅ Logged in successfully");

                const result = response.data;

                if (result.token) {
                    localStorage.setItem("token", result.token);
                    setTimeout(() => {
                        Navigate("/welcome");
                    }, 1000);
                }
            } else {
                console.warn("Unexpected status:", response.status);
                toast.error("❌ Login failed");
            }
        } catch (err) {
            console.error("Error during login:", err);

            if (err.response) {
                toast.error(`❌ ${err.response.data.message || "Login failed"}`);
            } else if (err.request) {
                toast.error("⚠️ Cannot reach server. Please check if backend is running.");
            } else {
                toast.error("Something went wrong: " + err.message);
            }
        }
    };
    useEffect(() => {
        document.body.classList.add("login-bg");
        return () => {
            document.body.classList.remove("login-bg");
        };
    }, []);


    return (

        <div className="flex">
            <div className="min-h-1/2 transparent rounded-2xl">
                <div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto flex space-y-4 py-16 font-semibold text-gray-500 flex-col">
                    <div className="flex justify-center gap-4 text-5xl mb-6 animate-pulse">
                        <span>😊</span>
                        <span>🌸</span>
                        <span>☀️</span>
                        <span>🌸</span>
                        <span>💖</span>
                    </div>
                    <h2 className="text-white text-2xl text-gray-800">
                        Welcome back 💛
                        <br />
                        Let’s take care of your emotions together.
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <input className="w-full p-2 text-white rounded-md  border text-gray-800" {...register("email", { required: true })}
                            placeholder="Enter your email" type="email" name="email" id="" />
                        {errors.email && <span className="text-red-500 text-sm text-left">Email is required</span>}
                        <input className="w-full p-2 text-white rounded-md border" {...register("password", { required: true })}
                            placeholder="Enter your password" type="password" name="password" id="" />
                        {errors.password && <span className="text-red-500 text-sm text-left">Password is required</span>}
                        <input className="w-full p-2 bg-gray-50 rounded-full font-bold  border" style={{ 'cursor': 'pointer' }}
                            type="submit" value="Login" id="" />
                    </form>
                    {/* <p className="text-black">Don’t have an account yet? <a className="font-semibold text-sky-900" href="#">Sign up and let calmness guide your day 💫</a></p> */}
                </div>
            </div>

        </div>
    );
};

export default LoginPage;
