import React from 'react';

function isPrimitive(value) {
  return value === null || typeof value !== 'object';
}

function RenderValue({ value }) {
  if (isPrimitive(value)) {
    return <span>{String(value)}</span>;
  }

  if (Array.isArray(value)) {
    // Array of primitives
    if (value.every(isPrimitive)) {
      return <span>[{value.map(String).join(', ')}]</span>;
    }

    // Array of objects -> render as sub-table
    return (
      <div className="ml-4 my-2 border rounded border-gray-300 overflow-auto">
        <RecursiveTable data={value} />
      </div>
    );
  }

  // Plain object -> render as key-value table
  return (
    <table className="ml-4 my-2 border border-gray-200 text-sm">
      <tbody>
        {Object.entries(value).map(([k, v], idx) => (
          <tr key={idx}>
            <td className="border px-2 py-1 font-medium bg-gray-50">{k}</td>
            <td className="border px-2 py-1"><RenderValue value={v} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function RecursiveTable({ data }) {
  if (!Array.isArray(data)) data = [data];

  const allKeys = Array.from(
    new Set(data.flatMap(obj => Object.keys(obj)))
  );

  return (
    <table className="min-w-full table-auto border-collapse text-sm">
      <thead className="bg-gray-100 sticky top-0">
        <tr>
          {allKeys.map((key) => (
            <th key={key} className="border px-4 py-2 text-left font-semibold text-gray-700">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx} className="even:bg-gray-50">
            {allKeys.map((key) => (
              <td key={key} className="border px-4 py-2 align-top">
                <RenderValue value={item[key]} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
