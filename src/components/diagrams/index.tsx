import type { DiagramId } from '@/data/schema'
import { BusMonitoringDiagram } from './BusMonitoringDiagram'
import { CharterDiagram } from './CharterDiagram'
import { DtgDiagram } from './DtgDiagram'
import { EtmfDiagram } from './EtmfDiagram'
import { HyosobangDiagram } from './HyosobangDiagram'

const DIAGRAMS: Readonly<Record<DiagramId, () => React.JSX.Element>> = {
  etmf: EtmfDiagram,
  dtg: DtgDiagram,
  'bus-monitoring': BusMonitoringDiagram,
  charter: CharterDiagram,
  hyosobang: HyosobangDiagram,
}

export function Diagram({ id }: { id: DiagramId }) {
  const Component = DIAGRAMS[id]
  return <Component />
}
