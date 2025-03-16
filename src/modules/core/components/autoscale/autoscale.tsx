'use client';

import { useState, useRef, useEffect, PropsWithChildren } from 'react';

export function AutoScale({ children }: PropsWithChildren) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (contentRef.current) {
        // Получаем высоту содержимого
        const contentHeight = contentRef.current.scrollHeight;
        // Доступная высота экрана
        const viewportHeight = window.innerHeight;
        // Вычисляем коэффициент масштабирования
        const newScale = viewportHeight / contentHeight;
        // Применяем масштабирование только если содержимое больше экрана
        setScale(newScale < 1 ? newScale : 1);
      }
    };

    // Обновляем масштаб при первой загрузке и при изменении размера окна
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [contentRef.current]);

  return (
    <div
      data-testid="autoscale"
      className="w-full overflow-hidden flex justify-center items-start"
      style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
