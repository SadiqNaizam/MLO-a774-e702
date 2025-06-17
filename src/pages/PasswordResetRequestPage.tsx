import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormContainerCard from '@/components/FormContainerCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const PasswordResetRequestPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    // Add actual password reset logic here (e.g., API call)
    alert('If an account with ' + email + ' exists, a password reset link has been sent. Redirecting to login page.');
    navigate('/login');
  };

  console.log('PasswordResetRequestPage loaded');

  return (
    <FormContainerCard
      title="Forgot Your Password?"
      description="No worries! Enter your email address below and we'll send you a link to reset your password."
      footerContent={
        <p className="text-sm text-gray-600">
          Remember your password?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
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
          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
        </div>
      </form>
    </FormContainerCard>
  );
};

export default PasswordResetRequestPage;