"use client";
<<<<<<< HEAD
import { navItems } from "@/data";
=======

import { navItems } from "@/data";

>>>>>>> 11f45acb383cb313b8e2faef3a1173cefbf541df
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
<<<<<<< HEAD
import{ FloatingNav } from "@/components/ui/FloatingNavbar";
=======
import { FloatingNav } from "@/components/ui/FloatingNavbar";

>>>>>>> 11f45acb383cb313b8e2faef3a1173cefbf541df
const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-12 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
<<<<<<< HEAD
       <Experience />
=======
        <Experience />
>>>>>>> 11f45acb383cb313b8e2faef3a1173cefbf541df
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
