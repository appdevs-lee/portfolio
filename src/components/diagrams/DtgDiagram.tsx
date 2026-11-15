import { Arrow, Box, DiagramFrame, Zone } from './primitives'

export function DtgDiagram() {
  return (
    <DiagramFrame width={640} height={280} title="DTG 통신 서버 아키텍처">
      <Box x={10} y={112} w={110} h={56} label="DTG 단말" sub="차량 장착" />
      <Zone x={150} y={10} w={310} h={260} label="SPRING BOOT" />
      <Box x={168} y={40} w={136} h={52} label="Netty :TCP" sub="STX/ETX 디코더" variant="accent" />
      <Box x={168} y={114} w={136} h={52} label="메시지 핸들러" sub="인증·운행·ACK/NAK" />
      <Box x={168} y={188} w={136} h={52} label="JPA 배치 INSERT" sub="JDBC 튜닝" />
      <Box x={320} y={40} w={124} h={52} label="Tomcat :HTTP" sub="관리 REST API" />
      <Box x={320} y={114} w={124} h={52} label="Micrometer" sub="연결·패킷 지표" />
      <Box x={490} y={40} w={140} h={52} label="AWS S3" sub="원본 패킷 백업" />
      <Box x={490} y={188} w={140} h={52} label="PostgreSQL" sub="파티셔닝·인덱스" variant="dark" />
      <Arrow from={[120, 130]} to={[168, 70]} label="raw TCP" accent />
      <Arrow from={[236, 92]} to={[236, 114]} />
      <Arrow from={[236, 166]} to={[236, 188]} />
      <Arrow from={[304, 214]} to={[490, 214]} />
      <Arrow from={[290, 114]} via={[[290, 103], [560, 103]]} to={[560, 92]} />
    </DiagramFrame>
  )
}
