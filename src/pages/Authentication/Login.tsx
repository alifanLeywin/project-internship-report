import { useState } from 'react';
import { Box, Loader2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call - will be replaced with actual API
        setTimeout(() => {
            console.log('Login attempt:', { email, password });
            setIsLoading(false);
        }, 1500);
    };

    const handleGithubLogin = () => {
        console.log('GitHub login clicked');
    };

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Header with Logo */}
            <header className="p-6">
                <div className="flex items-center justify-center gap-2">
                    <Box className="w-6 h-6 text-white" />
                    <span className="text-white font-semibold">zzzLeywin</span>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-4 pb-16">
                <div className="w-full max-w-sm">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">
                            Login to your account
                        </h1>
                        <p className="text-neutral-400 text-sm">
                            Enter your email below to login to your account
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-800 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600"
                                placeholder="m@example.com"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-white">
                                    Password
                                </label>
                            
                            </div>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-800 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600"
                                required
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-2.5 px-4 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Loading...
                                </>
                            ) : (
                                'Login'
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-neutral-800"></div>
                        </div>
                        
                    </div>

                
                </div>
            </main>
        </div>
    );
}
