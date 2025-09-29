import { BarChart as BarIcon, PieChart, LineChart as LineIcon, FileDown } from "lucide-react";
export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--brand-800)] flex items-center gap-2"><PieChart size={22} /> Analytics & Reports</h1>
          <p className="text-xs text-neutral-500">Compare key performance indicators and generate reports</p>
        </div>
        <div className="flex gap-2">
          <button className="h-9 px-3 rounded-md border text-sm">Last 30 Days</button>
          <button className="h-9 px-3 rounded-md bg-[var(--brand-500)] text-white text-sm flex items-center gap-1"><FileDown size={16} /> Export</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <Stat label="Revenue" value="$74,080" />
        <Stat label="Total Orders" value="525" />
        <Stat label="Avg. Order Value" value="$141" />
        <Stat label="Cust. Satisfaction" value="91%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RevenueTrend />
        <OrderCategoryMix />
        <TopDishes />
        <WeekOverWeek />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="font-medium mb-3">Guest Feedback Summary</h3>
          <div className="space-y-3">
            {[
              { label: "Food Quality", value: 92 },
              { label: "Service", value: 88 },
              { label: "Ambience", value: 90 },
              { label: "Cleanliness", value: 94 },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex justify-between text-sm"><span>{m.label}</span><span>{m.value}%</span></div>
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: `${m.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="font-medium mb-3">Key Operational Insights</h3>
          <ul className="text-sm list-disc pl-5 space-y-2 text-neutral-700">
            <li>Low stock in 3 critical ingredients this week</li>
            <li>Avg. wait time improved by 3.2% WoW</li>
            <li>Friday evenings show highest reservation demand</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <p className="text-xs text-neutral-500">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </div>
  );
}

function RevenueTrend() {
  const { LineChart } = require("../../components/charts");
  const labels = ["W1","W2","W3","W4","W5","W6","W7","W8"];
  const series = [
    { label: "Revenue", data: [12,15,14,18,17,19,21,23].map((n)=>n*1000), color: "#34a373" },
  ];
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-medium mb-3 inline-flex items-center gap-2"><LineIcon size={16} /> Revenue Trend</h3>
      <LineChart labels={labels} series={series} height={256} />
    </div>
  );
}

function OrderCategoryMix() {
  const { DoughnutChart } = require("../../components/charts");
  const labels = ["Mains","Starters","Desserts","Beverages"];
  const values = [44, 22, 14, 20];
  const colors = ["#34a373","#3b82f6","#f59e0b","#ef4444"];
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-medium mb-3 inline-flex items-center gap-2"><PieChart size={16} /> Order Category Mix</h3>
      <DoughnutChart labels={labels} values={values} colors={colors} height={256} />
    </div>
  );
}

function TopDishes() {
  const { BarChart } = require("../../components/charts");
  const labels = ["Ribeye Steak","Sea Bass","Truffle Pasta","Tiramisu"];
  const values = [312, 288, 254, 221];
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-medium mb-3 inline-flex items-center gap-2"><BarIcon size={16} /> Top Performing Dishes</h3>
      <BarChart labels={labels} values={values} color="#34a373" height={256} />
    </div>
  );
}

function WeekOverWeek() {
  const { BarChart } = require("../../components/charts");
  const labels = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const values = [12,14,13,15,18,21,19];
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-medium mb-3 inline-flex items-center gap-2"><BarIcon size={16} /> Week-over-Week Comparison</h3>
      <BarChart labels={labels} values={values} color="#3b82f6" height={256} />
    </div>
  );
}


