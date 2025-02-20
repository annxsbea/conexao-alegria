"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import imagemSobreNos from "../assents/logo1.png";
import { FaSquareFull } from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function QuemSomos() {
  return (
    <div className="flex justify-center items-center px-4 sm:px-10">
      <motion.section
        id="quem-somos"
        className="container mx-auto flex flex-col md:flex-row items-center md:px-32"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Imagem ao lado do texto */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            src={imagemSobreNos}
            alt="Logo Batisfer"
            className="w-60 sm:w-80 object-contain"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12 sm:mb-16 lg:mb-8 text-[#6B0808] border-b-2 border-[#6B0808] inline-block">
            Empresa
          </h2>

          <div className="flex items-start max-w-2xl text-center mb-6">
            <FaSquareFull size={12} className="text-black mt-4" />
            <p className="text-base ml-3 sm:text-lg mt-2 text-gray-700 text-justify">
              A Batisfer iniciou suas atividades em 2009 atuando na representação dos principais distribuidores de ferro e aço do país.
            </p>
          </div>

          <div className="flex items-start max-w-2xl text-center mb-6">
            <FaSquareFull size={14} className="text-black mt-4 " />
            <p className="text-base ml-3 sm:text-lg mt-2 text-gray-700 text-justify">
              No decorrer dos anos, percebeu a necessidade do mercado em produtos e serviços de corte, dobra e furação de chapas e vigas laminadas sob medida.
            </p>
          </div>

          <div className="flex items-start max-w-2xl text-center mb-6">
            <FaSquareFull size={15} className="text-black mt-4" />
            <p className="text-base ml-3 sm:text-lg mt-2 text-gray-700 text-justify">
              Com o compromisso de atender com excelência e investindo em maquinários novos, a Batisfer preza pela qualidade, segurança e o melhor prazo de entrega do mercado.
            </p>
          </div>

          <div className="flex justify-center">
            <a href="mailto:vendas@batisfer.com.br" className="text-base sm:text-lg text-[#6B0808] px-4 py-2 w-40 hover:bg-[#6B0808] hover:text-white">
              Consulte-nos!
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
