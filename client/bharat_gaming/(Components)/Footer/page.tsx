

import { FaTwitter , FaInstagram , FaDiscord , FaTwitch } from "react-icons/fa"

export default function Footer(){
    return(
        <div>
             <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">GameHub</h3>
              <p className="text-gray-400 mb-4">
                India's premier gaming tournament platform for competitive and casual gamers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  <FaDiscord className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                  <FaTwitch className="text-xl" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Tournaments</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Browse Tournaments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Create Tournament</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Tournament Rules</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Prizes & Rewards</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} GameHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </div>
    )
}