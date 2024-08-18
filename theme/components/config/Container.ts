import { Container as ContainerConfig } from "@mantine/core";

const containerPadding = {
  base: 20,
  lg: 0,
};

export const Container = ContainerConfig.extend({
  defaultProps: {
    maw: 1440,
 //   w: "100%",
    fluid: true,
    pt: 0,
    pb: 0,
    pl: containerPadding,
    pr: containerPadding,
  },
});
