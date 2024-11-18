"use client";

import CoverAlbum from "../assets/images/city-night-lights-cover.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@iconify/react";
import {
  Facebook,
  Instagram,
  Twitter,
  Music,
  Apple,
  Moon,
  Sun,
  Languages,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function BandPage() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSpanish, setIsSpanish] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  const translate = (english: string, spanish: string) => {
    return isSpanish ? spanish : english;
  };

  return (
    <div className="w-full">
       <video src={require('../assets/videos/circle.mp4')} autoPlay loop className="absolute -z-10 top-0 left-0 blur-lg"/>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className=" flex h-14 items-center justify-between">
          <Link className="flex items-center space-x-2 ml-12" href="#">
            <span className="font-bold">{translate("Balcon", "Balcon")}</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium mr-12">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#home"
            >
              {translate("Home", "Inicio")}
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#about"
            >
              {translate("About Us", "Sobre Nosotros")}
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#gallery"
            >
              {translate("Gallery", "Galería")}
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#contact"
            >
              {translate("Contact", "Contacto")}
            </Link>
            <div className="themeHandlerContainer ">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={translate("Toggle theme", "Cambiar tema")}
              >
                {isDarkTheme ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                aria-label={translate("Toggle language", "Cambiar idioma")}
              >
                <Languages className="h-5 w-5" />
              </Button>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1 ">
        <section
          id="home"
          className="flex flex-column items-center justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48"
        >
         
          <div className="container px-4 md:px-6  " >
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {translate("Welcome to Balcon", "Bienvenidos a Balcon")}
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-white">
                  {translate(
                    'Experience our latest album: City night lights',
                    'Experimenta nuestro último álbum: City night lights'
                  )}
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 ">
                <Image
                  src={CoverAlbum}
                  width={300}
                  height={300}
                  alt={translate("Album Cover", "Portada del Álbum")}
                  className="rounded-lg mx-auto"
                />
                <Button className="w-full" size="lg">
                  {translate("Listen Now", "Escuchar Ahora")}
                </Button>
                <div className="flex justify-center space-x-4 mt-4">
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Icon
                      icon="line-md:spotify"
                      width="2rem"
                      height="2rem"
                      style={{ color: "#FFFFFF" }}

                    />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Icon
                      icon="simple-icons:tidal"
                      width="2rem"
                      height="2rem"
                      style={{ color: "#FFFFFF" }}
                    />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Icon
                      icon="grommet-icons:apple-music"
                      width="2rem"
                      height="2rem"
                      style={{ color: "#FFFFFF" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className=" flex flex-column items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              {translate("About Us", "Sobre Nosotros")}
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={300}
                height={100}
                alt={translate("Band Photo", "Foto de la Banda")}
                className="rounded-lg mx-auto"
              />
              <div className="flex flex-col items-center space-y-4">
                <p className="text-gray-500 dark:text-gray-400 w-1/2 text-center md:w-full lg:text-left">
                  {translate( 
                    "We are a passionate group of musicians dedicated to creating unforgettable experiences through our music. Our journey began in [year] and since then, we've been pushing the boundaries of [genre] music.",
                    "Somos un grupo apasionado de músicos dedicados a crear experiencias inolvidables a través de nuestra música. Nuestro viaje comenzó en [año] y desde entonces, hemos estado empujando los límites de la música [género]."
                  )}
                </p>
                <p className="text-gray-500 dark:text-gray-400 w-1/2 text-center md:w-full lg:text-left ">
                  {translate(
                    "With influences ranging from [Influence 1] to [Influence 2], our sound is a unique blend that resonates with fans around the world. We've performed at numerous venues and festivals, always striving to connect with our audience through our energetic live shows.",
                    "Con influencias que van desde [Influencia 1] hasta [Influencia 2], nuestro sonido es una mezcla única que resuena con los fans de todo el mundo. Hemos actuado en numerosos lugares y festivales, siempre esforzándonos por conectar con nuestro público a través de nuestros enérgicos espectáculos en vivo."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="gallery"
          className=" flex flex-column items-center justify-center w-full py-12 md:py-24 lg:py-32"
        >
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              {translate("Gallery", "Galería")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  src={`/placeholder.svg?height=300&width=400&text=Image+${i}`}
                  width={400}
                  height={300}
                  alt={translate(
                    `Gallery Image ${i}`,
                    `Imagen de Galería ${i}`
                  )}
                  className="rounded-lg object-cover w-full h-full"
                />
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="flex flex-column items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              {translate("Contact Us", "Contáctanos")}
            </h2>
            <div className="mx-auto max-w-2xl">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name">{translate("Name", "Nombre")}</label>
                  <Input
                    id="name"
                    placeholder={translate("Your name", "Tu nombre")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">
                    {translate("Email", "Correo Electrónico")}
                  </label>
                  <Input
                    id="email"
                    placeholder={translate(
                      "Your email",
                      "Tu correo electrónico"
                    )}
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">
                    {translate("Message", "Mensaje")}
                  </label>
                  <Textarea
                    className=""
                    id="message"
                    placeholder={translate("Your message", "Tu mensaje")}
                    required
                  />
                </div>
                <Button type="submit">
                  {translate("Send Message", "Enviar Mensaje")}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {translate(
            "© 2024 Band Name. All rights reserved.",
            "© 2024 Nombre de la Banda. Todos los derechos reservados."
          )}
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MusicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function TidalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.41 9.06L12 14.65l5.59-5.59L12 3.47 6.41 9.06z" />
      <path d="M12 14.65l5.59 5.59L12 14.65l-5.59 5.59L12 14.65z" />
    </svg>
  );
}

function SpotifyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 11.8A5.5 5.5 0 0 1 14.5 7" />
      <path d="M9 15a4 4 0 0 1 4-4" />
      <path d="M11 17a2 2 0 0 1 2-2" />
    </svg>
  );
}

import React from "react";

export function LineMdSpotify(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="#6b7280"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path
          strokeDasharray={64}
          strokeDashoffset={64}
          d="M2 12c0 -5.52 4.48 -10 10 -10c5.52 0 10 4.48 10 10c0 5.52 -4.48 10 -10 10c-5.52 0 -10 -4.48 -10 -10Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          ></animate>
        </path>
        <path
          strokeDasharray={8}
          strokeDashoffset={8}
          d="M8.63 15.31c2.18 -0.58 4.49 -0.34 6.5 0.69"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="8;0"
          ></animate>
        </path>
        <path
          strokeDasharray={12}
          strokeDashoffset={12}
          d="M7.5 12.07c1.1 -0.37 2.28 -0.57 3.5 -0.57c2.02 0 3.92 0.55 5.55 1.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.8s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
        <path
          strokeDasharray={14}
          strokeDashoffset={14}
          d="M7 8.91c1.38 -0.59 2.9 -0.91 4.5 -0.91c2.41 0 4.65 0.74 6.5 2"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1s"
            dur="0.2s"
            values="14;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
export function SimpleIconsTidal(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#6b7280"
        d="M12.012 3.992L8.008 7.996L4.004 3.992L0 7.996L4.004 12l4.004-4.004L12.012 12l-4.004 4.004l4.004 4.004l4.004-4.004L12.012 12l4.004-4.004zm4.03 4.004l3.979-3.979L24 7.996l-3.979 3.979z"
      ></path>
    </svg>
  );
}

export function LineiconsAppleMusicAlt(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#6b7280"
        d="M10.374 14.349v-3.254h-.021l-1.31 3.254h-.5l-1.311-3.254H7.21v3.254h-.614V9.928h.78l1.405 3.523h.024l1.402-3.523h.783v4.421zm4.012 0h-.623v-.545h-.015c-.175.386-.497.603-.981.603c-.69 0-1.111-.456-1.111-1.195v-2.086h.65v1.958c0 .49.229.753.677.753c.47 0 .753-.33.753-.833v-1.878h.65zm1.781-3.281c.738 0 1.216.416 1.238 1.01h-.611c-.037-.312-.262-.508-.627-.508c-.352 0-.587.175-.587.432c0 .202.145.34.488.42l.515.12c.647.152.894.41.894.875c0 .589-.54.993-1.285.993c-.792 0-1.268-.395-1.328-1.008h.644q.088.504.684.503c.39 0 .632-.166.632-.43c0-.208-.118-.33-.464-.41l-.515-.122c-.602-.141-.9-.435-.9-.904c0-.576.494-.971 1.222-.971m1.76-.794a.375.375 0 1 1 .75 0c0 .208-.165.38-.373.38a.38.38 0 0 1-.376-.38m.052.852h.65v3.223h-.65zm3.395 1.109c-.066-.343-.32-.616-.744-.616c-.502 0-.833.426-.833 1.118c0 .708.334 1.119.84 1.119c.4 0 .662-.224.737-.598H22c-.07.686-.608 1.152-1.37 1.152c-.905 0-1.495-.631-1.495-1.673c0-1.023.59-1.67 1.49-1.67c.815 0 1.312.534 1.369 1.168zM4.608 10.359c-.168.201-.435.36-.702.337c-.035-.272.099-.561.25-.738a1.04 1.04 0 0 1 .696-.367c.029.284-.081.561-.244.769m.24.39c.151.012.585.06.863.477c-.023.018-.515.307-.51.914c.007.725.626.966.631.973c-.005.017-.098.341-.323.677c-.197.295-.4.584-.724.59c-.312.005-.417-.189-.775-.189s-.475.183-.77.194c-.312.012-.55-.312-.746-.607c-.405-.595-.712-1.68-.295-2.41c.202-.365.573-.595.972-.601c.307-.006.59.206.775.206s.515-.247.903-.224"
      ></path>
    </svg>
  );
}

export function GrommetIconsAppleMusic(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <g clipPath="url(#grommetIconsAppleMusic1)">
          <path
            fill="url(#grommetIconsAppleMusic0)"
            fillRule="evenodd"
            d="M21.992 22.816c.768-.592 1.304-1.424 1.536-2.016c.464-1.192.472-2.544.472-3.4V6.6c0-.848 0-2.208-.472-3.4c-.232-.592-.776-1.432-1.536-2.016a5 5 0 0 0-1.688-.88C19.528.08 18.584 0 17.4 0H6.6C5.416 0 4.472.08 3.696.304a5.1 5.1 0 0 0-1.688.88C1.24 1.776.704 2.608.472 3.2C.008 4.392 0 5.744 0 6.6v10.8c0 .856.008 2.208.472 3.4c.232.592.776 1.432 1.536 2.016c.44.344.968.664 1.688.88c.776.224 1.72.304 2.904.304h10.8c1.184 0 2.136-.072 2.904-.304a5.1 5.1 0 0 0 1.688-.88m-5.706-19.05c.062-.013.576-.104.634-.11c.385-.033.6.22.6.63v11.289c0 .303-.003.577-.067.881a2.2 2.2 0 0 1-.348.821a2.1 2.1 0 0 1-.655.606a2.6 2.6 0 0 1-.831.303c-.552.11-.93.136-1.284.065a1.8 1.8 0 0 1-.864-.44a1.88 1.88 0 0 1-.604-1.184a1.9 1.9 0 0 1 .51-1.488c.197-.207.445-.37.776-.499c.347-.134.729-.215 1.317-.333l.464-.094c.205-.041.379-.093.52-.265s.144-.384.144-.593V8.084c0-.404-.182-.514-.566-.44c-.276.054-6.19 1.247-6.19 1.247c-.333.08-.45.19-.45.603v7.722c0 .303-.015.578-.08.882a2.2 2.2 0 0 1-.348.82a2.1 2.1 0 0 1-.654.606a2.6 2.6 0 0 1-.831.307c-.552.112-.93.136-1.284.065a1.8 1.8 0 0 1-.864-.443a1.86 1.86 0 0 1-.59-1.184a1.87 1.87 0 0 1 .496-1.488c.197-.208.445-.371.776-.5c.347-.134.729-.214 1.317-.333l.464-.093c.204-.042.379-.094.52-.266c.14-.172.157-.374.157-.582V6.104c0-.12.01-.201.016-.241a.72.72 0 0 1 .24-.462a1 1 0 0 1 .443-.2h.003z"
            clipRule="evenodd"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="grommetIconsAppleMusic0"
            x1={12}
            x2={12}
            y1={23.907}
            y2={0.517}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6b7280"></stop>
            <stop offset={1} stopColor="#6b7280"></stop>
          </linearGradient>
          <clipPath id="grommetIconsAppleMusic1">
            <path fill="#fff" d="M0 0h24v24H0z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  );
}
