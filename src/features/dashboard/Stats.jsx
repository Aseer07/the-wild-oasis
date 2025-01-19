import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  // num checked in nights / all available nights (num days * num cabins)

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

Stats.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      created_at: PropTypes.string.isRequired,
      extrasPrice: PropTypes.number.isRequired,
      totalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  confirmedStays: PropTypes.arrayOf(
    PropTypes.shape({
      cabinId: PropTypes.number.isRequired,
      cabinPrice: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired, // ISO date string
      endDate: PropTypes.string.isRequired, // ISO date string
      extrasPrice: PropTypes.number.isRequired,
      guestId: PropTypes.number.isRequired,
      guests: PropTypes.shape({
        fullName: PropTypes.string.isRequired,
      }).isRequired,
      hasBreakfast: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      isPaid: PropTypes.bool.isRequired,
      numGuests: PropTypes.number.isRequired,
      numNights: PropTypes.number.isRequired,
      observations: PropTypes.string, // Optional field
      startDate: PropTypes.string.isRequired, // ISO date string
      status: PropTypes.string.isRequired, // Expected status values like "checked-in"
      totalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  numDays: PropTypes.number.isRequired,
  cabinCount: PropTypes.number.isRequired,
};

export default Stats;
