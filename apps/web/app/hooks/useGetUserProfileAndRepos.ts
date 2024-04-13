
const useGetUserProfileAndRepos = async (username: string = "HasCold") => {
  try {
    if(!username) throw new Error("Username is undefined");

    const res = await fetch("/api/userProfileAndRepo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username})
    });
    const userProfile = await res.json();
      return userProfile.data;

    } catch (error: any) {
     console.error(error.message);
     throw error; 
    }
}

export default useGetUserProfileAndRepos;