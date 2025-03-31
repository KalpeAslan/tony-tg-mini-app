import { SectionMessage } from '@/components';
import { FC } from 'react';
import Image from 'next/image';
import { BostItem } from '@/modules/core';
import styles from './row.module.css';

interface RowProps {
  packs: BostItem[];
}

const maxPackBlock = 64;

export const Row: FC<RowProps> = ({ packs }) => {
  return (
    <div className={styles.row}>
      {packs.map(pack => {
        const packCount: number = pack.count; // Replace with actual count from pack data
        
        return (
          <div key={pack.bostId} className="flex flex-col items-center justify-center">
            <div className="relative" style={{ width: '100px', height: '100px' }}>
              {/* Base image (always visible) */}
              <Image src={'/packs/card-small.png'} alt={pack.bostId.toString()} width={100} height={100} />
              
              {/* Middle image (visible if count > 1) */}
              {packCount > 1 && (
                <div 
                  className="absolute" 
                  style={{ 
                    top: '-4px', 
                    left: '4px', 
                    zIndex: 2
                  }}
                >
                  <Image src={'/packs/card-small.png'} alt={pack.bostId.toString()} width={100} height={100} />
                </div>
              )}
              
              {/* Top image (visible only if count = 64) */}
              {packCount === maxPackBlock && (
                <div 
                  className="absolute" 
                  style={{ 
                    top: '-8px', 
                    left: '8px', 
                    zIndex: 3
                  }}
                >
                  <Image src={'/packs/card-small.png'} alt={pack.bostId.toString()} width={100} height={100} />
                </div>
              )}
            </div>
            <SectionMessage size="extra-sm" color="dark">
              <p className="font-6 font-bold font-roboto">{`${packCount} Pack Item${packCount !== 1 ? 's' : ''} from ${maxPackBlock}`}</p>
            </SectionMessage>
          </div>
        );
      })}
    </div>
  );
};
