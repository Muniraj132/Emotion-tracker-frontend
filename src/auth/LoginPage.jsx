import React, { useEffect, useState } from "react";


const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        if (!email || !password) {
            setError("Please fill in both fields.");
            return;
        }
        onLogin({ email, password });
    };
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="min-h-1/2 transparent border rounded-2xl">
                <div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
                    <div className="flex justify-center gap-4 text-5xl mb-6 animate-pulse">
                        <span>😊</span>
                        <span>🌸</span>
                        <span>☀️</span>
                        <span>🌈</span>
                        <span>💖</span>
                    </div>
                    <h2 className="text-white text-2xl text-gray-800 text-center">
                        Welcome back 💛
                        <br />
                        Let’s take care of your emotions together.
                    </h2>
                    <input className="w-full p-2 text-white rounded-md  border text-gray-800"
                        placeholder="Enter your email" type="email" name="email" id="" />
                    <input className="w-full p-2 text-white rounded-md border" placeholder="Enter your password"
                        type="password" name="password" id="" />
                    <input className="w-full p-2 bg-gray-50 rounded-full font-bold  border"
                        type="submit" value="Login" id="" />

                    <p className="text-black">Don’t have an account yet? <a className="font-semibold text-sky-900" href="#">Sign up and let calmness guide your day 💫</a></p>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;
