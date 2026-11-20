export default function SearchBar() {
  const field =
    "flex min-w-0 flex-1 flex-col justify-center gap-1 px-6 py-3 md:py-0";
  const label = "text-[11px] text-neutral-400 lg:text-xs";
  const input =
    "w-full cursor-pointer appearance-none bg-transparent text-[13px] text-neutral-900 outline-none placeholder:text-neutral-900 lg:text-sm";
  const divider = "hidden h-10 w-px shrink-0 bg-neutral-200 md:block";

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full flex-col rounded-3xl bg-white p-3 shadow-xl md:h-20 md:flex-row md:items-center md:rounded-full md:p-0 md:pr-[10px]"
    >
      <div className={field}>
        <label className={label}>Stay In</label>
        <select className={input} defaultValue="">
          <option value="" disabled>
            Select Destination
          </option>
          <option>Jaipur</option>
          <option>Gurugram</option>
        </select>
      </div>

      <div className={divider} />

      <div className={`${field} border-t border-neutral-100 md:border-t-0`}>
        <label className={label}>Your Dates</label>
        <input
          type="text"
          placeholder="Add Date"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => !e.target.value && (e.target.type = "text")}
          className={input}
        />
      </div>

      <div className={divider} />

      <div className={`${field} border-t border-neutral-100 md:border-t-0`}>
        <label className={label}>Travellers</label>
        <select className={input} defaultValue="2">
          {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
            <option key={n} value={n}>
              {n} Guest
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="mt-2 shrink-0 cursor-pointer rounded-full bg-[#1f1a17] px-8 py-4 text-sm text-white transition hover:bg-black md:mt-0 md:ml-2 md:h-[60px] md:px-10"
      >
        Find Your Stay
      </button>
    </form>
  );
}
