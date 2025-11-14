import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageContext";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <About />
            <Portfolio />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}