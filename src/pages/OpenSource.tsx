import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OSSCatalog from "@/components/oss/OSSCatalog";

const OpenSource = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      <main className="pt-16">
        <OSSCatalog />
      </main>
      <Footer />
    </div>
  );
};

export default OpenSource;
