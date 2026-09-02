import "../globals.css";

export const metadata = {
  title: "USFans Index",
  description: "Independent USFans spreadsheet, finds, QC and international shipping research.",
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
