import { TrendingUp, Users, UtensilsCrossed, Timer, CalendarDays, Download, Table2, ChefHat, LayoutDashboard, Star, ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--brand-800)] flex items-center gap-2"><LayoutDashboard size={22} /> Restaurant Dashboard</h1>
          <p className="text-xs text-neutral-500">Monday, September 29, 2025</p>
        </div>
        <div className="flex gap-2">
          <button className="h-9 px-3 rounded-md bg-[var(--brand-500)] text-white text-sm hover:bg-[var(--brand-600)] flex items-center gap-1 shadow-sm"><CalendarDays size={16} /> Today's Schedule</button>
          <button className="h-9 px-3 rounded-md border text-sm flex items-center gap-1 bg-white shadow-sm"><Download size={16} /> Export Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Today's Revenue" value="$8,247" trend="up" change="12.5%" icon={<TrendingUp size={18} />} />
        <StatCard title="Orders Today" value="143" trend="up" change="13.3%" icon={<Users size={18} />} />
        <StatCard title="Active Tables" value="18/24" sub="75% occupied" icon={<Table2 size={18} />} />
        <StatCard title="Avg Wait Time" value="12 min" trend="down" change="-3.2%" icon={<Timer size={18} />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <RevenueOrdersChart />
        <OrderStatusChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <SectionHeader title="Today's Reservations" actionLabel="3 new" />
          <ListItem title="Johnson" subtitle="4 guests • 7:00 PM" badge="confirmed" />
          <ListItem title="Smith" subtitle="2 guests • 5:30 PM" badge="seated" />
          <ListItem title="Wilson" subtitle="6 guests • 6:00 PM" badge="confirmed" />
          <ListItem title="Brown" subtitle="2 guests • 8:30 PM" badge="pending" />
          <ListItem title="Davis" subtitle="3 guests • 4:00 PM" badge="confirmed" />
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <SectionHeader title="Recent Orders" />
          <OrderRow id="BV-001" items="Steak, Pasta x2" time="2:45 PM" total="$76" status="preparing" />
          <OrderRow id="BV-002" items="Sea bass, Wine" time="2:10 PM" total="$58" status="ready" />
          <OrderRow id="BV-003" items="Martini, Pizza x2" time="2:15 PM" total="$45" status="served" />
          <OrderRow id="BV-004" items="Duck Breast" time="3:00 PM" total="$44" status="preparing" />
        </div>
      </div>

      <div className="grid sm:grid-cols-4 gap-3">
        <QuickAction label="Manage Tables" icon={<Table2 size={16} />} />
        <QuickAction label="Kitchen Display" icon={<UtensilsCrossed size={16} />} />
        <QuickAction label="Staff Schedule" icon={<ChefHat size={16} />} />
        <QuickAction label="View Reviews" icon={<Star size={16} />} />
      </div>
    </div>
  );
}

function StatCard({ title, value, sub, trend, change, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-neutral-500">{title}</p>
          <p className="text-xl font-semibold mt-1">{value}</p>
          {sub ? <p className="text-xs text-neutral-400 mt-1">{sub}</p> : null}
          {change && (
            <div className={`mt-2 inline-flex items-center gap-1 text-xs ${trend === 'down' ? 'text-red-600' : 'text-[var(--brand-600)]'}`}>
              {trend === 'down' ? <ArrowDownRight size={12} /> : <ArrowUpRight size={12} />}
              <span className="font-medium">{change}</span>
            </div>
          )}
        </div>
        <div className="text-[var(--brand-600)] w-8 h-8 rounded-full bg-[var(--brand-100)] border border-[var(--brand-500)]/20 grid place-items-center">
          <span className="text-[var(--brand-600)]">{icon}</span>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, actionLabel }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-medium">{title}</h3>
      {actionLabel ? <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{actionLabel}</span> : null}
    </div>
  );
}

function ListItem({ title, subtitle, badge }) {
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-neutral-100 grid place-items-center text-xs">{title.charAt(0)}</div>
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-neutral-500">{subtitle}</p>
        </div>
      </div>
      <span className={`text-[10px] px-2 py-1 rounded-full border ${badge === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-200' : badge === 'confirmed' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>{badge}</span>
    </div>
  );
}

function OrderRow({ id, items, time, total, status }) {
  const chipStyle = status === 'preparing' ? 'bg-amber-50 text-amber-700 border-amber-200' : status === 'ready' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-blue-50 text-blue-700 border-blue-200';
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0 text-sm">
      <div>
        <p className="font-medium">{id}</p>
        <p className="text-xs text-neutral-500">{items}</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-neutral-500">{time}</span>
        <span className="font-medium">{total}</span>
        <span className={`text-[10px] px-2 py-1 rounded-full border ${chipStyle}`}>{status}</span>
      </div>
    </div>
  );
}

function QuickAction({ label, icon }) {
  return (
    <button className="h-11 rounded-lg border bg-white shadow-sm hover:shadow px-3 text-sm text-left inline-flex items-center gap-2">
      <span className="text-[var(--brand-600)]">{icon}</span>
      {label}
    </button>
  );
}

function RevenueOrdersChart() {
  const labels = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const revenue = [820, 920, 880, 1040, 1260, 1480, 1340];
  const { BarChart } = require("../components/charts");
  return (
    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-medium mb-3 inline-flex items-center gap-2"><DollarSign size={16} /> Weekly Revenue & Orders</h3>
      <BarChart labels={labels} values={revenue} color="#1f3a2f" height={256} />
    </div>
  );
}

function OrderStatusChart() {
  const labels = ["Preparing","Ready","Served","Cancelled"];
  const values = [38, 22, 71, 5];
  const colors = ["#f59e0b","#34a373","#3b82f6","#ef4444"];
  const { DoughnutChart } = require("../components/charts");
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-medium mb-3">Order Status</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <DoughnutChart labels={labels} values={values} colors={colors} height={220} />
        <div className="space-y-2 text-sm">
          <LegendItem label="Completed" color="#3b82f6" value={145} />
          <LegendItem label="In Progress" color="#34a373" value={23} />
          <LegendItem label="Pending" color="#f59e0b" value={12} />
          <LegendItem label="Cancelled" color="#ef4444" value={5} />
        </div>
      </div>
    </div>
  );
}

function LegendItem({ label, color, value }) {
  return (
    <div className="flex items-center justify-between">
      <div className="inline-flex items-center gap-2">
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-neutral-600">{label}</span>
      </div>
      <span className="text-neutral-500 text-xs">{value}</span>
    </div>
  );
}
