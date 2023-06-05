import { SCREENS, SPACING } from "@/constants/styles";

import { MantineThemeOverride } from "@mantine/core";


const theme: MantineThemeOverride = {
    breakpoints: { ...SCREENS },
    spacing: { xs: SPACING[2.5], sm: SPACING[3], md: SPACING[4], lg: SPACING[5], xl: SPACING[6] },
    colors: {
        dark: [
            '#302f2f', //Background
            '#EFEFEF', //Text Primary
        ],
        light: [
            "#EFEFEF", //Background
            '#313131', //Text Primary
        ]
    }
};

export default theme