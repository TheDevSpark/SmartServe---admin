export default function OrdersPage() {
  const headers = ["Order ID", "Table", "Customer", "Items", "Server", "Time", "Status", "Total", "Actions"];
  const rows = [
    { id: "BV-001234", table: 5, customer: "John Smith", items: "Grilled Salmon, Truffle Pasta x2, Wine", server: "Alice", time: "2:30 PM", status: "Preparing", total: "$76" },
    { id: "BV-001235", table: 12, customer: "Sarah Johnson", items: "Wagyu Steak, Dessert", server: "Bob", time: "2:45 PM", status: "Ready", total: "$58" },
    { id: "BV-001236", table: 8, customer: "Mike Wilson", items: "Mediterranean Mezze x2, Beverages x3", server: "Carol", time: "2:15 PM", status: "Served", total: "$45" },
    { id: "BV-001237", table: 3, customer: "Emma Brown", items: "Duck Breast, Chocolate Cake, Coffee", server: "Alice", time: "2:20 PM", status: "Cancelled", total: "$44" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#254333]">Orders Management</h1>
          <p className="text-xs text-neutral-500">Track and manage all restaurant orders</p>
        </div>
        <button className="h-9 px-3 rounded-md border text-sm">Refresh</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        <Stat label="Pending" value="1" />
        <Stat label="Preparing" value="1" />
        <Stat label="Ready" value="1" />
        <Stat label="Served" value="1" />
        <Stat label="Cancelled" value="1" />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-neutral-50 text-neutral-600">
              <tr>
                {headers.map((h) => (
                  <th key={h} className="text-left font-medium px-4 py-3 border-b">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="hover:bg-neutral-50">
                  <td className="px-4 py-3 border-b font-medium">{r.id}</td>
                  <td className="px-4 py-3 border-b">{r.table}</td>
                  <td className="px-4 py-3 border-b">{r.customer}</td>
                  <td className="px-4 py-3 border-b text-neutral-600">{r.items}</td>
                  <td className="px-4 py-3 border-b">{r.server}</td>
                  <td className="px-4 py-3 border-b">{r.time}</td>
                  <td className="px-4 py-3 border-b">
                    <span className={`text-[10px] px-2 py-1 rounded-full border ${
                      r.status === 'Preparing' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                      r.status === 'Ready' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                      r.status === 'Served' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      'bg-red-50 text-red-700 border-red-200'
                    }`}>{r.status}</span>
                  </td>
                  <td className="px-4 py-3 border-b font-medium">{r.total}</td>
                  <td className="px-4 py-3 border-b">
                    <div className="flex gap-2">
                      <button className="h-8 px-2 rounded border">View</button>
                      <button className="h-8 px-2 rounded border">More</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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


