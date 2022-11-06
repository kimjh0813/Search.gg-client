const getGameVersion = async () => {
  const versionUrl = 'https://ddragon.leagueoflegends.com/api/versions.json';
  console.log('dd');
  return await fetch(versionUrl)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export { getGameVersion };
