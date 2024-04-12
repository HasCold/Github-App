
const useGetUserProfileAndRepos = async (username: string) => {
  console.log("P", process.env.GITHUB_API_KEY);

  try {
    const res = await fetch("https://api.github.com/users/" + username, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`
      }
    });
    const userProfile = await res.json();
      return userProfile;

    } catch (error: any) {
     console.error(error.message);
     throw error; 
    }
}

export default useGetUserProfileAndRepos;