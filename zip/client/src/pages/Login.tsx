import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmail, signUpWithEmail } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, isAdmin, loading: authLoading } = useAuth();
  const { toast } = useToast();

  // Redirect to admin if already logged in as admin
  useEffect(() => {
    if (!authLoading && user && isAdmin) {
      navigate('/admin', { replace: true });
    }
    if (!authLoading && user && !isAdmin) {
      navigate('/', { replace: true });
    }
  }, [user, isAdmin, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = isLogin
        ? await signInWithEmail(email, password)
        : await signUpWithEmail(email, password);

      if (response.error) {
        console.error('Auth error:', response.error);
        throw response.error;
      }

      setEmail('');
      setPassword('');
      toast({
        title: isLogin ? "Login Successful" : "Account Created",
        description: isLogin ? "You have been signed in." : "Your account has been created successfully.",
      });

      // Wait for AuthContext to update before navigating
      const authCheckInterval = setInterval(() => {
        if (!authLoading && user) {
          clearInterval(authCheckInterval);
          if (isAdmin) {
            navigate('/admin', { replace: true });
          } else {
            navigate('/', { replace: true });
          }
        }
      }, 50); // Check every 50ms

    } catch (err: any) {
      if (!navigator.onLine) {
        setError('No internet connection. Please check your network and try again.');
        toast({
          title: "Connection Error",
          description: "No internet connection. Please check your network and try again.",
          variant: "destructive",
        });
      } else if (err.message?.includes('Failed to fetch') || err.message?.includes('NetworkError')) {
        setError('Unable to connect to authentication service. Please try again later.');
        toast({
          title: "Service Unavailable",
          description: "Unable to connect to authentication service. Please try again later.",
          variant: "destructive",
        });
      } else if (err.message?.includes('Invalid login credentials')) {
        setError('Invalid email or password.');
        toast({
          title: "Authentication Failed",
          description: "Invalid email or password.",
          variant: "destructive",
        });
      } else if (err.message?.includes('Email not confirmed')) {
        setError('Please confirm your email address before logging in.');
        toast({
          title: "Email Not Confirmed",
          description: "Please confirm your email address before logging in.",
          variant: "destructive",
        });
      } else {
        setError(err.message || (isLogin ? 'Failed to sign in.' : 'Failed to sign up.'));
        toast({
          title: "Authentication Error",
          description: err.message || (isLogin ? 'Failed to sign in.' : 'Failed to sign up.'),
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-kazimir">
            {isLogin ? 'Sign in to your account' : 'Create a new account'}
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin 
              ? 'Enter your credentials to access your account' 
              : 'Fill in the details below to create your account'}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email-address" className="text-sm font-medium">
                Email address
              </label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Processing...' : isLogin ? 'Sign in' : 'Sign up'}
            </Button>

            <Button
              type="button"
              variant="link"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
              className="w-full"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
