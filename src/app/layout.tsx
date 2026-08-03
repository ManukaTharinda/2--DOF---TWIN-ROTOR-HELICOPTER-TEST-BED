import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2-DOF TRT-01 · Twin Rotor Helicopter Test Bed",
  description:
    "A benchtop two-degree-of-freedom twin rotor test bed for pitch/yaw MIMO control research — documentation, user manual, media, and the team behind TRT-01.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text)] antialiased">
        {children}
      </body>
    </html>
  );
}
