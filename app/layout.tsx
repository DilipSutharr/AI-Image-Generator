import ClientProvider from "@/components/ClientProvider";
import Header from "@/components/Header";
import PromptInput from "@/components/PromptInput";
import "../styles/globals.css";

export const metadata = {
  title: "AI Art Gallery",
  description: "AI Image Generator powered by DALL·E 2 and Chat GPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <Header />

          <PromptInput />

          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
