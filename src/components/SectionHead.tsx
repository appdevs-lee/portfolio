type Props = { title: string; tag: string }

export function SectionHead({ title, tag }: Props) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <span className="tag">{tag}</span>
    </div>
  )
}
