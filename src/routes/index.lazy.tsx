import { createLazyFileRoute } from '@tanstack/react-router'
import HomePage from '../components/homepage'

export const Route = createLazyFileRoute('/')({
  component: HomePage,
})
