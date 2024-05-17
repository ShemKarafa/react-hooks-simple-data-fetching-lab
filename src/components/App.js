// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        setImage(data.message);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching dog image:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!image) return <p>Failed to load dog image.</p>;

  return (
    <div>
      <h2>A Dog :</h2>
      <img src={image} alt="A Random Dog" />
    </div>
  );
}

export default App;