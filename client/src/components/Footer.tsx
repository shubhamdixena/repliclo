import { Link } from "wouter";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 44" className="h-8 mb-6" aria-label="charity: water">
              <path d="M28.5,27.1h-21v-2.2c0-1.6,1-2.2,2.3-2.2h16.4c1.3,0,2.3,0.6,2.3,2.2V27.1z M26.2,2.9c-3.2,0-5.5,1.9-5.5,5.8 s2.3,5.8,5.5,5.8s5.5-1.9,5.5-5.8S29.4,2.9,26.2,2.9 M26.2,17.5c-5.6,0-9.1-3.6-9.1-8.8s3.4-8.8,9.1-8.8s9.1,3.6,9.1,8.8 S31.8,17.5,26.2,17.5 M9.8,2.9c-3.2,0-5.5,1.9-5.5,5.8s2.3,5.8,5.5,5.8c3.2,0,5.5-1.9,5.5-5.8S13,2.9,9.8,2.9 M9.8,17.5 c-5.6,0-9.1-3.6-9.1-8.8s3.4-8.8,9.1-8.8s9.1,3.6,9.1,8.8S15.4,17.5,9.8,17.5 M28.5,30.1V35c0,1.6-1,2.2-2.3,2.2H9.8 c-1.3,0-2.3-0.6-2.3-2.2v-4.9H28.5z" fill="#FFE01A"/>
              <path d="M44.3,17.8h-2.9v10.3h3c3.9,0,6.5-1.9,6.5-5.2C50.9,19.4,48,17.8,44.3,17.8 M44.2,31H38V15.1h6.4 c5.9,0,9.7,2.7,9.7,7.9C54.1,28.1,50,31,44.2,31 M60.3,15.1H63v13h7.9v2.8H60.3V15.1z M79.8,31h-2.7V15.1h2.7V31z M97.7,11.3 L88.1,36.4h-2.8l3-8.1l-5.9-13.2h3l4.4,10.1l4.1-10.1H97.7z M112.8,31h-10.5V15.1h10.2v2.7h-7.5v3.9h6.6v2.7h-6.6v3.9h7.8V31z M124.9,31 h-2.7V17.8h-5.3v-2.7h13.3v2.7h-5.3V31z M136.4,31h-2.7V15.1h2.7V31z M156.7,23.1c0-4.8-3.1-8.4-7.8-8.4c-4.8,0-7.9,3.6-7.9,8.4 s3.1,8.3,7.9,8.3C153.6,31.4,156.7,27.8,156.7,23.1 M138.2,23.1c0-6.4,4.2-10.7,10.7-10.7s10.6,4.4,10.6,10.7 c0,6.3-4.2,10.7-10.6,10.7S138.2,29.4,138.2,23.1 M162.1,15.1h3.1l6.9,10.9l2.3,4.2h0.2c-0.2-2-0.4-4.5-0.4-6.7v-8.4h2.7V31H174l-6.9-10.9 l-2.3-4.2h-0.2c0.2,2.1,0.4,4.3,0.4,6.7V31h-2.7V15.1z M190.1,15.1h2.7V31h-2.7V15.1z M209.3,24.9h-7.8V31h-2.7V15.1h11.5v2.7h-8.9 v4.3h7.8V24.9z M218.5,31h-2.7V15.1h2.7V31z M233,24.9h-7.8V31h-2.7V15.1H234v2.7h-8.9v4.3h7.8V24.9z M235.5,15.1h5.5 c5.5,0,9.4,3.2,9.4,7.9c0,4.7-3.9,7.9-9.3,7.9h-5.6V15.1z M240.8,28.2c4.4,0,7-2.1,7-5.2c0-3.1-2.6-5.2-7-5.2h-2.6v10.4H240.8z M261.6,31h-2.7V15.1h2.7V31z M269.8,28.3h9.1V31h-11.8V15.1h2.7V28.3z M296.2,31h-10.5V15.1h10.2v2.7h-7.5v3.9h6.6v2.7h-6.6v3.9 h7.8V31z M302,15.1h2.7V31H302V15.1z" fill="#FFFFFF"/>
            </svg>
            <p className="text-gray-400 mb-6">
              charity: water is a non-profit organization bringing clean and safe drinking water to people in developing countries.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Take Action</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Donate</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Fundraise</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Campaign</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Corporate Partnerships</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Legacy Giving</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Our Story</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Our Model</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Our Team</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Financials</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Career</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">charity: water</li>
              <li className="text-gray-400">40 Worth Street, Suite 330</li>
              <li className="text-gray-400">New York, NY 10013</li>
              <li className="text-gray-400">info@charitywater.org</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between">
            <p>&copy; {new Date().getFullYear()} charity: water. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of Service</Link>
              <Link href="#" className="hover:text-white">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
