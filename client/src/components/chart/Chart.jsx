import "./chart.scss";
import {
  ResponsiveContainer,
} from "recharts";

const Chart = ({
   aspect,
    }) => {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" aspect={aspect}>
        <img src="./img/studentpng.png" />
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
