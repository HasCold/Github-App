
const useGetUserProfileAndProps = async () => {
    try {
      const res = await fetch("https://api.github.com/users/HasCold");
      const userProfile = await res.json();
      return userProfile;

    } catch (error: any) {
     console.error(error.message);
     throw error; 
    }
}

export default useGetUserProfileAndProps;