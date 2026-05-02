"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa6";

const SignUpPage = () => {
  const router = useRouter();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      // Login successful hole homepage-e pathiye din
      router.push("/");
      router.refresh(); // Session update korar jonno eita kora bhalo
    }
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            LogIn Your Account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Complete Login with your information
          </p>
        </div>

        {/* Form Section */}
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="example@gmail.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-sm text-lg font-bold text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all active:scale-95"
            >
              Login
            </button>
            <br />
            <button
              onClick={handleGoogle}
              className="w-full flex justify-center items-center gap-2 btn btn-outline py-4 px-4  rounded-2xl shadow-sm text-sm md:text-lg font-bold"
            >
              <FaGoogle /> Signin With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
