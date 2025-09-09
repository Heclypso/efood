import { TagContainer, TagElement } from './styles'

type Props = {
  tags: string[]
}

const Tag = ({ tags }: Props) => (
  <TagContainer>
    {tags.map((tag, index) => (
      <TagElement key={`${tag}+${index}`}>{tag}</TagElement>
    ))}
  </TagContainer>
)

export default Tag
