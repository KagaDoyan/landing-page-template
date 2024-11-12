import AboutPage from "@/components/pages/about/about-page";
import { Stack } from "@mui/material";

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <AboutPage />
    </Stack>
  );
}
