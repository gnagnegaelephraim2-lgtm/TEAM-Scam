
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  country: string;
  contribution: string;
  reflection: string;
  journal?: string;
  image: string;
}

export interface Challenge {
  id: string;
  title: string;
  date: string;
  description: string;
  impact: string;
  image: string;
}

export interface VideoItem {
  id: string;
  title: string;
  url: string;
  category: string;
  thumbnail: string;
}
