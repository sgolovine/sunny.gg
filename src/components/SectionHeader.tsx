import { h } from 'preact'

type Props = {
  title: string
}

export const SectionHeader = ({ title }: Props) => (
  <div className="py-4">
    <h2 className="text-lg">{title}</h2>
  </div>
)
