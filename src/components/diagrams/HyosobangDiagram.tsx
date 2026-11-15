import { Arrow, Box, DiagramFrame, Zone } from './primitives'

export function HyosobangDiagram() {
  return (
    <DiagramFrame width={640} height={240} title="효소방 O2O 서비스 구조">
      <Box x={10} y={22} w={120} h={46} label="관리자 웹" sub="React" />
      <Box x={10} y={96} w={120} h={46} label="고객 웹" sub="React" />
      <Box x={10} y={170} w={120} h={46} label="키오스크" sub="React" />
      <Zone x={160} y={10} w={320} h={220} label="GCP · DOCKER 무중단 배포" />
      <Box x={180} y={90} w={130} h={58} label="Django API" variant="accent" />
      <Box x={340} y={90} w={120} h={58} label="Redis 큐" sub="비동기 발송" variant="dark" />
      <Box x={510} y={50} w={120} h={46} label="Expo 푸시" />
      <Box x={510} y={142} w={120} h={46} label="Twilio SMS" />
      <Arrow from={[130, 45]} to={[180, 105]} />
      <Arrow from={[130, 119]} to={[180, 119]} />
      <Arrow from={[130, 193]} to={[180, 133]} />
      <Arrow from={[310, 119]} to={[340, 119]} accent />
      <Arrow from={[460, 108]} to={[510, 73]} />
      <Arrow from={[460, 130]} to={[510, 165]} />
    </DiagramFrame>
  )
}
