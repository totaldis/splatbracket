import { createLazyFileRoute } from '@tanstack/react-router'
import Projects from '../components/projects'

export const Route = createLazyFileRoute('/projects')({
  component: Projects,
})