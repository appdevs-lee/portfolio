import { Arrow, Box, DiagramFrame } from './primitives'

export function BusMonitoringDiagram() {
  return (
    <DiagramFrame width={360} height={430} title="버스 실시간 관제 데이터 흐름">
      <Box x={10} y={14} w={150} h={50} label="차량 GPS" sub="약 110대 · 평일" />
      <Box x={200} y={14} w={150} h={50} label="GCP Pub/Sub" sub="재시도 · 데드레터" variant="accent" />
      <Arrow from={[160, 39]} to={[200, 39]} accent />
      <Box x={100} y={110} w={160} h={52} label="관제 서버" sub="MSA · Spring Boot" variant="dark" />
      <Arrow from={[275, 64]} to={[225, 110]} accent />
      <Box x={10} y={210} w={150} h={50} label="Redis" sub="최신 위치 · TTL" />
      <Box x={200} y={210} w={150} h={50} label="PostgreSQL" sub="이력 · 날짜 파티션" />
      <Arrow from={[150, 162]} to={[100, 210]} />
      <Arrow from={[210, 162]} to={[260, 210]} />
      <Box x={100} y={296} w={160} h={50} label="BFF" sub="마스터 REST + 캐시" />
      <Arrow from={[85, 260]} to={[140, 296]} />
      <Box x={100} y={374} w={160} h={46} label="지도 관제 화면" variant="accent" />
      <Arrow from={[180, 346]} to={[180, 374]} label="SSE / WS" accent />
    </DiagramFrame>
  )
}
