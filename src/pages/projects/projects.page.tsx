import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./projects.module.scss";
import Layout from "@/components/Layout";
import TextSlider from "./components/TextSlider";
import { useTheme } from "next-themes";
import NextECommerce from "./projects/next-e-commerce";
import Swagno from "./projects/swagno";
import Catchup from "./projects/catchup";
import ChangeMyMind from "./projects/change-my-mind";
import ReactNativeShopping from "./projects/react-native-shopping";
import CtaLink from "@/components/CtaLink";

type Props = {};

export default function ProjectsPage({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <Head>
        <title>Projects | Anıl Şenay</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1>projects</h1>
          <h2>Some of my personal projects</h2>
          <TextSlider theme={currentTheme} />
          <div className={styles.projects}>
            <NextECommerce name="Next E-Commerce" theme={currentTheme} />
            <Swagno name="Swagno" theme={currentTheme} />
            <Catchup name="Catchup Figma Design" theme={currentTheme} />
            <ChangeMyMind name="Change My Mind" theme={currentTheme} />
            <ReactNativeShopping
              name="React Native Shopping App"
              theme={currentTheme}
            />
          </div>
          <CtaLink
            href="https://github.com/anilsenay"
            text="Check out my Github for more!"
            full
          />
        </main>
      </Layout>
    </>
  );
}