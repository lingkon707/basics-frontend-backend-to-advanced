// app/components/DisplayObject.js
const DisplayObject = ({ data, parentKey = '' }) => {
  if (typeof data !== 'object' || data === null) {
    return (
      <div className="mb-2">
        <strong>{parentKey}:</strong> {data}
      </div>
    );
  }

  return (
    <div className="ml-4">
      {Object.keys(data).map((key) => {
        const value = data[key];
        const fullKey = parentKey ? `${parentKey}.${key}` : key;

        return (
          <div key={fullKey} className="mb-2">
            <strong>{fullKey}:</strong>
            {typeof value === 'object' ? (
              <DisplayObject data={value} parentKey={fullKey} />
            ) : (
              ` ${value}`
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DisplayObject;
