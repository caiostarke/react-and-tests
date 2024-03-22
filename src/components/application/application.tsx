export const Application = () => {
  return (
    <form >
      <div>
        <label htmlFor="name">Name</label>
        <input type="text"  id="name" />
      </div>

      <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select A Country</option>
            <option value="US">United State</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canda</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
      </div>

      <div>
        <label >
          <input id="terms" type="checkbox" /> I agree to the terms and conditions
        </label>
      </div>

      <button> Submit</button>

    </form>
  );
}

export default Application;