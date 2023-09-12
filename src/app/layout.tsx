import "./globals.css";
import { SearchProvider } from "@/context/Search";

export const metadata = {
  title: "GregSoap HNG Stage two",
  description: "HNG task for stage two frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SearchProvider>
        <body>{children}</body>
      </SearchProvider>
    </html>
  );
}
