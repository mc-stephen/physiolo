"use client"

import { ReactNode } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";

export default function HeaderFooter({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
