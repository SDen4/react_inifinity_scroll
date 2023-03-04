export async function httpRequest(
  user: string,
  page?: number,
): Promise<unknown> {
  const p = page ? `&page=${page}` : '';
  let status = null;

  const allData = await fetch(
    `https://api.github.com/search/users?q=${user.trim()}&per_page=30${p}`,
  ).then((res) => {
    status = res.status;

    return res.json();
  });

  if (status !== 200) {
    throw new Error('Request error!');
  }

  return allData;
}
