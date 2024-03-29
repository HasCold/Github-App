export interface UserProfileProps {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    bio: string | null;
    blog: string;
    company: string | null;
    created_at: string;
    email: string | null;
    events_url: string;
    followers: number;
    following: number;
    hireable: boolean | null;
    location: string | null;
    name: string | null;
    organizations_url: string;
    public_gists: number;
    public_repos: number;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    twitter_username: string | null;
    type: string;
    updated_at: string;
      
    // [key: string]: string | number | boolean | null;
}