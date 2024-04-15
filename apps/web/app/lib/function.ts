
export const handleLoginWithGithub = () => {
    window.open("/api/auth/github", "_self");	// This is the target attribute for the window. When set to _self, it instructs the browser to open the URL in the same window/tab that the script is being executed in. This means that the current page will be replaced by the content of the URL specified. _blank  is for the window to open the new tab
}