"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const softwareIDEs = [
    {
        name: ['Linux', 'Tux'],
        colorFrom: '#FFF1AB',
        colorTo: '#FFD100',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="30.857" height="46" viewBox="0 0 30.857 36">
        <path id="linux-logo" data-name="linux-logo" d="M33.613,31.5a1.66,1.66,0,0,1-.964-1.511c.185-1.229.2-1.728-.016-2.073a1.123,1.123,0,0,0-.691-.466,1.607,1.607,0,0,0,.305-.876,18.393,18.393,0,0,0-1.021-5.279c-.643-1.985-2.4-4.018-3.592-5.464-2.089-2.555-1.832-3.15-2.113-8.012-.177-3.094-1.551-5.569-5.593-5.569s-5.384,2.571-5.384,4.741c0,2.306.161,4.1.161,4.1.1,2.684.08,3.166-.643,4.444-.394.7-2.17,2.411-2.869,3.592s-.611,2.371-1.977,4.243A3.657,3.657,0,0,0,8.437,26.9c-.562.659-.289,1.6-.4,2-.209.7-1.1.828-1.792.884s-1.229,0-1.5.426.056,1.286.346,2.411S4.5,33.83,4.5,35.116,6.911,36.4,9.3,36.94s3.271,1.31,4.5,1.31A5.03,5.03,0,0,0,16.851,36.7c.579-.474,2.33-.3,3.4-.3a18.154,18.154,0,0,1,3.672.193c.916.241.908,1.655,3.158,1.655s2.788-1.663,4.9-2.756,3.375-1.607,3.375-2.387S34.152,31.821,33.613,31.5Zm-18.2,4.46c-.1,1.045-1.012,1.374-1.937,1.294a20.563,20.563,0,0,1-3.544-.972,38.428,38.428,0,0,0-3.937-.8c-1.229-.217,0-1.093-.016-2.748-.008-.643-.571-1.559-.337-1.985s1.39-.193,1.792-.305a1.989,1.989,0,0,0,1.229-.956c.113-.273.145-1.422.233-1.832.088-.394.635-.579,1.784.008s2.322,3.062,3.4,4.805S15.517,34.915,15.412,35.96Zm9.522-5.287a7.859,7.859,0,0,1,.056,2.917,5.925,5.925,0,0,1-.86,1.848c-.177-.546.426-1.109.354-2.475-.04-.763-.064-.627-.924.145A7,7,0,0,1,19.3,34.915a3.55,3.55,0,0,1-2.612-.667,1.927,1.927,0,0,1-.346,1.985,3.979,3.979,0,0,0-.2-1.736c-.321-.723-.747-1.5-.747-1.5a1.618,1.618,0,0,0,.932-.8,1.992,1.992,0,0,0-.7-2.226c-.86-.836-4.219-3.021-4.492-3.383a2.546,2.546,0,0,1-.562-1.864c-.024-1.045.434-1.993.346-1.631a12.078,12.078,0,0,0,.008,1.591,2.1,2.1,0,0,0,1.117,2.009c.763.209.161-2.1.643-4.267a7.6,7.6,0,0,1,1.543-3.52c.6-.884,1.543-1.647,1.366-3.463s-.008-1.615.41-.948c.321.522,1.069,1.929,1.985,1.768a9.733,9.733,0,0,0,3.825-2.266c.3-.289.056-.571-.185-.466-1.246.538-3.56,1.728-4.138,1.463a4.7,4.7,0,0,1-1.35-1.567c1.237,1.093,1.6.892,2.121.723a19.9,19.9,0,0,0,2.29-.908c1.262-.562,1.663-.426,1.792-.7s-.032-.538-.378-.458c-.514.121-.273.41-1.824.988-2.033.763-2.676.828-3.536.241-.691-.474-1.205-1.021-1.205-1.342s.667-.667.988-.908.988-.876.988-.876a2.91,2.91,0,0,0-.048-1.021.835.835,0,0,0-.956-.651c-.329.088-.643.442-.546,1.189a1.1,1.1,0,0,0,.563.884,1.552,1.552,0,0,1-.418.378s-.064-.024-.281-.506a2.952,2.952,0,0,1-.024-2.5c.506-.932,1.575-.418,1.913.305a4.32,4.32,0,0,1,.193,1.824,1.761,1.761,0,0,1,1.688.281c-.571-2.395.763-3.3,1.768-3.3a1.825,1.825,0,0,1,1.792,2.009,2.471,2.471,0,0,1-.554,1.768c-.329-.04-.659-.121-.506-.273a1.558,1.558,0,0,0,.354-1.061,1.092,1.092,0,0,0-1.1-1.1,1.19,1.19,0,0,0-1.1,1.045,2.247,2.247,0,0,0-.016.836c.048.4.876.771,1.921,1.037s.908.723.667,2.033.506,1.471,1.149,2.716.458,1.752,1.278,2.829a10.565,10.565,0,0,1,1.318,6.171c-.072.844-.313.82.587.538a8.253,8.253,0,0,1,.964-.217,4.72,4.72,0,0,0,.281-1.792,7.636,7.636,0,0,0-2.146-5.746,7.622,7.622,0,0,1,2.732,4.982,5.491,5.491,0,0,1-.161,2.6,2.034,2.034,0,0,1,1.012.948c.3.49-.313-.466-1.607-.466a1.943,1.943,0,0,0-1.487.635,1.349,1.349,0,0,0-.257.94,1.339,1.339,0,0,0-1.35.394C24.549,28.454,24.774,29.837,24.935,30.672Zm7.24,3.793c-1.937.836-2.628,1.888-3.833,2.531a1.905,1.905,0,0,1-2.708-.643c-.482-.828.836-2.266.378-4.789-.354-1.945-.506-2.491-.394-2.957.113-.442.755-.354.924-.313a2.038,2.038,0,0,0,2.17,1.567,2.6,2.6,0,0,0,2.628-1.7s.458-.016.579.281c.185.466-.233,1.326-.225,1.712.024,1.262.94,1.7,2.282,2.571C34.634,33.171,34.144,33.613,32.175,34.465Z" transform="translate(-4.5 -2.25)" fill="#fff"/>
        </svg>
        `,
        width: 30.857,
        height: 46,
        xOffset: 0,
    },
    {
        name: ['Windows'],
        colorFrom: '#0067b8',
        colorTo: '#006cac',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 512 512" xml:space="preserve" width="46" height="46">
            <g>
                <path id="rect65" style="fill:#fff;" d="M0,0h247.24v247.24H0V0z"/>
                <path id="rect165" style="fill:#fff;" d="M264.76,247.24V0H512v247.24H264.76z"/>
                <path id="rect413" style="fill:#fff;" d="M0,264.76h247.24V512H0V264.76z"/>
                <path id="rect415" style="fill:#fff;" d="M264.76,512V264.76H512V512H264.76z"/>
            </g>
        </svg>
        `,
        width: 30.857,
        height: 46,
        xOffset: -2,
    },
    {
        name: ['VSCode'],
        colorFrom: '#1F9CF0',
        colorTo: '#0065A9',
        icon: `<svg width="35.995" height="25.89" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <g filter="url(#filter0_d)">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M70.9119 99.5723C72.4869 100.189 74.2828 100.15 75.8725 99.3807L96.4604 89.4231C98.624 88.3771 100 86.1762 100 83.7616V16.2392C100 13.8247 98.624 11.6238 96.4604 10.5774L75.8725 0.619067C73.7862 -0.389991 71.3446 -0.142885 69.5135 1.19527C69.252 1.38636 69.0028 1.59985 68.769 1.83502L29.3551 37.9795L12.1872 24.88C10.5891 23.6607 8.35365 23.7606 6.86938 25.1178L1.36302 30.1525C-0.452603 31.8127 -0.454583 34.6837 1.35854 36.3466L16.2471 50.0001L1.35854 63.6536C-0.454583 65.3164 -0.452603 68.1876 1.36302 69.8477L6.86938 74.8824C8.35365 76.2395 10.5891 76.34 12.1872 75.1201L29.3551 62.0207L68.769 98.1651C69.3925 98.7923 70.1246 99.2645 70.9119 99.5723ZM75.0152 27.1813L45.1092 50.0001L75.0152 72.8189V27.1813Z" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
        <path d="M96.4614 10.593L75.8567 0.62085C73.4717 -0.533437 70.6215 -0.0465506 68.7498 1.83492L1.29834 63.6535C-0.515935 65.3164 -0.513852 68.1875 1.30281 69.8476L6.8125 74.8823C8.29771 76.2395 10.5345 76.339 12.1335 75.1201L93.3604 13.18C96.0854 11.102 100 13.0557 100 16.4939V16.2535C100 13.84 98.6239 11.64 96.4614 10.593Z" fill="#D9D9D9"/>
        <g filter="url(#filter1_d)">
        <path d="M96.4614 89.4074L75.8567 99.3797C73.4717 100.534 70.6215 100.047 68.7498 98.1651L1.29834 36.3464C-0.515935 34.6837 -0.513852 31.8125 1.30281 30.1524L6.8125 25.1177C8.29771 23.7605 10.5345 23.6606 12.1335 24.88L93.3604 86.8201C96.0854 88.8985 100 86.9447 100 83.5061V83.747C100 86.1604 98.6239 88.3603 96.4614 89.4074Z" fill="#E6E6E6"/>
        </g>
        <g filter="url(#filter2_d)">
        <path d="M75.8578 99.3807C73.4721 100.535 70.6219 100.047 68.75 98.1651C71.0564 100.483 75 98.8415 75 95.5631V4.43709C75 1.15852 71.0565 -0.483493 68.75 1.83492C70.6219 -0.0467614 73.4721 -0.534276 75.8578 0.618963L96.4583 10.5773C98.6229 11.6237 100 13.8246 100 16.2391V83.7616C100 86.1762 98.6229 88.3761 96.4583 89.4231L75.8578 99.3807Z" fill="white"/>
        </g>
        <g style="mix-blend-mode:overlay" opacity="0.25">
        <path style="mix-blend-mode:overlay" opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M70.8508 99.5723C72.4258 100.189 74.2218 100.15 75.8115 99.3807L96.4 89.4231C98.5635 88.3771 99.9386 86.1762 99.9386 83.7616V16.2391C99.9386 13.8247 98.5635 11.6239 96.4 10.5774L75.8115 0.618974C73.7252 -0.390085 71.2835 -0.142871 69.4525 1.19518C69.1909 1.38637 68.9418 1.59976 68.7079 1.83493L29.2941 37.9795L12.1261 24.88C10.528 23.6606 8.2926 23.7605 6.80833 25.1177L1.30198 30.1524C-0.51354 31.8126 -0.515625 34.6837 1.2975 36.3465L16.186 50L1.2975 63.6536C-0.515625 65.3164 -0.51354 68.1875 1.30198 69.8476L6.80833 74.8824C8.2926 76.2395 10.528 76.339 12.1261 75.1201L29.2941 62.0207L68.7079 98.1651C69.3315 98.7923 70.0635 99.2645 70.8508 99.5723ZM74.9542 27.1812L45.0481 50L74.9542 72.8188V27.1812Z" fill="url(#paint0_linear)"/>
        </g>
        </g>
        </g>
        </g>
        <defs>
        <filter id="filter0_d" x="-6.25" y="-4.16667" width="112.5" height="112.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="2.08333"/>
        <feGaussianBlur stdDeviation="3.125"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="filter1_d" x="-8.39436" y="15.6951" width="116.728" height="92.6376" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="4.16667"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="filter2_d" x="60.4167" y="-8.33346" width="47.9167" height="116.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="4.16667"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear" x1="49.939" y1="-5.19792e-05" x2="49.939" y2="100.001" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <clipPath id="clip0">
        <rect width="100" height="100" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `,
        width: 35.995,
        height: 25.89,
        xOffset: 0,
    },
];
exports.default = softwareIDEs;
//# sourceMappingURL=software-ides.js.map