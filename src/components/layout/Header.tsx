import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Løsninger", href: "/loesninger" },
  { name: "IT-sikkerhed", href: "/it-sikkerhed" },
  { name: "Datagendannelse", href: "/datagendannelse" },
  { name: "Online Support", href: "/online-support" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine text colors based on scroll state and page
  const textColorClass = isHomePage && !isScrolled
    ? "text-white/90 hover:text-white"
    : "text-muted-foreground hover:text-foreground";
  
  const activeTextColorClass = isHomePage && !isScrolled
    ? "text-white bg-white/10"
    : "text-foreground bg-secondary";

  const logoTextColor = isHomePage && !isScrolled
    ? "text-white"
    : "text-foreground";

  const logoSubtextColor = isHomePage && !isScrolled
    ? "text-white/60"
    : "text-muted-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          : "bg-white/5 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <nav className="container-premium">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Sorø Micro Soft" 
              className={`h-8 md:h-10 w-auto transition-all duration-300 group-hover:scale-105 ${
                isHomePage && !isScrolled ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  location.pathname === item.href
                    ? activeTextColorClass
                    : textColorClass
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:57821444"
              className={`flex items-center gap-2 text-sm transition-colors ${textColorClass}`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">57 82 14 44</span>
            </a>
            <Button variant="hero" size="sm" asChild>
              <Link to="/kontakt">Kontakt os</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isHomePage && !isScrolled
                ? "hover:bg-white/10 text-white"
                : "hover:bg-secondary text-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in bg-background/95 backdrop-blur-xl rounded-b-2xl">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border/50">
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/kontakt">Kontakt os</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
