import { createLazyFileRoute } from '@tanstack/react-router'
import Counts from '../components/counts'

export const Route = createLazyFileRoute('/counts')({
  component: Counts,
})