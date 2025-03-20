import { FC, ReactNode } from 'react';

interface TaskProps {
  title: string;
  description?: string | ReactNode;
  img: string | ReactNode;
}

export const Task: FC<TaskProps> = ({ title, description, img }) => {
  const highlightNumbers = (text: string): ReactNode => {
    if (!text) return text;

    // Split the text by numbers using regex
    const parts = text.split(/(\d+)/);

    return parts.map((part, index) => {
      // Check if the part is a number
      if (/^\d+$/.test(part)) {
        return (
          <span key={index} style={{ color: '#FFD900' }}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  // Process description if it's a string
  const processedDescription =
    typeof description === 'string' ? highlightNumbers(description) : description;

  return (
    <div className="bg-card flex w-full min-h-[105px] border-white-translucent rounded-3xl px-2">
      <div className="flex-shrink-0 w-[84px] h-full flex items-center justify-center">
        {typeof img === 'string' ? (
          <img src={img} alt={title} className="w-[84px] h-[84px] object-cover" />
        ) : (
          img
        )}
      </div>
      <div className="flex-grow flex flex-col justify-center px-4">
        <h3 className="text-2xl text-white">{title}</h3>
        {processedDescription && (
          <div className="text-sm text-white mt-1 font-roboto">{processedDescription}</div>
        )}
      </div>
    </div>
  );
};
