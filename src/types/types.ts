export default interface ProjectsLayoutProps {
  children: React.ReactNode;
}

export interface Project {
  title: string,
  tags: string[],
  route: string,
  color: string,
  type: string
}