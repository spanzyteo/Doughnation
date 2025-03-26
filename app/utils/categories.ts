import { IconType } from "react-icons"
import { CgIfDesign } from "react-icons/cg"
import { GiClothes } from "react-icons/gi"
import { MdOutlineVideoSettings } from "react-icons/md"
import { PiBookOpenText, PiStethoscopeBold } from "react-icons/pi"
import { RiSettings4Line } from "react-icons/ri"

export interface CategoryData {
  id: number
  name: string
  icon: IconType
  link: string
}

export const category: CategoryData[] = [
  {
    id: 0,
    name: 'Technology',
    icon: RiSettings4Line,
    link: '',
  },
  {
    id: 1,
    name: 'Videos',
    icon: MdOutlineVideoSettings,
    link: '',
  },
  {
    id: 2,
    name: 'Education',
    icon: PiBookOpenText,
    link: '',
  },
  {
    id: 3,
    name: 'Medical',
    icon: PiStethoscopeBold,
    link: '',
  },
  {
    id: 4,
    name: 'Fashion',
    icon: GiClothes,
    link: '',
  },
  {
    id: 5,
    name: 'Design',
    icon: CgIfDesign,
    link: ''
  },
]