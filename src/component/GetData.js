import React, { useState, useEffect } from 'react';

const GetData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7057/api/My');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data from API:</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            
            <th>Name</th>
            <th>Owner</th>
            <th>species</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Death</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.name}>
                <td>{item.name}</td>
              <td>{item.owner}</td>
              <td>{item.species}</td>
              <td>{item.sex}</td>
              <td>{item.birth}</td>
              <td>{item.death}</td>
              {/* Add more table cells for additional data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetData;
