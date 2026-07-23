
export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 md:px-12 lg:px-20">
      <div className="max-w-8xl mx-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 border-b border-gray-700 pb-8">
          {/* Logo & Description */}
          <div className="max-w-sm">
            <div className="w-16 h-8 bg-gray-300 mb-4 flex items-center justify-center text-black font-bold text-sm">
              LOGO
            </div>
            <p className="text-sm text-gray-300">
              We are more than a technology provider; we are your strategic partner in progress.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4">
              <span className="cursor-pointer">❌</span>
              <span className="cursor-pointer">📷</span>
              <span className="cursor-pointer">💼</span>
            </div>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-10">
          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-3">Industries</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>High Tech</li>
              <li>Banking and Finance</li>
              <li>Health Sciences</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300  text-sm">
              <li>Industries</li>
              <li>Products</li>
              <li>Resources</li>
              <li>Company</li>
            </ul>
          </div>

          {/* Contact Sales */}
          <div>
            <h3 className="font-semibold mb-3">Contact Sales</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>info@abc.com</li>
              <li>040-7418529630</li>
            </ul>
          </div>

          {/* Stay up to date */}
          <div>
            <h3 className="font-semibold mb-3">Stay Up to date</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our insights, our monthly look at the critical issues facing global businesses.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded bg-transparent border border-gray-600 text-sm focus:outline-none"
              />
              <button className="bg-gray-600 text-white px-4 py-2 rounded text-sm">SUBMIT</button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-400 gap-4 border-t border-gray-700 pt-6">
          <p>2025 Abc Technologies. All rights reserved</p>

          <div className="flex flex-wrap gap-6">
            <span>Security Policy</span>
            <span>Privacy Policy</span>
            <span>Terms of service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
