export default function StaffSchedulePage() {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const staff = [
    { name: "Alex Johnson", role: "Server" },
    { name: "Bob Smith", role: "Chef" },
    { name: "Carol Wilson", role: "Sous Chef" },
    { name: "Emma Davis", role: "Host" },
    { name: "Paul Miller", role: "Chef" },
    { name: "Grace Lee", role: "Chef" },
    { name: "Henry Taylor", role: "Manager" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#254333]">Staff Scheduling</h1>
          <p className="text-xs text-neutral-500">Manage employees schedules and shifts</p>
        </div>
        <button className="h-9 px-3 rounded-md bg-emerald-500 text-white text-sm">+ Add Shift</button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between">
          <button className="h-8 px-2 rounded border text-sm">Previous Week</button>
          <div className="text-sm font-medium">September 29 - October 5, 2025</div>
          <button className="h-8 px-2 rounded border text-sm">Next Week</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <h3 className="font-medium mb-3">Staff Members ({staff.length})</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {staff.map((s) => (
            <div key={s.name} className="border rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-neutral-100 grid place-items-center text-xs">{s.name.charAt(0)}</div>
                <div>
                  <p className="text-sm font-medium">{s.name}</p>
                  <p className="text-xs text-neutral-500">{s.role}</p>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <h3 className="font-medium mb-3">Weekly Schedule</h3>
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((d, i) => (
            <div key={d} className="rounded-md overflow-hidden border">
              <div className="bg-[#254333] text-white text-center text-sm py-2">{d}<span className="ml-1 text-xs">{29 + i}</span></div>
              <div className="h-40 grid place-items-center text-xs text-neutral-400">No shifts</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-4 gap-3">
        <QuickStat label="Today's Shifts" value="0" />
        <QuickStat label="Shifts" value="3" />
        <QuickStat label="Overlaps" value="2" />
        <QuickStat label="Hours of Shifts" value="40" />
      </div>
    </div>
  );
}

function QuickStat({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <p className="text-xs text-neutral-500">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </div>
  );
}


