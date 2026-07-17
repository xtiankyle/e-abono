import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import qrCode from '../assets/qr-code.png';

export const AppDownload = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-eabono-green" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-56 h-[460px] sm:w-64 sm:h-[520px] md:w-72 md:h-[580px] bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border-4 md:border-8 border-gray-800 relative">
                <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-24 md:w-32 h-5 md:h-7 bg-black rounded-full"></div>
                <div className="w-full h-full bg-white flex flex-col items-center justify-center p-5 sm:p-6 md:p-8 pt-10 sm:pt-12 md:pt-16">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8">
                    <img src="/image.png" alt="E-Abono Logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">E-Abono</h3>
                  </div>

                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white border-2 sm:border-3 md:border-4 border-gray-200 rounded-lg flex items-center justify-center p-3 md:p-4">
                    <img src={qrCode} alt="Scan to download E-Abono app" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Scan the QR Code to Download E-Abono
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-white mb-4 md:mb-6 lg:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
              Smart Snap, Grow Right: AI-Powered Nitrogen Detection for Healthier Crops and Better Yields. Transform your farming with instant crop analysis right from your smartphone.
            </p>
            <button className="bg-eabono-gold/20 backdrop-blur-sm border-2 border-eabono-gold text-eabono-gold px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-eabono-gold hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 md:gap-3">
              <Download size={20} className="sm:w-6 sm:h-6" />
              Download Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};