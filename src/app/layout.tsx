import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import { CartProvider } from "./Context/store";
import { CartProductsProvider } from "./Context/cartProducts";
import { Provider } from "react-redux";
import Providers from "./components/Providers";

export const metadata = {
  title: "Essential Herbs ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Providers>
          <CartProvider>
            <CartProductsProvider>
              <Navbar />
              {children}
              <Footer />
            </CartProductsProvider>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
