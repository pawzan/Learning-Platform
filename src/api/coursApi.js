import React, { useState, useEffect } from "react";

const useFetchAPI = (url) => {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCourse(data);
          setIsLoading(false);
        });
    }, 500);
  }, []);
};

export default useFetchAPI;
