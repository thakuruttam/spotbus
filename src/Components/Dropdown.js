import FormControl from "@material-ui/core/FormControl";
import { Select, MenuItem } from "@material-ui/core";
import { ROUTE_NUMBERS_FILTER_OPTIONS } from "../Data/route";

export const Dropdown = ({ setRoute, route }) => {
  return (
    <div className="dropdown-container">
      <FormControl variant="outlined">
        <h2>Select Route</h2>
        <Select
          style={{ width: "40vw" }}
          native
          value={route}
          onChange={(event) => setRoute(event.target.value)}
        >
          {ROUTE_NUMBERS_FILTER_OPTIONS.map((ele) => {
            return (
              <option key={ele.route_id} value={ele.route_id}>
                {ele.route_id}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <h5 style={{ marginBottom: "20px", color: "gray" }}>
        View stops for a selected route in the map <br />
        The map will not recenter according to change of points. Kindly zoom out
        to locate it.
      </h5>
    </div>
  );
};
