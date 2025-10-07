'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function APIFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      {data.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  );
}
