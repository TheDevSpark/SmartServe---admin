export default function InventoryPage() {
  const items = [
    { name: "Artisanal Sourdough", category: "Seafood", current: 15, stock: 30, status: "Critical", cost: "£12.5", value: "£187.50", supplier: "Fresh Ocean Co." },
    { name: "Truffle Oil", category: "Pantry", current: 3, stock: 10, status: "Low Stock", cost: "£45", value: "£135.00", supplier: "Gourmet Imports" },
    { name: "Wagyu Beef", category: "Meat", current: 3, stock: 5, status: "Critical", cost: "£85", value: "£255.00", supplier: "Premium Meats Ltd" },
    { name: "Fresh Pasta", category: "Pantry", current: 25, stock: 80, status: "Good", cost: "£2.5", value: "£62.50", supplier: "Bella Pasta Co." },
    { name: "Red Wine", category: "Beverages", current: 18, stock: 40, status: "Low Stock", cost: "£25", value: "£450.00", supplier: "Vine & Oak" },
    { name: "Eggs", category: "Dairy", current: 3, stock: 12, status: "Critical", cost: "£4.5", value: "£22.50", supplier: "Farm Fresh Eggs" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#254333]">Inventory Tracking</h1>
          <p className="text-xs text-neutral-500">Monitor stock levels and manage supplies</p>
        </div>
        <button className="h-9 px-3 rounded-md bg-emerald-500 text-white text-sm">+ Add Item</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <Stat label="Total Items" value="6" />
        <Stat label="Critical Items" value="3" />
        <Stat label="Low Stock" value="2" />
        <Stat label="Total Value" value="$1338" />
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-neutral-50 text-neutral-600">
              <tr>
                <th className="text-left font-medium px-4 py-3 border-b">Item</th>
                <th className="text-left font-medium px-4 py-3 border-b">Category</th>
                <th className="text-left font-medium px-4 py-3 border-b">Current Stock</th>
                <th className="text-left font-medium px-4 py-3 border-b">Stock Level</th>
                <th className="text-left font-medium px-4 py-3 border-b">Status</th>
                <th className="text-left font-medium px-4 py-3 border-b">Cost/Unit</th>
                <th className="text-left font-medium px-4 py-3 border-b">Total Value</th>
                <th className="text-left font-medium px-4 py-3 border-b">Supplier</th>
                <th className="text-left font-medium px-4 py-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((i) => (
                <tr key={i.name} className="hover:bg-neutral-50">
                  <td className="px-4 py-3 border-b">
                    <div className="text-sm font-medium">{i.name}</div>
                    <div className="text-[10px] text-neutral-500">Updated 09/29/2025</div>
                  </td>
                  <td className="px-4 py-3 border-b">{i.category}</td>
                  <td className="px-4 py-3 border-b">{i.current}</td>
                  <td className="px-4 py-3 border-b w-56">
                    <Progress value={Math.round((i.current / i.stock) * 100)} />
                  </td>
                  <td className="px-4 py-3 border-b">
                    <Badge status={i.status} />
                  </td>
                  <td className="px-4 py-3 border-b">{i.cost}</td>
                  <td className="px-4 py-3 border-b">{i.value}</td>
                  <td className="px-4 py-3 border-b">{i.supplier}</td>
                  <td className="px-4 py-3 border-b">
                    <div className="flex gap-2">
                      <button className="h-8 px-2 rounded border">Edit</button>
                      <button className="h-8 px-2 rounded border">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid sm:grid-cols-4 gap-3">
        <button className="h-11 rounded-lg border bg-white shadow-sm hover:shadow px-3 text-sm text-left">Reorder Critical Items</button>
        <button className="h-11 rounded-lg border bg-white shadow-sm hover:shadow px-3 text-sm text-left">Generate Report</button>
        <button className="h-11 rounded-lg border bg-white shadow-sm hover:shadow px-3 text-sm text-left">View Trends</button>
        <button className="h-11 rounded-lg border bg-white shadow-sm hover:shadow px-3 text-sm text-left">Bulk Update</button>
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

function Progress({ value }) {
  return (
    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
      <div className={`h-full ${value < 25 ? 'bg-red-500' : value < 50 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${value}%` }} />
    </div>
  );
}

function Badge({ status }) {
  const map = {
    "Critical": "bg-red-50 text-red-700 border-red-200",
    "Low Stock": "bg-amber-50 text-amber-700 border-amber-200",
    "Good": "bg-emerald-50 text-emerald-700 border-emerald-200",
  };
  return (
    <span className={`text-[10px] px-2 py-1 rounded-full border ${map[status]}`}>{status}</span>
  );
}


