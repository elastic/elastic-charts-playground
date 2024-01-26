import {
  Chart,
  Axis,
  BarSeries,
  Position,
  ScaleType,
  Settings,
} from '@elastic/charts';

const data = [
  { x: 'trousers', y: 390, val: 1222 },
  { x: 'watches', y: 23, val: 1222 },
  { x: 'bags', y: 750, val: 1222 },
  { x: 'cocktail dresses', y: 854, val: 1222 },
];

export default function App() {
  return (
    <div className="App">
      <Chart size={['100%', 500]}>
        <Settings />
        <Axis id="count" title="count" position={Position.Left} />
        <Axis id="x" title="goods" position={Position.Bottom} />
        <BarSeries
          id="bars"
          name="amount"
          xScaleType={ScaleType.Ordinal}
          xAccessor="x"
          yAccessors={['y']}
          data={data}
        />
      </Chart>
    </div>
  );
}
