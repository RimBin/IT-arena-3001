export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="container mx-auto p-6 text-sm text-gray-600">
        © {new Date().getFullYear()} IT Arena. All rights reserved.
      </div>
    </footer>
  );
}
