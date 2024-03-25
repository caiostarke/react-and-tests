export const Application = () => {
  return (
    < >
      <h1>Job Application Form</h1>
      <h2>Section One</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text"  id="name" placeholder="Full Name" />
      </div>

      <div>
        <label htmlFor="bio">Bio</label>
        <textarea name="bio" id="bio"></textarea>
      </div>
      
      <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location" >
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

    </>
  );
}

export default Application;