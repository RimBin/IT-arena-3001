import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import MiniCart from "@/components/cart/MiniCart";
export default function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  // We already set <html>/<body> in root layout.
  // Add site header/footer around page content.
  return (
    <CartProvider>
      <Header />
      <MiniCart />
      <div className="container mx-auto p-6">{children}</div>
      <Footer />
    </CartProvider>
  );
}
