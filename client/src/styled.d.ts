import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // Primary colors
    PRIMARY_0: string;
    PRIMARY_1: string;
    PRIMARY_2: string;
    PRIMARY_3: string;
    PRIMARY_4: string;
    PRIMARY_5: string;
    PRIMARY_6: string;
    PRIMARY_7: string;
    PRIMARY_8: string;
    PRIMARY_9: string;

    // Grey colors
    GREY_0: string;
    GREY_1: string;
    GREY_2: string;
    GREY_3: string;
    GREY_4: string;
    GREY_5: string;
    GREY_6: string;
    GREY_7: string;
    GREY_8: string;
    GREY_9: string;

    // Other colors
    BLACK: string;
    BLACK_8: string;
    WHITE: string;
    RED_LIGHT: string;
    RED_DARK: string;
    GREEN_LIGHT: string;
    GREEN_DARK: string;

    // Fonts
    HEADING_FONT: string;
    BODY_FONT: string;
    SMALL_TEXT: string;
    EXTRA_SMALL_TEXT: string;

    // Other properties
    BORDER_RADIUS: string;
    LETTER_SPACING: string;
    TRANSITION: string;
    MAX_WIDTH: string;
    FIXED_WIDTH: string;
    FLUID_WIDTH: string;
    BREAKPOINT_LG: string;
    NAV_HEIGHT: string;

    // Shadows
    SHADOW_1: string;
    SHADOW_2: string;
    SHADOW_3: string;
    SHADOW_4: string;
  }
}
