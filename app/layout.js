import "./globals.css";

export const metadata = {
  title: "Blossom School ERP",
  description: "Blossom Kindergarten Senior Secondary School, Banswara"
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}