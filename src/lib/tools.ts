export type Tool = {
  title: string;
  link?: string;
  image: string;
};

export const tools: Tool[] = [
  { title: "Java", link: "https://www.java.com", image: "java.png" },
  { title: "Python", link: "https://www.python.org", image: "python.png" },
  { title: "React", link: "https://reactjs.org", image: "react.svg" },
  { title: "Tailwind", link: "https://tailwindcss.com", image: "tailwind.png" },
  { title: "Next.js", link: "https://nextjs.org", image: "nextjs.png" },
  {
    title: "Ruby on Rails",
    link: "https://rubyonrails.org",
    image: "rails.png",
  },
  { title: "Supabase", link: "https://supabase.com", image: "supabase.png" },
  {
    title: "PostgreSQL",
    link: "https://www.postgresql.org",
    image: "postgresql.png",
  },
];
