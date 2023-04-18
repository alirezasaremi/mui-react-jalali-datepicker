import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { Box } from "@mui/material";

export default function JalaliDatePicker() {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
        <DatePicker
          label="انتخاب تاریخ"
          defaultValue={new Date(2020, 1, 1)}
          minDate={new Date(2010, 1, 1)}
          maxDate={new Date()}
        />
      </LocalizationProvider>
    </Box>
  );
}
