import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface LogoProps {
  isConnected: boolean;
}

export function Logo({ isConnected }: LogoProps) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full text-tony-light">
      <div
        className={cn(
          'relative  h-full w-full max-h-[300px]',
          isConnected ? 'min-h-[180px]' : 'min-h-[200px]'
        )}
      >
        <img src="/tony-eyes.png" alt="Eyes" className="absolute" />
      </div>

      <AnimatePresence>
        {!isConnected ? (
          <motion.div
            className="w-full max-h-[50px] top-0 z-10 absolute"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/tony-text.png" alt="Tony Text" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
