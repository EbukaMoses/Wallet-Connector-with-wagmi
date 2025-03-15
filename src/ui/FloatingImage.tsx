import { motion } from "framer-motion";

const FloatingImage = ({ url, className }: { url: string, className: string }) => {
    return (
        <motion.img
            src={url} // Replace with your image path
            alt="Floating Image"
            className={`w-full ${className}`}
            animate={{
                y: [0, -10, 0], // Moves up and down
            }}
            transition={{
                duration: 2, // Time for one full cycle
                repeat: Infinity, // Loops forever
                repeatType: "mirror", // Moves back and forth smoothly
                ease: "easeInOut",
            }}
        />
    );
};

export default FloatingImage;
