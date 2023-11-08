import "./styles/style.scss";
import "./styles/tailwind.css";
import "./styles/horizon/horizon.scss";

export const metadata = {
  title: "Horizon framework",
  description: "Horizon framework UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
