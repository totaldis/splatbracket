import { createLazyFileRoute } from '@tanstack/react-router'
import LoadBracket from '../components/loadbracket'

export const Route = createLazyFileRoute('/load')({
  component: LoadBracket,
})