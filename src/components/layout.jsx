import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export function Layout({ headerData, children }) {
  return (
    <main>
      <Header data={headerData} />
      {children}
      <Footer />
    </main>
  );
}
