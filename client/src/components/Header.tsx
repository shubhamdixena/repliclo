import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem 
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { signOut } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      const { error } = await signOut();
      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
        return;
      }
      
      // Show success toast
      toast({
        title: "Signed Out",
        description: "You have been successfully signed out.",
      });
      
      // Navigate to home page
      navigate('/');
    } catch (err) {
      console.error('Sign out error:', err);
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 44" className="h-6" aria-label="charity: water">
                <path d="M28.5,27.1h-21v-2.2c0-1.6,1-2.2,2.3-2.2h16.4c1.3,0,2.3,0.6,2.3,2.2V27.1z M26.2,2.9c-3.2,0-5.5,1.9-5.5,5.8 s2.3,5.8,5.5,5.8s5.5-1.9,5.5-5.8S29.4,2.9,26.2,2.9 M26.2,17.5c-5.6,0-9.1-3.6-9.1-8.8s3.4-8.8,9.1-8.8s9.1,3.6,9.1,8.8 S31.8,17.5,26.2,17.5 M9.8,17.5C4.2,17.5,0.8,14,0.8,8.8s3.4-8.8,9.1-8.8s9.1,3.6,9.1,8.8S15.4,17.5,9.8,17.5 M9.8,2.9 c-3.2,0-5.5,1.9-5.5,5.8s2.3,5.8,5.5,5.8s5.5-1.9,5.5-5.8S13,2.9,9.8,2.9 M35.2,27.1v3.7H0.8v-3.7H35.2z"></path>
                <path d="M44.3,17.8h-2.9v10.3h3c3.9,0,6.5-1.9,6.5-5.2C50.9,19.4,48,17.8,44.3,17.8 M44.2,31H38V15.1h6.4 c5.9,0,9.7,2.7,9.7,7.9C54.1,28.1,50,31,44.2,31 M60.3,15.1H63v13h7.9v2.8H60.3V15.1z M79.8,31h-2.7V15.1h2.7V31z M97.7,11.3 L88.1,36.4h-2.8l3-8.1l-5.9-13.2h3l4.4,10.1l4.1-10.1H97.7z"></path>
              </svg>
              <span className="text-charity-black font-bold">charity: water</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <DropdownMenu>
              <DropdownMenuTrigger className="px-0 py-2 flex items-center text-xs uppercase font-semibold tracking-wider text-gray-800">
                take action
                <ChevronDown className="h-3 w-3 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/donate">Give</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/spring">Join the Spring</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/fundraise">Fundraise</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="relative group">
            <DropdownMenu>
              <DropdownMenuTrigger className="px-0 py-2 flex items-center text-xs uppercase font-semibold tracking-wider text-gray-800">
                why water?
                <ChevronDown className="h-3 w-3 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/why-water">Learn More</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/solutions">Our Solutions</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="relative group">
            <DropdownMenu>
              <DropdownMenuTrigger className="px-0 py-2 flex items-center text-xs uppercase font-semibold tracking-wider text-gray-800">
                about us
                <ChevronDown className="h-3 w-3 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/about">Our Story</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/team">Our Team</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/careers">Careers</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-xs uppercase font-semibold tracking-wider text-gray-800">
                Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                className="text-xs uppercase font-semibold tracking-wider text-gray-800"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-xs uppercase font-semibold tracking-wider text-gray-800">
              Sign In
            </Link>
          )}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link
            to="#"
            className="px-4 py-1.5 bg-charity-yellow text-charity-black text-xs font-bold rounded-full"
          >
            GIVE
          </Link>
          
          {user ? (
            <button
              onClick={handleSignOut}
              className="px-4 py-1.5 bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs font-bold rounded-full"
            >
              SIGN OUT
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-1.5 bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs font-bold rounded-full"
            >
              LOGIN
            </Link>
          )}
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="block px-3 py-2 text-sm font-medium text-gray-800">TAKE ACTION</div>
            <div className="block px-3 py-2 text-sm font-medium text-gray-800">GET INVOLVED</div>
            <div className="block px-3 py-2 text-sm font-medium text-gray-800">GET TO KNOW US</div>
            <Link to="/about" className="block px-6 py-2 text-sm font-medium text-gray-600 pl-6">About Us</Link>
            <div className="block px-3 py-2 text-sm font-medium text-gray-800">WHY WATER?</div>
            {user ? (
              <button
                onClick={handleSignOut}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-800"
              >
                SIGN OUT
              </button>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-sm font-medium text-gray-800"
              >
                LOGIN
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
