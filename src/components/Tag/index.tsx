import * as S from './styles'

type Props = {
  tags: string[]
}

const Tag = ({ tags }: Props) => (
  <S.TagContainer>
    {tags.map((tag, index) => (
      <S.TagElement key={`${tag}+${index}`}>{tag}</S.TagElement>
    ))}
  </S.TagContainer>
)

export default Tag
