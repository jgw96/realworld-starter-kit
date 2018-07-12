const apiRoot = 'https://conduit.productionready.io/api';

export async function getTags() {
  const response = await fetch(`${apiRoot}/tags`);
  const data = await response.json();

  return data.tags;
}

export async function getGlobalArticles() {
  const response = await fetch(`${apiRoot}/articles`);
  const data = await response.json();
  
  return data.articles;
}