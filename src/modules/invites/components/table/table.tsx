import { FC, ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
  className?: string;
  maxHeight?: string;
}

export const Table: FC<TableProps> = ({ children, className = '', maxHeight }) => {
  return (
    <div className={`table-t flex flex-col gap-2 overflow-y-auto ${className}`} style={{
      maxHeight: maxHeight
    }}>
      {children}
    </div>
  );
};

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

export const TableRow: FC<TableRowProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex w-full justify-between align-center p-4 border-t border-tony-whiteBorderMedium ${className}`}>
      {children}
    </div>
  );
};

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

export const TableCell: FC<TableCellProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {children}
    </div>
  );
}; 