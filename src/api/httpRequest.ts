import { postObject } from 'utils/postObject';

export async function httpRequest(
  path: string,
  params?: { [key: string]: string | number },
): Promise<unknown> {
  let status = null;

  const allData = await fetch(
    `https://api.github.com/search/users?q=${path.trim()}&per_page=30`,
    params && postObject(params),
  ).then((res) => {
    status = res.status;

    return res.json();
  });

  if (status !== 200) {
    throw new Error('Request error!');
  }

  return allData;
}
