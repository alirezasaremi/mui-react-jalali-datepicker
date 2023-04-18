import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function Menu() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
          MUI React Jalali Date Picker
        </Typography>
        <Button
          color="inherit"
          target="_blank"
          href="https://alirezasaremi.com/tutorials/"
        >
          See My Tutorials
        </Button>
      </Toolbar>
    </AppBar>
  );
}
