
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #ffe49f 
		"--color-primary-50": "226 219 234", // #e2dbea
		"--color-primary-100": "216 207 228", // #d8cfe4
		"--color-primary-200": "206 196 221", // #cec4dd
		"--color-primary-300": "177 160 200", // #b1a0c8
		"--color-primary-400": "119 88 159", // #77589f
		"--color-primary-500": "60 17 118", // #3c1176
		"--color-primary-600": "54 15 106", // #360f6a
		"--color-primary-700": "45 13 89", // #2d0d59
		"--color-primary-800": "36 10 71", // #240a47
		"--color-primary-900": "29 8 58", // #1d083a
		// secondary | #ffcf98 
		"--color-secondary-50": "255 248 240", // #fff8f0
		"--color-secondary-100": "255 245 234", // #fff5ea
		"--color-secondary-200": "255 243 229", // #fff3e5
		"--color-secondary-300": "255 236 214", // #ffecd6
		"--color-secondary-400": "255 221 183", // #ffddb7
		"--color-secondary-500": "255 207 152", // #ffcf98
		"--color-secondary-600": "230 186 137", // #e6ba89
		"--color-secondary-700": "191 155 114", // #bf9b72
		"--color-secondary-800": "153 124 91", // #997c5b
		"--color-secondary-900": "125 101 74", // #7d654a
		// tertiary | #FFB49F 
		"--color-tertiary-50": "255 244 241", // #fff4f1
		"--color-tertiary-100": "255 240 236", // #fff0ec
		"--color-tertiary-200": "255 236 231", // #ffece7
		"--color-tertiary-300": "255 225 217", // #ffe1d9
		"--color-tertiary-400": "255 203 188", // #ffcbbc
		"--color-tertiary-500": "255 180 159", // #FFB49F
		"--color-tertiary-600": "230 162 143", // #e6a28f
		"--color-tertiary-700": "191 135 119", // #bf8777
		"--color-tertiary-800": "153 108 95", // #996c5f
		"--color-tertiary-900": "125 88 78", // #7d584e
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #e63c68 
		"--color-error-50": "251 226 232", // #fbe2e8
		"--color-error-100": "250 216 225", // #fad8e1
		"--color-error-200": "249 206 217", // #f9ced9
		"--color-error-300": "245 177 195", // #f5b1c3
		"--color-error-400": "238 119 149", // #ee7795
		"--color-error-500": "230 60 104", // #e63c68
		"--color-error-600": "207 54 94", // #cf365e
		"--color-error-700": "173 45 78", // #ad2d4e
		"--color-error-800": "138 36 62", // #8a243e
		"--color-error-900": "113 29 51", // #711d33
		// surface | #24242c 
		"--color-surface-50": "222 222 223", // #dededf
		"--color-surface-100": "238 238 238", // #d3d3d5
		"--color-surface-200": "114 114 138", // #72728a
		"--color-surface-300": "75 76 97", // #4b4c61
		"--color-surface-400": "41 44 53", // #292c35
		"--color-surface-500": "42 39 71", // #24242c
		"--color-surface-600": "32 32 40", // #202028
		"--color-surface-700": "27 27 33", // #1b1b21
		"--color-surface-800": "22 22 26", // #16161a
		"--color-surface-900": "18 18 22", // #121216
		
	}
}