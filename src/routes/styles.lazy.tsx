import { createLazyFileRoute } from '@tanstack/react-router'
import Styles from '../components/styles'

export const Route = createLazyFileRoute('/styles')({
  component: Styles,
})