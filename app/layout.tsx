import "./globals.css";

export const metadata = {
  title: "Bhooswarga",
  description: "Student marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}