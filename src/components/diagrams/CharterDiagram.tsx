import { Arrow, Box, DiagramFrame, Zone } from './primitives'

export function CharterDiagram() {
  return (
    <DiagramFrame width={640} height={250} title="전세버스 대절 앱 구조">
      <Box x={10} y={24} w={140} h={48} label="승객 앱" sub="대절 요청" />
      <Box x={10} y={100} w={140} h={48} label="기사 앱" sub="가용 시간 등록" />
      <Box x={10} y={176} w={140} h={48} label="관리자 페이지" sub="버스회사 승인" />
      <Zone x={190} y={10} w={440} h={230} label="GCP · DOCKER — DEV / PROD" />
      <Box x={215} y={94} w={160} h={60} label="Django · DRF" sub="REST API" variant="accent" />
      <Box x={455} y={44} w={155} h={50} label="PostgreSQL" variant="dark" />
      <Box x={455} y={160} w={155} h={50} label="즉시 매칭" sub="기사 가용 시간 기반" />
      <Arrow from={[150, 48]} to={[215, 110]} />
      <Arrow from={[150, 124]} to={[215, 124]} />
      <Arrow from={[150, 200]} to={[215, 138]} />
      <Arrow from={[375, 110]} to={[455, 70]} />
      <Arrow from={[375, 140]} to={[455, 184]} accent />
    </DiagramFrame>
  )
}
