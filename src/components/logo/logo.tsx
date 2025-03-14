import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface LogoProps {
  isConnected: boolean;
}

export function Logo({ isConnected }: LogoProps) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full text-tony-light">
      <motion.div
        className="w-full"
        animate={{
          scale: isConnected ? 1.3 : 1,
          transition: { duration: 0.5 },
        }}
        style={{
          maxHeight: isConnected ? '260px' : '200px',
        }}
      >
        <Image
          src="/tony-eyes.png"
          alt="Tony Eyes"
          width={100}
          height={100}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      <AnimatePresence>
        {!isConnected ? (
          <motion.div
            className="w-full max-h-[200px] z-10 absolute"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/tony-text.png"
              alt="Tony Text"
              width={100}
              height={100}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
