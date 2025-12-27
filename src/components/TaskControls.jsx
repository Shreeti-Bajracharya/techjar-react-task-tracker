export default function TaskControls({
  status,
  setStatus,
  search,
  setSearch,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
      <input
        className="border rounded px-3 py-2 w-full sm:flex-1"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border rounded px-3 py-2 w-full sm:w-auto"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>All</option>
        <option>Pending</option>
        <option>Done</option>
      </select>

      <select
        className="border rounded px-3 py-2 w-full sm:w-auto"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="date">Sort by Date</option>
        <option value="name">Sort by Name</option>
      </select>
    </div>
  );
}
