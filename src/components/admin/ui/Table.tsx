"use client";

import React from 'react';

interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (row: T) => string;
  emptyMessage?: string;
}

export default function Table<T>({ data, columns, keyExtractor, emptyMessage = "No data available." }: TableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-[#2a364a] bg-[#0f1523]/80 backdrop-blur-sm">
      <table className="w-full text-left text-sm text-gray-300">
        <thead className="bg-[#141b2d] text-xs uppercase text-gray-400 border-b border-[#2a364a]">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className={`px-6 py-4 font-medium tracking-wider ${col.className || ''}`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#1a2333]">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-8 text-center text-gray-500">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={keyExtractor(row)} className="hover:bg-[#1a2333]/50 transition-colors group">
                {columns.map((col, index) => (
                  <td key={index} className={`px-6 py-4 whitespace-nowrap ${col.className || ''}`}>
                    {typeof col.accessor === 'function' ? col.accessor(row) : (row[col.accessor] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
