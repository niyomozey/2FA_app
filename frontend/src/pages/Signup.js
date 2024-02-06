const Signup = ()=>{
    return (
        <div>
            <div>
                <div>
                    <h1>Signup Page</h1>
                    <p>Provide your credentials to Signup.</p>
                </div>
                <div>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Signup</button>
                </div>
                <div>
                    <p>Already have an account?</p>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Signup