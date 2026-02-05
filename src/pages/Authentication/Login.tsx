import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Login attempt:', { email, password });
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4">
            {/* Login Card */}
            <div className="w-full max-w-sm">
                <div className="bg-neutral-900 rounded-lg p-8 space-y-6">
                    {/* Header */}
                    <div className="space-y-1">
                        <h2 className="text-xl font-semibold text-white">
                            Login to your account
                        </h2>
                        <p className="text-sm text-neutral-400">
                            Enter your email below to login to your account
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-white"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-transparent"
                                placeholder="m@example.com"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-white"
                                >
                                    Password
                                </label>
                                <a
                                    href="#"
                                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-transparent"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-2 px-4 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Loading...' : 'Login'}
                        </button>

                        {/* Google Login */}
                    </form>

                    {/* Sign Up Link */}
                    <p className="text-center text-sm text-neutral-400">
                        Don't have an account?{' '}
                        <a
                            href="#"
                            className="text-white hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
