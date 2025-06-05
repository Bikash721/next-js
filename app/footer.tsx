export default function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 py-6 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ISMT College. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
