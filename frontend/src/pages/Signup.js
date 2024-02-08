const Signup = ()=>{
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="w-[40%] border-2 border-gray-300 rounded-lg">
                <div className="w-full flex flex-col justify-center items-center pb-4">
                    <h1 className="text-center text-[30px]">Signup Page</h1>
                    <p className="text-center text-[20px]">Provide your credentials to Signup.</p>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <input className="w-[80%] border-2 border-gray-300" type="text" placeholder="Username" />
                    <input className="mt-4 w-[80%] border-2 border-gray-300" type="password" placeholder="Password" />
                    <button className="mt-4 w-[80%] border-2 bg-gray-300">Signup</button>
                </div>
                <div className="w-full flex flex-col justify-center items-center m-4">
                    <p>Already have an account?</p>
                    <a className="text-blue-500" href="/login">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Signup