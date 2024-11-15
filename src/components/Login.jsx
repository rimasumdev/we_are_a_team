import { FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 lg:px-0 py-4 lg:py-10">
      <div className="card w-full max-w-lg shadow-2xl bg-base-100 shadow-gray-500/10 border border-primary/20">
        <div className="card-body">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent py-1">
              Your Game Begins Here
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-2 px-4 md:px-0">
              Log in to connect with the best athletes
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full pl-10"
                  required
                />
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full pl-10"
                  required
                />
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <label className="label">
                <Link
                  to="/forgot-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="space-y-3">
            <button className="btn btn-outline w-full">
              <FcGoogle className="mr-2" /> Login with Google
            </button>
            <button className="btn btn-outline w-full">
              <FaFacebook className="mr-2 text-blue-500" /> Login with Facebook
            </button>
          </div>

          <p className="text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="link link-primary">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
