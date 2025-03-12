export interface ProjectsData {
  id: number
  category: string
  days: number
  title: string
  fundsToRaise: number
  fundsRaised: number
  image: string
}

export const projects: ProjectsData[] = [
  {
    id: 0,
    category: 'Technology',
    days: 110,
    title: 'VR Ears | Hear off-World Listen Off Ear',
    fundsToRaise: 2000000,
    fundsRaised: 400000,
    image: '/project-1.jpg',
  },
  {
    id: 1,
    category: 'Design',
    days: 104,
    title: 'Notebook for your creative observation',
    fundsToRaise: 1000000,
    fundsRaised: 200000,
    image: '/project-2.jpg',
  },
  {
    id: 2,
    category: 'Fashion',
    days: 90,
    title: 'Smart Reach Audio Software',
    fundsToRaise: 4000000,
    fundsRaised: 700000,
    image: '/project-3.jpg',
  },
  {
    id: 3,
    category: 'Film & Videos',
    days: 209,
    title: 'British Wildlife Illustrated Gift Wrap',
    fundsToRaise: 6000000,
    fundsRaised: 300000,
    image: '/project-4.jpg',
  },
]
