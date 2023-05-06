import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import HomePage from "@/components/HomePage/HomePage";
import Footer from "@/components/Footer/Footer";
import _layout from "./_layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
