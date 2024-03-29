
const useGetRepoResponse = async (repoUrl: string) => {
  try {
    const repoRes = await fetch(repoUrl);
    const repos = await repoRes.json();
    return repos;

  } catch (error: any) {
    console.error(error.message);
    throw error
  }
}

export default useGetRepoResponse;