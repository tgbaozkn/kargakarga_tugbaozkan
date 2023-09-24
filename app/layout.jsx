import Header from "@components/Home/Header";
import "@styles/global.css";


export const metadata = {
  title: "KargaKarga",
  description: "KargaKarga Frontend Task- Tugba Ozkan",
};
const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="h-screen">
    <Header/>{children}
    </body>
  </html>
);

export default RootLayout;
