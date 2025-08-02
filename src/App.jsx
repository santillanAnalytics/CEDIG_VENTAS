import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";  // <-- importa useInView
import Navbar from './Components/Navbar';
import Seguros from './Components/Seguros';
import Consumos from './Components/consumos';
import Tarjetas from './Components/tarjetas';
import Tusganancias from './Components/tusganancias';

import Ganamas from './Components/Ganamas';

import Footer from './Components/Footer';

import FloatingButtons from './Components/FloatingButtons';


// Crea un componente que envuelva cada sección y controle la animación al entrar en viewport
function AnimatedSection({ id, children, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,  // solo la primera vez que entra
    threshold: 0.1,     // 10% visible para disparar
  });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AnimatedSection id="tusganancias" delay={0}><Tusganancias/></AnimatedSection>
        <AnimatedSection id="Seguros" delay={0.2}><Seguros/></AnimatedSection>
        <AnimatedSection id="consumos" delay={0.4}><Consumos/></AnimatedSection>
        <AnimatedSection id="tarjetas" delay={0.6}><Tarjetas/></AnimatedSection>
        


       
        <AnimatedSection id="ganamas" delay={0.8}><Ganamas/></AnimatedSection>
       
      </main>
      <FloatingButtons />
      <Footer />
    </>
  );
}

export default App;
