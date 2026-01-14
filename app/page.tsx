import ScrollWrapper from "@/components/ScrollWrapper";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen selection:bg-white/20">
      <ScrollWrapper />
      <Projects />

      {/* Footer */}
      <Footer />
    </main>
  );
}
