import { Arrow, Box, DiagramFrame, Zone } from './primitives'

export function EtmfDiagram() {
  return (
    <DiagramFrame width={640} height={300} title="eTMF 폴더 트리와 문서 라이프사이클">
      <Zone x={10} y={10} w={250} h={280} label="DIA TMF REFERENCE MODEL" />
      <Box x={30} y={46} w={140} h={44} label="Zone" sub="대분류" />
      <Box x={60} y={122} w={140} h={44} label="Section" sub="중분류" />
      <Box x={90} y={198} w={150} h={44} label="Artifact" sub="문서 단위" variant="accent" />
      <Arrow from={[70, 90]} to={[90, 122]} />
      <Arrow from={[100, 166]} to={[120, 198]} />

      <Zone x={275} y={10} w={355} h={280} label="DOCUMENT LIFECYCLE" />
      <Box x={290} y={52} w={84} h={52} label="Draft" sub="작성" />
      <Box x={404} y={46} w={112} h={64} label="Workflow" sub="순차·병렬 ≤15R" variant="accent" />
      <Box x={540} y={52} w={80} h={52} label="Inspection" sub="Ready" variant="dark" />
      <Arrow from={[374, 78]} to={[404, 78]} accent />
      <Arrow from={[516, 78]} to={[540, 78]} accent />
      <Box x={385} y={140} w={150} h={48} label="전자서명" sub="All · Any · Only One" />
      <Arrow from={[460, 140]} to={[460, 110]} label="Part 11" />
      <Box x={290} y={218} w={330} h={52} label="불변 Audit Trail" sub="RBAC · Auditor 읽기전용 · 마스킹 3단계" variant="dark" />
      <Arrow from={[240, 220]} to={[290, 86]} />
    </DiagramFrame>
  )
}
