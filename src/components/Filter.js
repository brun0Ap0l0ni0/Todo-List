import "./Filter.css";

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div className="status-filter">
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button className="btn-filter-asc" onClick={() => setSort("Asc")}>
            Asc
          </button>
          <button className="btn-filter-desc" onClick={() => setSort("Desc")}>
            Desc
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
