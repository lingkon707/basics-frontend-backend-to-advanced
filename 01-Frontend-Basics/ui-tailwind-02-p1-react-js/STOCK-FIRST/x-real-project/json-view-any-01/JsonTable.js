import React from 'react';
import { flattenJson } from './flattenJson';

export default function JsonTable({ data }) {
  if (!data) return null;

  const rows = Array.isArray(data) ? data : [data];

  const flattenedRows = rows.map(row => flattenJson(row));
  const allKeys = Array.from(new Set(flattenedRows.flatMap(row => Object.keys(row))));

  return (
    <div className="overflow-auto rounded border border-gray-300">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100 sticky top-0 z-10">
          <tr>
            {allKeys.map((key) => (
              <th key={key} className="px-4 py-2 text-left font-medium text-gray-700">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {flattenedRows.map((row, index) => (
            <tr key={index}>
              {allKeys.map((key) => (
                <td key={key} className="px-4 py-2 text-gray-800 whitespace-pre-wrap">
                  {row[key] !== undefined ? String(row[key]) : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
