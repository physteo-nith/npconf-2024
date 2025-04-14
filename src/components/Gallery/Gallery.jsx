import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";

const Gallery = () => {
  const galleryData = {
    "2024": [
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791111/ABRAXAS-Gallery24/ooc5jgmm8myaieky4pbt.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791095/ABRAXAS-Gallery24/wamjxelybf8wcyl6dico.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791271/ABRAXAS-Gallery24/j8l7cfxtxgiitoxbh4qz.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791253/ABRAXAS-Gallery24/ndakojgncvvfzoxxvkgi.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791133/ABRAXAS-Gallery24/bbziza0ffuqnqhrg3re5.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791241/ABRAXAS-Gallery24/hpopde3httnqpyvnwn2o.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791127/ABRAXAS-Gallery24/fldhgtujt5fc4npg8bcq.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791081/ABRAXAS-Gallery24/s5zbyqui5zv3b0dfbxbj.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791050/ABRAXAS-Gallery24/ou0mggpmpie6nxze3fvy.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791047/ABRAXAS-Gallery24/vqtswrd0uiia6vuijaxy.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791263/ABRAXAS-Gallery24/tde9p4okprtudkcaazre.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791066/ABRAXAS-Gallery24/yyqwf9x1uymoxz7fnsdk.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712790962/ABRAXAS-Gallery24/pude5plcom6q0xbtq2dy.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712793846/ABRAXAS-Gallery24/tfo3lskopqcx1uccmv6m.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791247/ABRAXAS-Gallery24/yivjfkaqdkt4sxxb9vo4.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269369/Screenshot_20240818-184421_fdkyb6.png",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269369/Screenshot_20250131-015712_Photos_aq4hzd.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269369/Screenshot_20250131-015648_Photos_foxja7.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269369/Screenshot_20250131-015738_Photos_ub228u.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269370/Screenshot_20250131-015833_Photos_idujq9.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269369/Screenshot_20250131-015755_Photos_yzjgje.jpg"
    ],
    "2023": [
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786020/ABRAXAS-Gallery/p4bfierd3hosdoawdzsy.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786006/ABRAXAS-Gallery/da1doedbfe6wfipyavmj.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786046/ABRAXAS-Gallery/czvg2fqh4pvsxnkezygo.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786102/ABRAXAS-Gallery/isrmwvh6wrzphavwqwz0.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786158/ABRAXAS-Gallery/wwfnjka7a7f79sms8k3h.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786128/ABRAXAS-Gallery/c8bzhu4vs5q7pac4lhg7.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786235/ABRAXAS-Gallery/rg85siezkcvt2bqp0wvz.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786260/ABRAXAS-Gallery/tepp6edaclwjozdlka9c.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786197/ABRAXAS-Gallery/fk5bva4o27pzmhpkasms.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786189/ABRAXAS-Gallery/jkxzltsyrq2ougu3g7yx.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786196/ABRAXAS-Gallery/beojwnkbswr2bp0yqge6.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786183/ABRAXAS-Gallery/j67owgbkvtsjerbotvob.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786228/ABRAXAS-Gallery/tfopj6kz3nyxfhx2s1ae.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786260/ABRAXAS-Gallery/ziuw6xbziugszlap3dvf.jpg",
      "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786178/ABRAXAS-Gallery/a7txsa3jgy3ibf0hq6gh.jpg"
    ],
    "2025":[
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269372/Screenshot_20250131-015950_Photos_uhykne.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269371/Screenshot_20250131-015927_Photos_l0uv7j.png",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269372/Screenshot_20250131-020027_Photos_zxmpqf.png",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082714/WhatsApp_Image_2025-03-27_at_19.04.38_1_plfgii.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082714/WhatsApp_Image_2025-03-27_at_19.04.38_xlyv3m.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082715/WhatsApp_Image_2025-03-27_at_19.04.40_r6nnys.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082717/WhatsApp_Image_2025-03-27_at_19.04.32_1_wrbqpk.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082718/WhatsApp_Image_2025-03-27_at_19.04.33_v61wkt.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082718/WhatsApp_Image_2025-03-27_at_19.04.32_2_syh2b7.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082715/WhatsApp_Image_2025-03-27_at_19.04.35_1_ktbqqe.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082715/WhatsApp_Image_2025-03-27_at_19.04.37_1_htpwyt.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082716/WhatsApp_Image_2025-03-27_at_19.04.37_mg9xlk.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082716/WhatsApp_Image_2025-03-27_at_19.04.35_qlocpd.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082716/WhatsApp_Image_2025-03-27_at_19.04.34_2_bdccj0.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082716/WhatsApp_Image_2025-03-27_at_19.04.34_1_xdtmbb.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082717/WhatsApp_Image_2025-03-27_at_19.04.34_z8lk1v.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082718/WhatsApp_Image_2025-03-27_at_19.04.33_2_okvkys.jpg",
    
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082718/WhatsApp_Image_2025-03-27_at_19.04.33_3_md4hsf.jpg",
      "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082719/WhatsApp_Image_2025-03-27_at_19.04.33_1_py7ikr.jpg"
    ],
  };

  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + galleryData[selectedYear].length) % galleryData[selectedYear].length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryData[selectedYear][newIndex]);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % galleryData[selectedYear].length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryData[selectedYear][newIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === "ArrowLeft") handlePrevImage(e);
        if (e.key === "ArrowRight") handleNextImage(e);
        if (e.key === "Escape") setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentImageIndex, selectedYear]);

  return (
    <div className="h-screen overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="flex space-x-6">
            {Object.keys(galleryData).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-500 
                  ${selectedYear === year
                    ? "bg-gradient-to-r from-purple-900 to-blue-700 shadow-lg shadow-purple-500/25 scale-105 transform"
                    : "bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 transform"
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 perspective-1000" 
        >
          <AnimatePresence>
            {galleryData[selectedYear].map((image, index) => (
              <motion.div
                key={image}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  rotateX: 2,
                  rotateY: 2,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  z: 50,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                className="group relative preserve-3d"
                onClick={() => handleImageClick(image, index)}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-transparent backdrop-blur-sm p-2">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <Camera className="w-5 h-5" />
                        <span className="text-sm font-medium">View Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-transparent backdrop-blur-md z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative w-full max-w-7xl px-4">
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-[85vh] object-contain rounded-2xl"
                />
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>

                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;