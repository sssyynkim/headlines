import { useState, useEffect } from "react";

const API_KEY = "a5bcccaae83749599f7836772a7d6452";

async function getHeadlines() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apikey=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.articles.map((x) => ({ title: x.title, url: x.url }));
}

export function useNewsArticles() {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setHeadlines(await getHeadlines());
      setLoading(false);
    })();
  }, []);

  return { loading, headlines, error };
}
