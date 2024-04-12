
const useExploreRepos = async (language: string) => {
  try {
    const res = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`);
    const data = await res.json();
    return data;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default useExploreRepos;