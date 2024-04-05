
const useGetUserProfileAndRepos = async (username: string) => {
    try {
      const res = await fetch("https://api.github.com/users/" + username);
      const userProfile = await res.json();
      return userProfile;

    } catch (error: any) {
     console.error(error.message);
     throw error; 
    }
}

export default useGetUserProfileAndRepos;