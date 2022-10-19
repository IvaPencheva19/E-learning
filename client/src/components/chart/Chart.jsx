import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" aspect={aspect}>
        <img src="./img/studentpng.png" />
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
