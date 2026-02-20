import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enio Maiale — Senior Director of Software Engineering",
  description:
    "Personal website of Enio Maiale — Senior Director of Software Engineering at the Miami HEAT. Engineering leader, Agile practitioner, and software architect.",
  keywords: [
    "Enio Maiale",
    "software engineering",
    "engineering director",
    "Miami HEAT",
    "React",
    "C#",
    "Azure",
    "Agile",
  ],
  authors: [{ name: "Enio Maiale" }],
  openGraph: {
    title: "Enio Maiale — Senior Director of Software Engineering",
    description:
      "Engineering leader with expertise in building high-performing teams and scalable software systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
