import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormContainerCard from '@/components/FormContainerCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox'; // Assuming Checkbox is from shadcn/ui
import { Eye, EyeOff, Mail, KeyRound } from 'lucide-react'; // Icons for visual aid

const LoginPage = () => {
  const [email, setEmail] = useState('user@example.com'); // Default credentials for easier testing
  const [password, setPassword] = useState('password123');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login submitted with:', { email, password, rememberMe });
    // Add actual login logic here
    // For demo, navigate to a dummy dashboard or homepage after "login"
    alert('Login attempt with Email: ' + email + '. Check console for details. Redirecting to homepage.');
    navigate('/');
  };

  console.log('LoginPage loaded');

  return (
    <FormContainerCard
      title="Welcome Back!"
      description="Sign in to continue to your account."
      footerContent={
        <>
          <Link to="/reset-password" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </Link>
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="email">Email Address</Label>
          <div className="relative mt-1">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative mt-1">
            <KeyRound className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10 pl-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox
              id="remember-me"
              name="remember-me"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(Boolean(checked))}
            />
            <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </Label>
          </div>
        </div>

        <div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </div>
      </form>
    </FormContainerCard>
  );
};

export default LoginPage;