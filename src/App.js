import { Box, Divider, Stack, Typography } from "@mui/material";
import JalaliDatePicker from "./components/JalaliDatePicker";
import Menu from "./components/Menu";

export default function App() {
  return (
    <Box>
      <Menu />
      <Box my={4} mx={16} p={8} bgcolor="white" borderRadius={8}>
        <Stack spacing={2}>
          <JalaliDatePicker />

          <Typography>
            <Typography component="span" pr={1} color="error">
              Note:
            </Typography>
            User, only can choose a date between 2010 until now. The default
            date is Jan 1st 2020.
          </Typography>
          <Divider />
          <Typography sx={{ direction: "rtl" }}>
            <Typography component="span" pl={1} color="error">
              نکته:
            </Typography>
            کاربر فقط میتواند تاریخ بین ۱۳۸۸ تاکنون را انتخاب کند. تاریخ پیشفرض
            ۱۱ بهمن ماه ۱۳۹۸ می باشد
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
