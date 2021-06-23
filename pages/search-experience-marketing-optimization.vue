<template>
<div class="fade-in">
  <div class="relative w-screen screenHeightCalc">
    <div class="relative justify-items-center z-1 xl:pt-6" style="mix-blend-mode: multiply;">
        <svg class="w-screen my-8 md:h-48 lg:h-56 lg:hidden" width="100%" height="105px" viewBox="0 0 95 105" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="mix-blend-mode: multiply;">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_mobile_SEM" transform="translate(-140.000000, -116.000000)">
                    <g id="Icon-3" transform="translate(140.000000, 116.000000)">
                        <ellipse id="Oval" fill="#4BBFE1" cx="73.2679739" cy="53.1408228" rx="21.1111111" ry="21.2658228"></ellipse>
                        <rect id="Rectangle" fill="#4F77FF" style="mix-blend-mode: multiply;" x="39.1176471" y="0" width="35.3921569" height="105" rx="6"></rect>
                        <rect id="Rectangle" fill="#4F77FF" x="1.11799459e-13" y="22.5" width="35.3921569" height="82.5" rx="6"></rect>
                    </g>
                </g>
            </g>
        </svg>
        <div class="flex mb-8">
            <div class="md:mx-20 relative lg:ml-20 lg:mt-20 xl:mt-0 xl:py-20 xl:ml-40 xl:bg-transparent lg:w-2/4 xl:w-2/5">
                <h1 class="mx-12 text-3xl tracking-wide leading-normal text-ie-purple mb-4 lg:mx-0 lg:text-4xl xl:text-5xl">
                Search Experience Marketing
                </h1>
                <p class="mx-12 mr-10 lg:text-lg leading-normal lg:mx-0 lg:leading-loose text-gray-600 pb-6">
                Whether you are looking to increase awareness of a product or service, maximize conversions,
                or have your digital presence work harder for you, our Content, SEO and Paid Search (PPC)
                services help you achieve the right outcome with the right audiences.
                </p>
                <button ref="scrollArrow" class="scrollArrow w-full m-auto lg:w-10" id="scrollArrow">
                    <svg class="filter-light" width="100%" height="13px" viewBox="0 0 23 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="IE_mobile_SEM" transform="translate(-176.000000, -544.000000)">
                                <g id="Scrolll-arrow" transform="translate(50.000000, 250.000000)">
                                    <image x="126" y="294" width="23" height="13" xlink:href="data:image/png;base64,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JgIIIIAAAuMSIE0vShNZGjc5tkcAAQQQQKBjBLouTWSpY4E3XQQQQAABBCYl0FVpIkuTJsZ+CCCAAAIIdJRA16SJLHU06KaNAAIIIIDAtAS6Ik1kadqk2B8BBBBAAIGOEyhdmshSxwNu+ggggAACCFRF4O677/5QOlYv/bf4HUUl/EyWqkqI4yCAAAIIIIDAPIF77733/emHUqSpt3379hOnTp26wOVFAAEEEEAAAQQqJfDAAw/s37Rp02w6aOQ7Tb09e/YcqxSMgyGAAAIIIIAAAmcTeOSRRy7fsmXLD9NrEaWpt3///i+dPR8/I4AAAggggAACtRCYm5ubueqqq76eDh7mV3QzMzOz6QPst9QCxEERQAABBBBAAIG1CBw8ePBjAX5F19u5c+d3jx8/vnOteXgdAQQQQAABBBColcCJEye25nq3KcncmU984hN31ArAwRFAAAEEEEAAgVEJHDly5IZLL730e2n7HH5N17vpppu+4F/BjXr1bIcAAggggAACjRI4fPjwgR07dhxPJ21cnDZu3Ng7cODA4ZMnT25rdNJOhgACCCCAAAIITELg6NGjb+7/i7T+h63T/nXKU6//BZR33nnnHbOzs5snGat9EEAAAQQQQACB1gncf//97+rL07nnnns6DaYKeer172Ldeuutn+p/zUHrEzQABBAonsDG4mdoggggkBWB9CHx1zzxxBN/cObMmaueeeaZy3/605/ueu655y4+a5BXLPz8TP8xfXD7hfTZqJ/t3r3739MXTvauvvrqf/3oRz/6ePr12wtn7eNHBBBAoFYChKlWvA6OAALjEHj22WfP+8UvfrH5oosueuH1r3/986RoHHq2RQCBOgn8PxjpEIlno5wAAAAAAElFTkSuQmCC"></image>
                                    <use fill="grey" fill-rule="evenodd" xlink:href="#rect-1"></use>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
            <svg class="hidden lg:block z-2 lg:h-100 lg:pr-16 xl:w-3/5 xl:m-auto lg:mr-16" width="776px" height="731px" viewBox="0 0 776 731" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>SEM graphic</title>
                <defs>
                    <polygon id="path-1" points="0 0 327 0 327 290.082031 0 290.082031"></polygon>
                    <polygon id="path-3" points="0 0 327 0 327 133.03125 0 133.03125"></polygon>
                    <filter x="-23.4%" y="-26.8%" width="146.7%" height="153.5%" filterUnits="objectBoundingBox" id="filter-5">
                        <feOffset dx="-7" dy="12" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="11.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0.705882353   0 0 0 0 0.701960784   0 0 0 0 0.701960784  0 0 0 0.483009178 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                        <feMerge>
                            <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                    <filter x="-23.4%" y="-33.6%" width="146.7%" height="167.2%" filterUnits="objectBoundingBox" id="filter-6">
                        <feOffset dx="-7" dy="12" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="11.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0.705700861   0 0 0 0 0.701787771   0 0 0 0 0.701787771  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                        <feMerge>
                            <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                    <filter id="filter-7">
                        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 1.000000 0"></feColorMatrix>
                    </filter>
                    <filter id="filter-8">
                        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.905882 0 0 0 0 0.905882 0 0 0 1.000000 0"></feColorMatrix>
                    </filter>
                    <filter x="-23.4%" y="-33.1%" width="146.7%" height="166.2%" filterUnits="objectBoundingBox" id="filter-9">
                        <feOffset dx="-7" dy="12" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="11.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0.705882353   0 0 0 0 0.701960784   0 0 0 0 0.701960784  0 0 0 0.531741696 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                        <feMerge>
                            <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                    <path d="M7.81026801,204 C3.49676856,204 0,200.077693 0,195.239264 L0,8.7607362 C0,3.92230675 3.49676856,0 7.81026801,0 L281.189732,0 C285.503231,0 289,3.92230675 289,8.7607362 L289,195.239264 C289,200.077693 285.503231,204 281.189732,204 L7.81026801,204 Z" id="path-10"></path>
                </defs>
                <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_desktop_SEM" transform="translate(-991.000000, -154.000000)">
                        <g id="Secondary-section" transform="translate(-13.000000, 205.000000)">
                            <g id="SEM-graphic" transform="translate(1004.000000, 0.000000)">
                                <g id="Group-11" transform="translate(14.000000, 114.000000)">
                                    <path d="M165.114572,69.2813958 C88.7174178,57.5901925 28.9729925,34.0514863 31.6732713,16.7082523 C34.3723375,-0.636184065 98.4927421,-5.21936661 174.891109,6.47303901 C251.288264,18.1642423 311.032689,41.7017462 308.332411,59.0461825 C305.632132,76.3906189 241.511727,80.9725991 165.114572,69.2813958 Z" id="Fill-1" fill="#D5D5D5" opacity="0.750534784"></path>
                                    <g id="Group-5" transform="translate(0.000000, 16.628906)">
                                        <mask id="mask-2" fill="white">
                                            <use xlink:href="#path-1"></use>
                                        </mask>
                                        <g id="Clip-4"></g>
                                        <path d="M0,290.082031 L327,290.082031 L307.181378,42.8535767 C307.181378,42.8535767 293.755,72.3053636 168.453444,52.741748 C115.6054,46.1496338 40.6209731,26.370874 30.711662,0 L0,290.082031 Z" id="Fill-3" fill="#EBEBEB" mask="url(#mask-2)"></path>
                                    </g>
                                    <g id="Group-8" transform="translate(0.000000, 306.710938)">
                                        <mask id="mask-4" fill="white">
                                            <use xlink:href="#path-3"></use>
                                        </mask>
                                        <g id="Clip-7"></g>
                                        <path d="M300.574767,133.03125 C300.574767,133.03125 317.090689,107.692075 323.6973,72.8504188 C327,50.6783502 327,0 327,0 L0,0 C2.2018,50.6783502 3.3027,76.0175253 3.3027,76.0175253 C3.3027,76.0175253 9.9081,114.027449 26.4240222,133.03125 L300.574767,133.03125 Z" id="Fill-6" fill="#DEDEDE" mask="url(#mask-4)"></path>
                                    </g>
                                    <path d="M27.8693182,437.894531 C27.8693182,437.894531 44.433819,468.14609 54.3730053,471.505731 C64.3121917,474.867837 273.030247,471.505731 273.030247,471.505731 L302.846591,437.894531 L27.8693182,437.894531 Z" id="Fill-9" fill="#EBEBEB"></path>
                                </g>
                                <g ref="first" class="first" id="Group-34" filter="url(#filter-5)" transform="translate(178.000000, 0.000000)">
                                    <path d="M6.15530541,254 C2.75513579,254 0,251.421826 0,248.242392 L0,5.75760756 C0,2.57817419 2.75513579,0 6.15530541,0 L284.844695,0 C288.243742,0 291,2.57817419 291,5.75760756 L291,248.242392 C291,251.421826 288.243742,254 284.844695,254 L6.15530541,254 Z" id="Fill-16" stroke="#F8F8F8" fill="#FFFFFF"></path>
                                    <path d="M291,40 L0,40 L0,7.46230424 C0,3.34051348 3.22459459,0 7.20084556,0 L283.799154,0 C287.776529,0 291,3.34051348 291,7.46230424 L291,40 Z" id="Fill-17" fill="#4F77FF"></path>
                                    <path d="M262,32 C255.923387,32 251,27.0738953 251,21 C251,14.9261047 255.923387,10 262,10 C268.076613,10 273,14.9261047 273,21 C273,27.0738953 268.076613,32 262,32 Z" id="Fill-18" fill="#FFFFFF"></path>
                                    <path ref="sem1" class="sem1" d="M19,70 L268,70 C271.865993,70 275,66.8659932 275,63 C275,59.1340068 271.865993,56 268,56 L19,56 C15.1340068,56 12,59.1340068 12,63 C12,66.8659932 15.1340068,70 19,70 Z" id="Fill-21" fill="#4BBFE1"></path>
                                    <path ref="sem2" class="sem2" d="M19,87 L165,87 C168.865993,87 172,83.8659932 172,80 C172,76.1340068 168.865993,73 165,73 L19,73 C15.1340068,73 12,76.1340068 12,80 C12,83.8659932 15.1340068,87 19,87 Z" id="Fill-21" fill="#4BBFE1"></path>
                                    <path ref="sem3" class="sem3" d="M14,125 L242,125 C243.656854,125 245,123.656854 245,122 C245,120.343146 243.656854,119 242,119 L14,119 C12.3431458,119 11,120.343146 11,122 C11,123.656854 12.3431458,125 14,125 Z" id="Fill-23" fill="#FCFCFC"></path>
                                    <path ref="sem4" class="sem4" d="M14,125 L242,125 C243.656854,125 245,123.656854 245,122 C245,120.343146 243.656854,119 242,119 L14,119 C12.3431458,119 11,120.343146 11,122 C11,123.656854 12.3431458,125 14,125 Z" id="Fill-23" fill="#4BBFE1"></path>
                                    <polygon id="Fill-26" fill="#C8C8C8" points="12 106.84 275 106.84 275 105.16 12 105.16"></polygon>
                                    <polygon id="Fill-29" fill="#C8C8C8" points="12 138.84 275 138.84 275 137.16 12 137.16"></polygon>
                                    <polygon id="Fill-30" fill="#C8C8C8" points="12 170.84 275 170.84 275 169.16 12 169.16"></polygon>
                                    <path d="M255.2449,119.2829 C255.535697,119.13036 255.966129,119.155513 256.206966,119.338886 L262.157429,123.872099 L267.773539,119.170929 C268.000285,118.981065 268.428154,118.943741 268.729201,119.087357 C269.030247,119.231783 269.089175,119.502786 268.861148,119.69265 L262.726214,124.828722 C262.600672,124.933391 262.405953,124.996679 262.197142,124.999925 C261.989612,125.002359 261.79105,124.945562 261.65654,124.844139 L255.157789,119.89144 C255.055305,119.813547 255.004063,119.719426 255.00022,119.625305 C254.995096,119.497918 255.079645,119.37053 255.2449,119.2829 Z" id="Fill-27" fill="#C8C8C8"></path>
                                    <path d="M255.2449,190.2829 C255.535697,190.13036 255.966129,190.154702 256.206966,190.338886 L262.157429,194.872099 L267.773539,190.170929 C268.000285,189.981065 268.428154,189.943741 268.729201,190.087357 C269.030247,190.231783 269.089175,190.502786 268.861148,190.69265 L262.726214,195.828722 C262.600672,195.933391 262.405953,195.996679 262.197142,195.999925 C261.989612,196.002359 261.79105,195.945562 261.65654,195.844139 L255.157789,190.89144 C255.055305,190.813547 255.004063,190.719426 255.00022,190.625305 C254.995096,190.497918 255.079645,190.37053 255.2449,190.2829 Z" id="Fill-28" fill="#C8C8C8"></path>
                                    <path d="M255.2449,152.2829 C255.535697,152.13036 255.966129,152.154702 256.206966,152.338075 L262.157429,156.872099 L267.773539,152.170929 C268.000285,151.981065 268.428154,151.943741 268.729201,152.087357 C269.030247,152.231783 269.089175,152.502786 268.861148,152.69265 L262.726214,157.828722 C262.600672,157.933391 262.405953,157.996679 262.197142,157.999925 C261.989612,158.002359 261.79105,157.945562 261.65654,157.844139 L255.157789,152.89144 C255.055305,152.813547 255.004063,152.719426 255.00022,152.625305 C254.995096,152.497918 255.079645,152.37053 255.2449,152.2829 Z" id="Fill-32" fill="#C8C8C8"></path>
                                    <rect ref="sem5" class="sem5" id="Rectangle" fill="#4C72FF" x="12" y="182" width="87" height="52" rx="4"></rect>
                                    <path d="M14,161 L242,161 C243.656854,161 245,159.656854 245,158 C245,156.343146 243.656854,155 242,155 L14,155 C12.3431458,155 11,156.343146 11,158 C11,159.656854 12.3431458,161 14,161 Z" id="Fill-23" fill="#4BBFE1"></path>
                                    <path d="M110,216 L211,216 C212.656854,216 214,214.656854 214,213 C214,211.343146 212.656854,210 211,210 L110,210 C108.343146,210 107,211.343146 107,213 C107,214.656854 108.343146,216 110,216 Z" id="Fill-23" fill="#E7E7E7"></path>
                                    <path d="M110,202 L211,202 C212.656854,202 214,200.656854 214,199 C214,197.343146 212.656854,196 211,196 L110,196 C108.343146,196 107,197.343146 107,199 C107,200.656854 108.343146,202 110,202 Z" id="Fill-23" fill="#E7E7E7"></path>
                                    <path d="M110,228 L175,228 C176.656854,228 178,226.656854 178,225 C178,223.343146 176.656854,222 175,222 L110,222 C108.343146,222 107,223.343146 107,225 C107,226.656854 108.343146,228 110,228 Z" id="Fill-23" fill="#E7E7E7"></path>
                                    <path d="M16,20 L30,20 C31.1045695,20 32,19.1045695 32,18 C32,16.8954305 31.1045695,16 30,16 L16,16 C14.8954305,16 14,16.8954305 14,18 C14,19.1045695 14.8954305,20 16,20 Z" id="Fill-23" fill="#F8F8F8"></path>
                                    <path d="M16,14 L30,14 C31.1045695,14 32,13.1045695 32,12 C32,10.8954305 31.1045695,10 30,10 L16,10 C14.8954305,10 14,10.8954305 14,12 C14,13.1045695 14.8954305,14 16,14 Z" id="Fill-23" fill="#F8F8F8"></path>
                                    <path d="M16,26 L30,26 C31.1045695,26 32,25.1045695 32,24 C32,22.8954305 31.1045695,22 30,22 L16,22 C14.8954305,22 14,22.8954305 14,24 C14,25.1045695 14.8954305,26 16,26 Z" id="Fill-23" fill="#F8F8F8"></path>
                                </g>
                                <g ref="second" class="second" id="Group-6" filter="url(#filter-6)" transform="translate(179.000000, 351.000000)">
                                    <path d="M7.81026801,201 C3.49676856,201 0,197.135374 0,192.368098 L0,8.63190184 C0,3.86462577 3.49676856,0 7.81026801,0 L281.189732,0 C285.503231,0 289,3.86462577 289,8.63190184 C289,84.6913344 289,141.735909 289,179.765625 C289,182.566175 289,186.766999 289,192.368098 C289,197.135374 285.503231,201 281.189732,201 L7.81026801,201 Z" id="Fill-1" fill="#FFFFFF"></path>
                                    <path d="M19.6271334,187 C15.4147766,187 12,183.558939 12,179.316611 L12,123.683389 C12,119.439963 15.4147766,116 19.6271334,116 L129.372867,116 C133.585223,116 137,119.439963 137,123.683389 L137,179.316611 C137,183.558939 133.585223,187 129.372867,187 L19.6271334,187 Z" id="Fill-7" fill="#CECECE"></path>
                                    <path d="M19.6271334,187 C15.4147766,187 12,183.558939 12,179.316611 L12,123.683389 C12,119.439963 15.4147766,116 19.6271334,116 L129.372867,116 C133.585223,116 137,119.439963 137,123.683389 L137,179.316611 C137,183.558939 133.585223,187 129.372867,187 L19.6271334,187 Z" id="Fill-7" fill="#DEDEDE"></path>
                                    <path d="M19.6271334,106 C15.4147766,106 12,102.462008 12,98.1001778 L12,40.8998222 C12,36.5368633 15.4147766,33 19.6271334,33 L129.372867,33 C133.585223,33 137,36.5368633 137,40.8998222 L137,98.1001778 C137,102.462008 133.585223,106 129.372867,106 L19.6271334,106 Z" id="Fill-7" fill="#4BBFE1"></path>
                                    <path d="M65,150.089115 C65,148.52012 66.9715938,147.513082 68.6136577,148.241502 L79.6794371,153.15273 C81.4401876,153.935457 81.4401876,156.065229 79.6794371,156.846776 L68.6136577,161.758003 C66.9715938,162.487604 65,161.479386 65,159.911571 L65,150.089115 Z" id="Fill-9" fill="#F8F8F8"></path>
                                    <path d="M67,62.4922251 C67,61.371514 68.7251445,60.6522013 70.1619505,61.1725013 L79.8445075,64.6805212 C81.3851642,65.2396118 81.3851642,66.7608781 79.8445075,67.3182822 L70.1619505,70.8271454 C68.7251445,71.3482887 67,70.6281327 67,69.5082648 L67,62.4922251 Z" id="Fill-12" fill="#F8F8F8"></path>
                                    <g filter="url(#filter-7)" id="Group-9">
                                        <g transform="translate(150.000000, 35.000000)">
                                            <path ref="sem5" class="sem5" d="M5.08981294,10.1796259 L113.866129,10.1796259 C116.677155,10.1796259 118.955942,7.900839 118.955942,5.08981294 C118.955942,2.27878687 116.677155,2.79053323e-14 113.866129,0 L5.08981294,0 C2.27878687,5.16377111e-16 -3.44251407e-16,2.27878687 0,5.08981294 C3.44251407e-16,7.900839 2.27878687,10.1796259 5.08981294,10.1796259 Z" id="Fill-13" fill="#F8F8F8"></path>
                                            <path ref="sem6" class="sem6" d="M5.08981294,35.6286906 L65.3126835,35.6286906 C68.1237096,35.6286906 70.4024964,33.3499037 70.4024964,30.5388776 C70.4024964,27.7278516 68.1237096,25.4490647 65.3126835,25.4490647 L5.08981294,25.4490647 C2.27878687,25.4490647 -3.44251407e-16,27.7278516 0,30.5388776 C3.44251407e-16,33.3499037 2.27878687,35.6286906 5.08981294,35.6286906 Z" id="Fill-15" fill="#F8F8F8"></path>
                                            <path ref="sem7" class="sem7" d="M5.08981294,61.0777552 L99.3000956,61.0777552 C102.111122,61.0777552 104.389908,58.7989684 104.389908,55.9879423 C104.389908,53.1769162 102.111122,50.8981294 99.3000956,50.8981294 L5.08981294,50.8981294 C2.27878687,50.8981294 -3.44251407e-16,53.1769162 0,55.9879423 C3.44251407e-16,58.7989684 2.27878687,61.0777552 5.08981294,61.0777552 Z" id="Fill-13" fill="#F8F8F8"></path>
                                        </g>
                                    </g>
                                    <g filter="url(#filter-8)" id="Group-7">
                                        <g transform="translate(150.000000, 122.000000)">
                                            <path ref="sem8" class="sem8" d="M6.36226617,12.7245323 L112.593676,12.7245323 C116.107459,12.7245323 118.955942,9.87604875 118.955942,6.36226617 C118.955942,2.84848359 116.107459,7.34813439e-15 112.593676,0 L6.36226617,0 C2.84848359,-1.13088545e-15 -4.30314259e-16,2.84848359 0,6.36226617 C4.30314259e-16,9.87604875 2.84848359,12.7245323 6.36226617,12.7245323 Z" id="Fill-13" fill="#F8F8F8"></path>
                                            <path ref="sem9" class="sem9" d="M6.36226617,38.173597 L64.0402303,38.173597 C67.5540128,38.173597 70.4024964,35.3251134 70.4024964,31.8113309 C70.4024964,28.2975483 67.5540128,25.4490647 64.0402303,25.4490647 L6.36226617,25.4490647 C2.84848359,25.4490647 -4.30314259e-16,28.2975483 0,31.8113309 C4.30314259e-16,35.3251134 2.84848359,38.173597 6.36226617,38.173597 Z" id="Fill-15" fill="#F8F8F8"></path>
                                            <path ref="sem10" class="sem10" d="M5.08981294,61.0777552 L99.3000956,61.0777552 C102.111122,61.0777552 104.389908,58.7989684 104.389908,55.9879423 C104.389908,53.1769162 102.111122,50.8981294 99.3000956,50.8981294 L5.08981294,50.8981294 C2.27878687,50.8981294 -3.44251407e-16,53.1769162 0,55.9879423 C3.44251407e-16,58.7989684 2.27878687,61.0777552 5.08981294,61.0777552 Z" id="Fill-13" fill="#F8F8F8"></path>
                                        </g>
                                    </g>
                                    <path d="M19,18 L41,18 C42.6568542,18 44,16.6568542 44,15 C44,13.3431458 42.6568542,12 41,12 L19,12 C17.3431458,12 16,13.3431458 16,15 C16,16.6568542 17.3431458,18 19,18 Z" id="Fill-23" fill="#E7E7E7"></path>
                                    <path d="M244,18 L272,18 C273.656854,18 275,16.6568542 275,15 C275,13.3431458 273.656854,12 272,12 L244,12 C242.343146,12 241,13.3431458 241,15 C241,16.6568542 242.343146,18 244,18 Z" id="Fill-23" fill="#E7E7E7"></path>
                                </g>
                                <g ref="third" class="third" id="Group-6" filter="url(#filter-9)" transform="translate(437.000000, 220.000000)">
                                    <g id="Group-10">
                                        <mask id="mask-11" fill="white">
                                            <use xlink:href="#path-10"></use>
                                        </mask>
                                        <use id="Mask" fill="#4F77FF" xlink:href="#path-10"></use>
                                        <g mask="url(#mask-11)">
                                            <g transform="translate(252.262712, 34.409639)">
                                                <rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="105.313559" height="154.843373" rx="12"></rect>
                                                <g id="Group-9" stroke-width="1" fill="none" transform="translate(4.589893, 88.481928)">
                                                    <path d="M3.68674699,7.37349398 L77.1352869,7.37349398 C79.171421,7.37349398 80.8220339,5.72288113 80.8220339,3.68674699 C80.8220339,1.65061285 79.171421,-1.04597094e-14 77.1352869,0 L3.68674699,0 C1.65061285,3.74031773e-16 -2.49354515e-16,1.65061285 0,3.68674699 C1.15357972e-15,5.72288113 1.65061285,7.37349398 3.68674699,7.37349398 Z" id="Fill-13" fill="#E7E7E7"></path>
                                                    <path d="M3.68674699,49.1566265 L77.1352869,49.1566265 C79.171421,49.1566265 80.8220339,47.5060137 80.8220339,45.4698795 C80.8220339,43.4337454 79.171421,41.7831325 77.1352869,41.7831325 L3.68674699,41.7831325 C1.65061285,41.7831325 -2.49354515e-16,43.4337454 0,45.4698795 C2.49354515e-16,47.5060137 1.65061285,49.1566265 3.68674699,49.1566265 Z" id="Fill-13" fill="#E7E7E7"></path>
                                                    <path d="M3.68674699,22.1204819 L42.8471513,22.1204819 C44.8832855,22.1204819 46.5338983,20.4698691 46.5338983,18.4337349 C46.5338983,16.3976008 44.8832855,14.746988 42.8471513,14.746988 L3.68674699,14.746988 C1.65061285,14.746988 -2.49354515e-16,16.3976008 0,18.4337349 C2.49354515e-16,20.4698691 1.65061285,22.1204819 3.68674699,22.1204819 Z" id="Fill-15" fill="#E7E7E7"></path>
                                                </g>
                                                <path d="M12,0 L93.3135593,0 C99.9409763,-2.99379359e-15 105.313559,5.372583 105.313559,12 L105.313559,73.7349398 L105.313559,73.7349398 L0,73.7349398 L0,12 C-2.58798134e-15,5.372583 5.372583,-5.58920087e-16 12,0 Z" id="Rectangle" fill="#DEDEDE"></path>
                                            </g>
                                        </g>
                                    </g>
                                    <g ref="icon1" class="icon1" id="Group-10" transform="translate(9.000000, 33.000000)">
                                        <rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="106.853425" height="156.707674" rx="12"></rect>
                                        <g id="Group-9" transform="translate(4.856974, 88.148067)" fill="#4BBFE1">
                                            <path d="M3.67283611,7.34567221 L76.4672324,7.34567221 C78.4956838,7.34567221 80.1400685,5.70128748 80.1400685,3.67283611 C80.1400685,1.64438474 78.4956838,-2.14897731e-15 76.4672324,0 L3.67283611,0 C1.64438474,3.72620472e-16 -2.48413648e-16,1.64438474 0,3.67283611 C2.48413648e-16,5.70128748 1.64438474,7.34567221 3.67283611,7.34567221 Z" id="Fill-13"></path>
                                            <path d="M2.4485574,48.9711481 L77.6915111,48.9711481 C79.043812,48.9711481 80.1400685,47.8748916 80.1400685,46.5225907 C80.1400685,45.1702898 79.043812,44.0740333 77.6915111,44.0740333 L2.4485574,44.0740333 C1.09625649,44.0740333 -1.65609099e-16,45.1702898 0,46.5225907 C1.65609099e-16,47.8748916 1.09625649,48.9711481 2.4485574,48.9711481 Z" id="Fill-13"></path>
                                            <path d="M3.67283611,24.485574 L42.4684154,24.485574 C44.4968668,24.485574 46.1412516,22.8411893 46.1412516,20.8127379 C46.1412516,18.7842866 44.4968668,17.1399018 42.4684154,17.1399018 L3.67283611,17.1399018 C1.64438474,17.1399018 -2.48413648e-16,18.7842866 0,20.8127379 C2.48413648e-16,22.8411893 1.64438474,24.485574 3.67283611,24.485574 Z" id="Fill-15"></path>
                                        </g>
                                    </g>
                                    <g ref="icon2" class="icon2" id="Group-10" transform="translate(133.000000, 33.000000)">
                                        <rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="105.003962" height="156.707674" rx="12"></rect>
                                        <g id="Group-9" transform="translate(4.883905, 88.148067)" fill="#E7E7E7">
                                            <path d="M3.67283611,7.34567221 L74.4696475,7.34567221 C76.4980989,7.34567221 78.1424837,5.70128748 78.1424837,3.67283611 C78.1424837,1.64438474 76.4980989,1.25059666e-14 74.4696475,0 L3.67283611,0 C1.64438474,3.72620472e-16 -2.48413648e-16,1.64438474 0,3.67283611 C2.48413648e-16,5.70128748 1.64438474,7.34567221 3.67283611,7.34567221 Z" id="Fill-13"></path>
                                            <path d="M2.4485574,48.9711481 L75.6939263,48.9711481 C77.0462272,48.9711481 78.1424837,47.8748916 78.1424837,46.5225907 C78.1424837,45.1702898 77.0462272,44.0740333 75.6939263,44.0740333 L2.4485574,44.0740333 C1.09625649,44.0740333 -1.65609099e-16,45.1702898 0,46.5225907 C1.65609099e-16,47.8748916 1.09625649,48.9711481 2.4485574,48.9711481 Z" id="Fill-13"></path>
                                            <path d="M3.67283611,24.485574 L42.7242636,24.485574 C44.7527149,24.485574 46.3970997,22.8411893 46.3970997,20.8127379 C46.3970997,18.7842866 44.7527149,17.1399018 42.7242636,17.1399018 L3.67283611,17.1399018 C1.64438474,17.1399018 -2.48413648e-16,18.7842866 0,20.8127379 C2.48413648e-16,22.8411893 1.64438474,24.485574 3.67283611,24.485574 Z" id="Fill-15"></path>
                                        </g>
                                        <path d="M12,0 L93.0039624,0 C99.6313794,2.33527693e-15 105.003962,5.372583 105.003962,12 L105.003962,73.4567221 L105.003962,73.4567221 L0,73.4567221 L0,12 C2.74108918e-15,5.372583 5.372583,-4.11163377e-15 12,0 Z" id="Rectangle" fill="#DEDEDE"></path>
                                    </g>
                                    <path d="M21,33 L104,33 C110.627417,33 116,38.372583 116,45 L116,104 L116,104 L9,104 L9,45 C9,38.372583 14.372583,33 21,33 Z" id="Rectangle" fill="#4BBFE1"></path>
                                    <path d="M19,20 L37,20 C38.6568542,20 40,18.6568542 40,17 C40,15.3431458 38.6568542,14 37,14 L19,14 C17.3431458,14 16,15.3431458 16,17 C16,18.6568542 17.3431458,20 19,20 Z" id="Fill-23" fill="#CECECE"></path>
                                    <path d="M44.1049571,18.1886003 C44.2295846,18.0869066 44.4140554,18.1031343 44.5172712,18.2259241 L47.0674697,21.2480657 L49.4743741,18.1139528 C49.5715506,17.9873766 49.7549233,17.9624941 49.8839431,18.0582377 C50.0129628,18.1545221 50.0382177,18.3351907 49.9404922,18.4617669 L47.3112347,21.885815 C47.2574307,21.9555941 47.1739797,21.9977862 47.0844894,21.9999499 C46.9955481,22.0015727 46.91045,21.963708 46.8528029,21.8960925 L44.0676237,18.5942932 C44.0237021,18.5423645 44.0017413,18.4796174 44.0000942,18.4168702 C43.9978981,18.3319451 44.0341335,18.2470201 44.1049571,18.1886003 Z" id="Fill-28" fill="#CECECE" transform="translate(47.000000, 20.000000) rotate(-90.000000) translate(-47.000000, -20.000000) "></path>
                                    <path d="M56,20 L78,20 C79.6568542,20 81,18.6568542 81,17 C81,15.3431458 79.6568542,14 78,14 L56,14 C54.3431458,14 53,15.3431458 53,17 C53,18.6568542 54.3431458,20 56,20 Z" id="Fill-23" fill="#CECECE"></path>
                                    <path d="M98,20 L120,20 C121.656854,20 123,18.6568542 123,17 C123,15.3431458 121.656854,14 120,14 L98,14 C96.3431458,14 95,15.3431458 95,17 C95,18.6568542 96.3431458,20 98,20 Z" id="Fill-23" fill="#CECECE"></path>
                                    <path d="M83.1049571,18.0943002 C83.2295846,18.0434533 83.4140554,18.0515672 83.5172712,18.112962 L86.0674697,19.6240329 L88.4743741,18.0569764 C88.5715506,17.9936883 88.7549233,17.9812471 88.8839431,18.0291188 C89.0129628,18.0772611 89.0382177,18.1675953 88.9404922,18.2308834 L86.3112347,19.9429075 C86.2574307,19.9777971 86.1739797,19.9988931 86.0844894,19.9999749 C85.9955481,20.0007863 85.91045,19.981854 85.8528029,19.9480463 L83.0676237,18.2971466 C83.0237021,18.2711823 83.0017413,18.2398087 83.0000942,18.2084351 C82.9978981,18.1659726 83.0341335,18.12351 83.1049571,18.0943002 Z" id="Fill-28" fill="#CECECE" transform="translate(86.000000, 19.000000) rotate(-90.000000) translate(-86.000000, -19.000000) "></path>
                                </g>
                                <g id="geometric-shapes" transform="translate(0.000000, 4.000000)">
                                    <circle ref="icon1" class="icon1" id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="11" cy="33" r="11"></circle>
                                    <rect ref="icon2" class="icon2" id="Rectangle" fill="#4F77FF" style="mix-blend-mode: darken;" x="618" y="41" width="41" height="29" rx="4"></rect>
                                    <ellipse ref="icon3" class="icon3" id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="64.5" cy="665" rx="10.5" ry="11"></ellipse>
                                    <circle ref="icon4" class="icon4" id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="638" cy="41" r="7"></circle>
                                    <circle ref="icon5" class="icon5" id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" transform="translate(687.500000, 8.500000) scale(-1, 1) translate(-687.500000, -8.500000) " cx="687.5" cy="8.5" r="8.5"></circle>
                                    <g id="Hero-icon" style="mix-blend-mode: multiply;" transform="translate(8.000000, 18.000000)">
                                        <g id="Icon-3">
                                            <rect ref="icon6" class="icon6" id="Rectangle" fill="#4F77FF" x="585.065949" y="536" width="22.0604534" height="64" rx="6"></rect>
                                            <rect ref="icon7" class="icon7" id="Rectangle" fill="#4F77FF" x="561" y="549.784615" width="22.0604534" height="50.2153846" rx="6"></rect>
                                            <ellipse ref="icon8" class="icon8" id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="606.345079" cy="569.025641" rx="13.2571471" ry="13.3333333"></ellipse>
                                            <rect ref="icon9" class="icon9" id="Rectangle" fill="#4F77FF" x="19" y="0" width="18" height="51" rx="6"></rect>
                                            <rect ref="icon10" class="icon10" id="Rectangle" fill="#4F77FF" x="54" y="622" width="32" height="27" rx="6"></rect>
                                            <rect ref="icon11" class="icon11" id="Rectangle" fill="#4F77FF" x="0" y="11" width="18" height="40" rx="6"></rect>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
  </div>
  <section class="relative z-1" style="background: #efefef url('/images/background-pattern.svg') center -5px/100% repeat">
    <div class="relative z-1 py-8 mt-12 lg:mt-0 lg:mb-20">
        <div class="relative">
            <svg class="lg:hidden absolute top-4 left-14 anime" width="22px" height="29px" viewBox="0 0 22 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_mobile_SEM" transform="translate(-54.000000, -710.000000)">
                        <g id="SEO" transform="translate(16.000000, 717.000000)" fill="#4BBFE1">
                            <circle id="Oval" style="mix-blend-mode: multiply;" cx="52" cy="8" r="8"></circle>
                        </g>
                        <rect id="Rectangle" fill="#4F77FF" style="mix-blend-mode: multiply;" x="54" y="710" width="14" height="29" rx="3"></rect>
                    </g>
                </g>
            </svg>
            <svg class="w-screen p-6 lg:h-72 lg:hidden mb-8" width="100%" height="300px" viewBox="0 0 352 268" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Group</title>
                <defs>
                    <polygon id="path-1" points="0 0 180 0 180 158.839844 0 158.839844"></polygon>
                    <polygon id="path-3" points="0 0 180 0 180 72.84375 0 72.84375"></polygon>
                    <path d="M4.16187292,109 C1.86332996,109 0,106.904258 0,104.319018 L0,4.6809816 C0,2.09574233 1.86332996,0 4.16187292,0 L149.838127,0 C152.13667,0 154,2.09574233 154,4.6809816 L154,104.319018 C154,106.904258 152.13667,109 149.838127,109 L4.16187292,109 Z" id="path-5"></path>
                    <filter id="filter-7">
                        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.905882 0 0 0 0 0.905882 0 0 0 1.000000 0"></feColorMatrix>
                    </filter>
                    <filter id="filter-8">
                        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.905882 0 0 0 0 0.905882 0 0 0 1.000000 0"></feColorMatrix>
                    </filter>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_mobile_SEM" transform="translate(-23.000000, -720.000000)">
                        <g id="Group" transform="translate(23.000000, 721.000000)">
                            <g id="Group-11" transform="translate(79.000000, 8.000000)">
                                <path d="M90.8887555,37.9363245 C48.8352758,31.5345874 15.9484362,18.6455285 17.4348282,9.14891615 C18.9205527,-0.348354488 54.2161883,-2.85796184 96.2703354,3.54443362 C138.323815,9.94617075 171.210655,22.8345714 169.724263,32.331842 C168.237871,41.8291127 132.942235,44.3380617 90.8887555,37.9363245 Z" id="Fill-1" fill="#D1D1D1"></path>
                                <g id="Group-5" transform="translate(0.000000, 9.105469)">
                                    <mask id="mask-2" fill="white">
                                        <use xlink:href="#path-1"></use>
                                    </mask>
                                    <g id="Clip-4"></g>
                                    <path d="M0,158.839844 L180,158.839844 L169.090667,23.4652778 C169.090667,23.4652778 161.7,39.5921547 92.7266667,28.8797309 C63.636,25.2700955 22.3601687,14.4398655 16.905502,0 L0,158.839844 Z" id="Fill-3" fill="#DBDBDB" mask="url(#mask-2)"></path>
                                </g>
                                <g id="Group-8" transform="translate(0.000000, 167.945312)">
                                    <mask id="mask-4" fill="white">
                                        <use xlink:href="#path-3"></use>
                                    </mask>
                                    <g id="Clip-7"></g>
                                    <path d="M165.454,72.84375 C165.454,72.84375 174.545333,58.9688106 178.182,39.8906099 C180,27.7498789 180,0 180,0 L0,0 C1.212,27.7498789 1.818,41.6248183 1.818,41.6248183 C1.818,41.6248183 5.454,62.4378634 14.5453333,72.84375 L165.454,72.84375 Z" id="Fill-6" fill="#D1D1D1" mask="url(#mask-4)"></path>
                                </g>
                                <path d="M15.3409091,239.777344 C15.3409091,239.777344 24.4589829,256.342151 29.9300947,258.181785 C35.4012064,260.022769 150.291879,258.181785 150.291879,258.181785 L166.704545,239.777344 L15.3409091,239.777344 Z" id="Fill-9" fill="#DBDBDB"></path>
                            </g>
                            <g ref="mfirst" class="mfirst" id="Group-34" transform="translate(164.000000, 0.000000)">
                                <path d="M3.2785991,136 C1.46751219,136 0,134.61956 0,132.917187 L0,3.08281349 C0,1.38043972 1.46751219,0 3.2785991,0 L151.721401,0 C153.53189,0 155,1.38043972 155,3.08281349 L155,132.917187 C155,134.61956 153.53189,136 151.721401,136 L3.2785991,136 Z" id="Fill-16" stroke="#F8F8F8" fill="#FFFFFF"></path>
                                <path d="M155,21 L0,21 L0,3.91770973 C0,1.75376958 1.71756757,0 3.83550193,0 L151.164498,0 C153.283031,0 155,1.75376958 155,3.91770973 L155,21 Z" id="Fill-17" fill="#4F77FF"></path>
                                <path d="M140,17 C136.685484,17 134,14.3130338 134,11 C134,7.68696621 136.685484,5 140,5 C143.314516,5 146,7.68696621 146,11 C146,14.3130338 143.314516,17 140,17 Z" id="Fill-18" fill="#FFFFFF"></path>
                                <path d="M9.5,37 L142.5,37 C144.432997,37 146,35.4329966 146,33.5 C146,31.5670034 144.432997,30 142.5,30 L9.5,30 C7.56700338,30 6,31.5670034 6,33.5 C6,35.4329966 7.56700338,37 9.5,37 Z" id="Fill-21" fill="#4BBFE1"></path>
                                <path d="M10.5,46 L88.5,46 C90.4329966,46 92,44.4329966 92,42.5 C92,40.5670034 90.4329966,39 88.5,39 L10.5,39 C8.56700338,39 7,40.5670034 7,42.5 C7,44.4329966 8.56700338,46 10.5,46 Z" id="Fill-21" fill="#4BBFE1"></path>
                                <path d="M7.5,67 L129.5,67 C130.328427,67 131,66.3284271 131,65.5 C131,64.6715729 130.328427,64 129.5,64 L7.5,64 C6.67157288,64 6,64.6715729 6,65.5 C6,66.3284271 6.67157288,67 7.5,67 Z" id="Fill-23" fill="#FCFCFC"></path>
                                <path d="M7.5,67 L129.5,67 C130.328427,67 131,66.3284271 131,65.5 C131,64.6715729 130.328427,64 129.5,64 L7.5,64 C6.67157288,64 6,64.6715729 6,65.5 C6,66.3284271 6.67157288,67 7.5,67 Z" id="Fill-23" fill="#4BBFE1"></path>
                                <polygon id="Fill-26" fill="#C8C8C8" points="6 56.92 146 56.92 146 56.08 6 56.08"></polygon>
                                <polygon id="Fill-29" fill="#C8C8C8" points="6 73.92 146 73.92 146 73.08 6 73.08"></polygon>
                                <polygon id="Fill-30" fill="#C8C8C8" points="6 91.92 146 91.92 146 91.08 6 91.08"></polygon>
                                <path d="M136.12245,64.1414502 C136.267849,64.06518 136.483065,64.0777565 136.603483,64.1694431 L139.578715,66.4360493 L142.38677,64.0854646 C142.500142,63.9905325 142.714077,63.9718706 142.8646,64.0436783 C143.015123,64.1158916 143.044587,64.251393 142.930574,64.3463252 L139.863107,66.9143612 C139.800336,66.9666956 139.702976,66.9983397 139.598571,66.9999624 C139.494806,67.0011795 139.395525,66.972781 139.32827,66.9220694 L136.078894,64.4457199 C136.027652,64.4067734 136.002031,64.359713 136.00011,64.3126526 C135.997548,64.2489589 136.039822,64.1852651 136.12245,64.1414502 Z" id="Fill-27" fill="#C8C8C8"></path>
                                <path d="M136.12245,102.14145 C136.267849,102.06518 136.483065,102.077351 136.603483,102.169443 L139.578715,104.436049 L142.38677,102.085465 C142.500142,101.990532 142.714077,101.971871 142.8646,102.043678 C143.015123,102.115892 143.044587,102.251393 142.930574,102.346325 L139.863107,104.914361 C139.800336,104.966696 139.702976,104.99834 139.598571,104.999962 C139.494806,105.00118 139.395525,104.972781 139.32827,104.922069 L136.078894,102.44572 C136.027652,102.406773 136.002031,102.359713 136.00011,102.312653 C135.997548,102.248959 136.039822,102.185265 136.12245,102.14145 Z" id="Fill-28" fill="#C8C8C8"></path>
                                <path d="M136.12245,81.1414502 C136.267849,81.06518 136.483065,81.0773508 136.603483,81.1690374 L139.578715,83.4360493 L142.38677,81.0854646 C142.500142,80.9905325 142.714077,80.9718706 142.8646,81.0436783 C143.015123,81.1158916 143.044587,81.251393 142.930574,81.3463252 L139.863107,83.9143612 C139.800336,83.9666956 139.702976,83.9983397 139.598571,83.9999624 C139.494806,84.0011795 139.395525,83.972781 139.32827,83.9220694 L136.078894,81.4457199 C136.027652,81.4067734 136.002031,81.359713 136.00011,81.3126526 C135.997548,81.2489589 136.039822,81.1852651 136.12245,81.1414502 Z" id="Fill-32" fill="#C8C8C8"></path>
                                <rect id="Rectangle" fill="#4C72FF" x="7" y="97" width="46" height="28" rx="4"></rect>
                                <path d="M7.5,86 L129.5,86 C130.328427,86 131,85.3284271 131,84.5 C131,83.6715729 130.328427,83 129.5,83 L7.5,83 C6.67157288,83 6,83.6715729 6,84.5 C6,85.3284271 6.67157288,86 7.5,86 Z" id="Fill-23" fill="#4BBFE1"></path>
                                <path d="M58.5,116 L112.5,116 C113.328427,116 114,115.328427 114,114.5 C114,113.671573 113.328427,113 112.5,113 L58.5,113 C57.6715729,113 57,113.671573 57,114.5 C57,115.328427 57.6715729,116 58.5,116 Z" id="Fill-23" fill="#E7E7E7"></path>
                                <path d="M58.5,108 L112.5,108 C113.328427,108 114,107.328427 114,106.5 C114,105.671573 113.328427,105 112.5,105 L58.5,105 C57.6715729,105 57,105.671573 57,106.5 C57,107.328427 57.6715729,108 58.5,108 Z" id="Fill-23" fill="#E7E7E7"></path>
                                <path d="M58.5,122 L93.5,122 C94.3284271,122 95,121.328427 95,120.5 C95,119.671573 94.3284271,119 93.5,119 L58.5,119 C57.6715729,119 57,119.671573 57,120.5 C57,121.328427 57.6715729,122 58.5,122 Z" id="Fill-23" fill="#E7E7E7"></path>
                                <path d="M8,11 L16,11 C16.5522847,11 17,10.5522847 17,10 C17,9.44771525 16.5522847,9 16,9 L8,9 C7.44771525,9 7,9.44771525 7,10 C7,10.5522847 7.44771525,11 8,11 Z" id="Fill-23" fill="#F8F8F8"></path>
                                <path d="M8,7 L16,7 C16.5522847,7 17,6.55228475 17,6 C17,5.44771525 16.5522847,5 16,5 L8,5 C7.44771525,5 7,5.44771525 7,6 C7,6.55228475 7.44771525,7 8,7 Z" id="Fill-23" fill="#F8F8F8"></path>
                                <path d="M8,14 L16,14 C16.5522847,14 17,13.5522847 17,13 C17,12.4477153 16.5522847,12 16,12 L8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 Z" id="Fill-23" fill="#F8F8F8"></path>
                            </g>
                            <g ref="msecond" class="msecond" id="Group-6" transform="translate(164.000000, 144.000000)">
                                <g id="Group-10">
                                    <g id="Mask-2">
                                        <mask id="mask-6" fill="white">
                                            <use xlink:href="#path-5"></use>
                                        </mask>
                                        <use id="Mask" fill="#4F77FF" xlink:href="#path-5"></use>
                                    </g>
                                    <g transform="translate(134.423729, 18.385542)">
                                        <rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="56.1186441" height="82.7349398" rx="12"></rect>
                                        <g id="Group-9" transform="translate(2.445825, 47.277108)" fill="#E7E7E7">
                                            <path d="M1.96987952,3.93975904 L41.0979171,3.93975904 C42.1858515,3.93975904 43.0677966,3.05781393 43.0677966,1.96987952 C43.0677966,0.881945101 42.1858515,-2.42029636e-15 41.0979171,0 L1.96987952,0 C0.881945101,1.9985031e-16 -1.3323354e-16,0.881945101 0,1.96987952 C1.3323354e-16,3.05781393 0.881945101,3.93975904 1.96987952,3.93975904 Z" id="Fill-13"></path>
                                            <path d="M1.96987952,26.2650602 L41.0979171,26.2650602 C42.1858515,26.2650602 43.0677966,25.3831151 43.0677966,24.2951807 C43.0677966,23.2072463 42.1858515,22.3253012 41.0979171,22.3253012 L1.96987952,22.3253012 C0.881945101,22.3253012 -1.3323354e-16,23.2072463 0,24.2951807 C1.3323354e-16,25.3831151 0.881945101,26.2650602 1.96987952,26.2650602 Z" id="Fill-13"></path>
                                            <path d="M1.96987952,11.8192771 L22.8267307,11.8192771 C23.9146651,11.8192771 24.7966102,10.937332 24.7966102,9.84939759 C24.7966102,8.76146317 23.9146651,7.87951807 22.8267307,7.87951807 L1.96987952,7.87951807 C0.881945101,7.87951807 -1.3323354e-16,8.76146317 0,9.84939759 C1.3323354e-16,10.937332 0.881945101,11.8192771 1.96987952,11.8192771 Z" id="Fill-15"></path>
                                        </g>
                                        <path d="M12,0 L44.1186441,0 C50.7460611,-1.21743675e-15 56.1186441,5.372583 56.1186441,12 L56.1186441,39.3975904 L56.1186441,39.3975904 L0,39.3975904 L0,12 C-8.11624501e-16,5.372583 5.372583,1.21743675e-15 12,0 Z" id="Rectangle" fill="#D1D1D1"></path>
                                    </g>
                                </g>
                                <g id="Group-10" transform="translate(5.000000, 17.000000)">
                                    <rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="56.7950612" height="84.0577561" rx="12"></rect>
                                    <g id="Group-9" transform="translate(2.581594, 47.282488)" fill="#4BBFE1">
                                        <path d="M1.97010366,3.94020732 L40.6261922,3.94020732 C41.7142504,3.94020732 42.5962959,3.05816187 42.5962959,1.97010366 C42.5962959,0.882045452 41.7142504,4.66260765e-16 40.6261922,0 L1.97010366,0 C0.882045452,1.9987305e-16 -1.332487e-16,0.882045452 0,1.97010366 C1.332487e-16,3.05816187 0.882045452,3.94020732 1.97010366,3.94020732 Z" id="Fill-13"></path>
                                        <path d="M1.31340244,26.2680488 L41.2828934,26.2680488 C42.0082656,26.2680488 42.5962959,25.6800185 42.5962959,24.9546463 C42.5962959,24.2292742 42.0082656,23.6412439 41.2828934,23.6412439 L1.31340244,23.6412439 C0.588030302,23.6412439 -8.88324666e-17,24.2292742 0,24.9546463 C8.88324666e-17,25.6800185 0.588030302,26.2680488 1.31340244,26.2680488 Z" id="Fill-13"></path>
                                        <path d="M1.97010366,13.1340244 L22.5550364,13.1340244 C23.6430946,13.1340244 24.52514,12.2519789 24.52514,11.1639207 C24.52514,10.0758625 23.6430946,9.19381707 22.5550364,9.19381707 L1.97010366,9.19381707 C0.882045452,9.19381707 -1.332487e-16,10.0758625 0,11.1639207 C1.332487e-16,12.2519789 0.882045452,13.1340244 1.97010366,13.1340244 Z" id="Fill-15"></path>
                                    </g>
                                </g>
                                <g id="Group-10" transform="translate(71.000000, 17.000000)">
                                    <rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="55.7782652" height="84.0577561" rx="12"></rect>
                                    <g id="Group-9" transform="translate(2.594338, 47.282488)" fill="#E7E7E7">
                                        <path d="M1.97010366,3.94020732 L39.539303,3.94020732 C40.6273612,3.94020732 41.5094067,3.05816187 41.5094067,1.97010366 C41.5094067,0.882045452 40.6273612,-2.77360732e-15 39.539303,0 L1.97010366,0 C0.882045452,1.9987305e-16 -1.332487e-16,0.882045452 0,1.97010366 C1.332487e-16,3.05816187 0.882045452,3.94020732 1.97010366,3.94020732 Z" id="Fill-13"></path>
                                        <path d="M1.31340244,26.2680488 L40.1960042,26.2680488 C40.9213764,26.2680488 41.5094067,25.6800185 41.5094067,24.9546463 C41.5094067,24.2292742 40.9213764,23.6412439 40.1960042,23.6412439 L1.31340244,23.6412439 C0.588030302,23.6412439 -8.88324666e-17,24.2292742 0,24.9546463 C8.88324666e-17,25.6800185 0.588030302,26.2680488 1.31340244,26.2680488 Z" id="Fill-13"></path>
                                        <path d="M1.97010366,13.1340244 L22.6761065,13.1340244 C23.7641648,13.1340244 24.6462102,12.2519789 24.6462102,11.1639207 C24.6462102,10.0758625 23.7641648,9.19381707 22.6761065,9.19381707 L1.97010366,9.19381707 C0.882045452,9.19381707 -1.332487e-16,10.0758625 0,11.1639207 C1.332487e-16,12.2519789 0.882045452,13.1340244 1.97010366,13.1340244 Z" id="Fill-15"></path>
                                    </g>
                                    <path d="M12,0 L43.7782652,0 C50.4056822,4.668892e-15 55.7782652,5.372583 55.7782652,12 L55.7782652,39.4020732 L55.7782652,39.4020732 L0,39.4020732 L0,12 C-2.58798134e-15,5.372583 5.372583,1.21743675e-15 12,0 Z" id="Rectangle" fill="#D1D1D1"></path>
                                </g>
                                <path d="M17,17 L50,17 C56.627417,17 62,22.372583 62,29 L62,55 L62,55 L5,55 L5,29 C5,22.372583 10.372583,17 17,17 Z" id="Rectangle" fill="#4BBFE1"></path>
                                <path d="M9.5,11 L19.5,11 C20.3284271,11 21,10.3284271 21,9.5 C21,8.67157288 20.3284271,8 19.5,8 L9.5,8 C8.67157288,8 8,8.67157288 8,9.5 C8,10.3284271 8.67157288,11 9.5,11 Z" id="Fill-23" fill="#CECECE"></path>
                                <path d="M24.0524785,10.0943002 C24.1147923,10.0434533 24.2070277,10.0515672 24.2586356,10.112962 L25.5337349,11.6240329 L26.737187,10.0569764 C26.7857753,9.99368832 26.8774617,9.98124707 26.9419715,10.0291188 C27.0064814,10.0772611 27.0191089,10.1675953 26.9702461,10.2308834 L25.6556173,11.9429075 C25.6287154,11.9777971 25.5869898,11.9988931 25.5422447,11.9999749 C25.4977741,12.0007863 25.455225,11.981854 25.4264014,11.9480463 L24.0338118,10.2971466 C24.011851,10.2711823 24.0008706,10.2398087 24.0000471,10.2084351 C23.9989491,10.1659726 24.0170667,10.12351 24.0524785,10.0943002 Z" id="Fill-28" fill="#CECECE" transform="translate(25.500000, 11.000000) rotate(-90.000000) translate(-25.500000, -11.000000) "></path>
                                <path d="M29.5,11 L41.5,11 C42.3284271,11 43,10.3284271 43,9.5 C43,8.67157288 42.3284271,8 41.5,8 L29.5,8 C28.6715729,8 28,8.67157288 28,9.5 C28,10.3284271 28.6715729,11 29.5,11 Z" id="Fill-23" fill="#CECECE"></path>
                                <path d="M52.5,11 L64.5,11 C65.3284271,11 66,10.3284271 66,9.5 C66,8.67157288 65.3284271,8 64.5,8 L52.5,8 C51.6715729,8 51,8.67157288 51,9.5 C51,10.3284271 51.6715729,11 52.5,11 Z" id="Fill-23" fill="#CECECE"></path>
                                <path d="M44.0524785,10.0471501 C44.1147923,10.0217267 44.2070277,10.0257836 44.2586356,10.056481 L45.5337349,10.8120164 L46.737187,10.0284882 C46.7857753,9.99684416 46.8774617,9.99062354 46.9419715,10.0145594 C47.0064814,10.0386305 47.0191089,10.0837977 46.9702461,10.1154417 L45.6556173,10.9714537 C45.6287154,10.9888985 45.5869898,10.9994466 45.5422447,10.9999875 C45.4977741,11.0003932 45.455225,10.990927 45.4264014,10.9740231 L44.0338118,10.1485733 C44.011851,10.1355911 44.0008706,10.1199043 44.0000471,10.1042175 C43.9989491,10.0829863 44.0170667,10.061755 44.0524785,10.0471501 Z" id="Fill-28" fill="#CECECE" transform="translate(45.500000, 10.500000) rotate(-90.000000) translate(-45.500000, -10.500000) "></path>
                            </g>
                            <g ref="mthird" class="mthird" id="Group-6" transform="translate(0.000000, 88.000000)">
                                <path d="M4.16187292,107 C1.86332996,107 0,104.942712 0,102.404908 L0,4.59509202 C0,2.05728834 1.86332996,0 4.16187292,0 L149.838127,0 C152.13667,0 154,2.05728834 154,4.59509202 L154,102.404908 C154,104.942712 152.13667,107 149.838127,107 L4.16187292,107 Z" id="Fill-1" fill="#FFFFFF"></path>
                                <path d="M10.0881435,100 C7.83032025,100 6,98.1583056 6,95.8877638 L6,66.1122362 C6,63.8411069 7.83032025,62 10.0881435,62 L68.9118565,62 C71.1696797,62 73,63.8411069 73,66.1122362 L73,95.8877638 C73,98.1583056 71.1696797,100 68.9118565,100 L10.0881435,100 Z" id="Fill-7" fill="#CECECE"></path>
                                <path d="M10.0881435,100 C7.83032025,100 6,98.1583056 6,95.8877638 L6,66.1122362 C6,63.8411069 7.83032025,62 10.0881435,62 L68.9118565,62 C71.1696797,62 73,63.8411069 73,66.1122362 L73,95.8877638 C73,98.1583056 71.1696797,100 68.9118565,100 L10.0881435,100 Z" id="Fill-7" fill="#D1D1D1"></path>
                                <path d="M10.0881435,56 C7.83032025,56 6,54.10984 6,51.779547 L6,21.220453 C6,18.8895571 7.83032025,17 10.0881435,17 L68.9118565,17 C71.1696797,17 73,18.8895571 73,21.220453 L73,51.779547 C73,54.10984 71.1696797,56 68.9118565,56 L10.0881435,56 Z" id="Fill-7" fill="#4BBFE1"></path>
                                <path d="M34,80.0445576 C34,79.2600598 35.1090215,78.7565409 36.0326824,79.1207509 L42.2571834,81.5763648 C43.2476055,81.9677283 43.2476055,83.0326147 42.2571834,83.4233879 L36.0326824,85.8790017 C35.1090215,86.2438021 34,85.7396929 34,84.9557854 L34,80.0445576 Z" id="Fill-9" fill="#F8F8F8"></path>
                                <path d="M36,33.7461126 C36,33.185757 36.8625723,32.8261006 37.5809752,33.0862507 L42.4222537,34.8402606 C43.1925821,35.1198059 43.1925821,35.8804391 42.4222537,36.1591411 L37.5809752,37.9135727 C36.8625723,38.1741443 36,37.8140663 36,37.2541324 L36,33.7461126 Z" id="Fill-12" fill="#F8F8F8"></path>
                                <g filter="url(#filter-7)" id="Group-9">
                                    <g transform="translate(80.000000, 19.000000)">
                                        <path d="M2.70354418,5.40708837 L60.759582,5.40708837 C62.2527082,5.40708837 63.4631262,4.19667041 63.4631262,2.70354418 C63.4631262,1.21041796 62.2527082,-1.60655047e-15 60.759582,0 L2.70354418,0 C1.21041796,7.18372047e-16 -1.82855225e-16,1.21041796 0,2.70354418 C1.82855225e-16,4.19667041 1.21041796,5.40708837 2.70354418,5.40708837 Z" id="Fill-13" fill="#F8F8F8"></path>
                                        <path d="M2.70354418,18.9248093 L34.8562652,18.9248093 C36.3493914,18.9248093 37.5598094,17.7143913 37.5598094,16.2212651 C37.5598094,14.7281389 36.3493914,13.5177209 34.8562652,13.5177209 L2.70354418,13.5177209 C1.21041796,13.5177209 -1.82855225e-16,14.7281389 0,16.2212651 C1.82855225e-16,17.7143913 1.21041796,18.9248093 2.70354418,18.9248093 Z" id="Fill-15" fill="#F8F8F8"></path>
                                        <path d="M2.70354418,32.4425302 L52.9885869,32.4425302 C54.4817132,32.4425302 55.6921311,31.2321123 55.6921311,29.738986 C55.6921311,28.2458598 54.4817132,27.0354418 52.9885869,27.0354418 L2.70354418,27.0354418 C1.21041796,27.0354418 -1.82855225e-16,28.2458598 0,29.738986 C1.82855225e-16,31.2321123 1.21041796,32.4425302 2.70354418,32.4425302 Z" id="Fill-13" fill="#F8F8F8"></path>
                                    </g>
                                </g>
                                <g filter="url(#filter-8)" id="Group-7">
                                    <g transform="translate(80.000000, 65.000000)">
                                        <path d="M3.37943023,6.75886046 L60.0836959,6.75886046 C61.9501037,6.75886046 63.4631262,5.24583801 63.4631262,3.37943023 C63.4631262,1.51302245 61.9501037,1.8775925e-15 60.0836959,0 L3.37943023,0 C1.51302245,-1.01235663e-16 -2.28569031e-16,1.51302245 0,3.37943023 C2.28569031e-16,5.24583801 1.51302245,6.75886046 3.37943023,6.75886046 Z" id="Fill-13" fill="#F8F8F8"></path>
                                        <path d="M3.37943023,20.2765814 L34.1803791,20.2765814 C36.0467869,20.2765814 37.5598094,18.7635589 37.5598094,16.8971512 C37.5598094,15.0307434 36.0467869,13.5177209 34.1803791,13.5177209 L3.37943023,13.5177209 C1.51302245,13.5177209 -2.28569031e-16,15.0307434 0,16.8971512 C2.28569031e-16,18.7635589 1.51302245,20.2765814 3.37943023,20.2765814 Z" id="Fill-15" fill="#F8F8F8"></path>
                                        <path d="M2.70354418,32.4425302 L52.9885869,32.4425302 C54.4817132,32.4425302 55.6921311,31.2321123 55.6921311,29.738986 C55.6921311,28.2458598 54.4817132,27.0354418 52.9885869,27.0354418 L2.70354418,27.0354418 C1.21041796,27.0354418 -1.82855225e-16,28.2458598 0,29.738986 C1.82855225e-16,31.2321123 1.21041796,32.4425302 2.70354418,32.4425302 Z" id="Fill-13" fill="#F8F8F8"></path>
                                    </g>
                                </g>
                                <path d="M9.5,9 L21.5,9 C22.3284271,9 23,8.32842712 23,7.5 C23,6.67157288 22.3284271,6 21.5,6 L9.5,6 C8.67157288,6 8,6.67157288 8,7.5 C8,8.32842712 8.67157288,9 9.5,9 Z" id="Fill-23" fill="#E7E7E7"></path>
                                <path d="M129.5,9 L144.5,9 C145.328427,9 146,8.32842712 146,7.5 C146,6.67157288 145.328427,6 144.5,6 L129.5,6 C128.671573,6 128,6.67157288 128,7.5 C128,8.32842712 128.671573,9 129.5,9 Z" id="Fill-23" fill="#E7E7E7"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>

            <svg ref="anime" class="relative lg:hidden top-5 left-4 z-behind anime" width="36px" height="35px" viewBox="0 0 36 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_mobile_SEM" transform="translate(-16.000000, -1030.000000)">
                        <g id="SEO" transform="translate(16.000000, 1030.000000)">
                            <circle id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="11" cy="11" r="11"></circle>
                            <rect id="Rectangle" fill="#4F77FF" style="mix-blend-mode: darken;" x="8" y="6.5483871" width="28" height="28.4516129" rx="4"></rect>
                        </g>
                    </g>
                </g>
            </svg>
            <svg class="lg:hidden absolute bottom-16 left-12 anime" width="27px" height="20px" viewBox="0 0 27 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_mobile_SEM" transform="translate(-50.000000, -947.000000)">
                        <g id="SEO" transform="translate(16.000000, 717.000000)" fill="#4BBFE1">
                            <circle id="Oval" style="mix-blend-mode: multiply;" cx="55" cy="244" r="6"></circle>
                        </g>
                        <rect id="Rectangle" fill="#4F77FF" style="mix-blend-mode: multiply;" x="50" y="947" width="21" height="16" rx="3"></rect>
                    </g>
                </g>
            </svg>
        </div>
      <div class="relative md:flex xl:mx-40 xl:pt-24">

        <div class="relative xl:inline-block mx-8 md:ml-8 lg:mx-0 lg:ml-8 xl:mx-0 xl:mt-16 text-gray-600 bg-white p-8 xl:p-14 xl:flex-1 md:h-1/6 lg:mt-16">

            <svg class="hidden lg:block absolute right-40 -top-8 z-behind anime" width="51px" height="50px" viewBox="0 0 51 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_desktop_SEM" transform="translate(-705.000000, -1095.000000)">
                        <g id="Secondary-section" transform="translate(-13.000000, 205.000000)">
                            <g id="Secondar-background" transform="translate(0.000000, 410.000000)">
                                <g id="geometric-shapes" transform="translate(362.000000, 430.000000)">
                                    <circle id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="371.5" cy="65.5" r="15.5"></circle>
                                    <rect id="Rectangle" fill="#4F77FF" style="mix-blend-mode: multiply;" x="367" y="59.7753059" width="40" height="40.2246941" rx="4"></rect>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <h4 class="text-xl md:text-2xl lg:text-3xl pb-2">
                Content + SEO
            </h4>
            <svg width="62px" height="3px" viewBox="0 0 62 3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_mobile_SEM" transform="translate(-62.000000, -1120.000000)" fill="#4BBFE1">
                        <g id="SEO" transform="translate(16.000000, 1030.000000)">
                            <g id="Group-2" transform="translate(14.000000, 14.000000)">
                                <polygon id="Rectangle" points="32 76 73.5535038 76 94 76 94 79 32 79"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <p class="pt-4 lg:text-lg">
                Websites are architected for SEO performance, optimized for natural language, and configured for Page Experience.
                Key pages are assigned commonly returned digital assets to increase the likelihood of being featured in universal
                search and returned by virtual assistances. All pages and digital assets are optimized for the most relevant and
                productive search behavior to drive the most valuable interactions.
            </p>

        <svg class="hidden lg:block absolute z-behind right-10 -bottom-4 anime" width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_desktop_SEM" transform="translate(-788.000000, -1588.000000)" fill="#4BBFE1">
                    <g id="Secondary-section" transform="translate(-13.000000, 205.000000)">
                        <g id="Secondar-background" transform="translate(0.000000, 410.000000)">
                            <g id="geometric-shapes" transform="translate(362.000000, 430.000000)">
                                <circle id="Oval" style="mix-blend-mode: multiply;" cx="457" cy="561" r="18"></circle>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

        <svg class="hidden lg:block absolute z-behind left-8 -bottom-4 anime" width="58px" height="31px" viewBox="0 0 58 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_desktop_SEM" transform="translate(-349.000000, -1593.000000)" fill="#4F77FF">
                    <g id="Secondary-section" transform="translate(-13.000000, 205.000000)">
                        <g id="Secondar-background" transform="translate(0.000000, 410.000000)">
                            <g id="geometric-shapes" transform="translate(362.000000, 430.000000)">
                                <rect id="Rectangle" style="mix-blend-mode: darken;" x="0" y="548" width="58" height="31" rx="4"></rect>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        </div>
        <svg ref="anime" class="relative lg:hidden top-4 left-72 anime" width="17px" height="17px" x="300px" y="150px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="IE_mobile_SAMD" transform="translate(-302.000000, -871.000000)" fill="#4BBFE1">
                <g id="Product-Development.---Column-1" transform="translate(29.000000, 871.000000)">
                    <circle id="Oval" style="mix-blend-mode: multiply;" cx="281.5" cy="8.5" r="8.5"></circle>
                </g>
            </g>
        </g>
        </svg>
        <div class="relative mx-8 lg:mr-8 text-gray-600 bg-white lg:mt-0 p-8 mt-16 xl:mt-0 xl:p-14 xl:flex-1 xl:h-1/6 md:h-1/6">
            <div ref="anime" class="lg:hidden absolute left-9 -top-5 w-6 h-6 bg-blue-500 rounded-full z-behind anime" style=""></div>
            <div ref="anime" class="lg:hidden absolute -top-4 left-12 w-16 h-4 rounded-t-xl anime" style="background-color: #4F77FF; mix-blend-mode: multiply;"></div>

            <svg class="hidden lg:block absolute z-behind -top-4 right-60 anime" width="68px" height="223px" viewBox="0 0 68 223" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_desktop_SEM" transform="translate(-1378.000000, -1045.000000)">
                        <g id="Secondary-section" transform="translate(-13.000000, 205.000000)">
                            <g id="Secondar-background" transform="translate(0.000000, 410.000000)">
                                <g id="geometric-shapes" transform="translate(362.000000, 430.000000)">
                                    <rect id="Rectangle" fill="#4F77FF" style="mix-blend-mode: darken;" x="1029" y="9" width="58" height="214" rx="4"></rect>
                                    <circle id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="1082.5" cy="14.5" r="14.5"></circle>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <h4 class="text-xl md:text-2xl lg:text-3xl pb-2">
                Paid Search
            </h4>
            <svg width="62px" height="3px" viewBox="0 0 62 3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_mobile_SEM" transform="translate(-62.000000, -1120.000000)" fill="#4BBFE1">
                        <g id="SEO" transform="translate(16.000000, 1030.000000)">
                            <g id="Group-2" transform="translate(14.000000, 14.000000)">
                                <polygon id="Rectangle" points="32 76 73.5535038 76 94 76 94 79 32 79"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <p class="pt-4 lg:text-lg">
                We identify value in every click by organizing PPC accounts and assets to create efficiency and pinpoint learnings. Advertising
                strategy, keywords and creative are informed by natural language search behavior and desired high value actions. Messaging
                heavily impacts CTR, so specific calls-to-action are incorporated into ads to maximize clicks and guide on-site behavior.
                By focusing on what really matters to your audience, we redefine customer journeys at decision making moments.
            </p>

            <svg class="hidden lg:block absolute z-behind -bottom-24 left-12 anime" width="104px" height="101px" viewBox="0 0 104 101" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_desktop_SEM" transform="translate(-1036.000000, -1534.000000)" fill="#4BBFE1">
                        <g id="Secondary-section" transform="translate(-13.000000, 205.000000)">
                            <g id="Secondar-background" transform="translate(0.000000, 410.000000)">
                                <g id="geometric-shapes" transform="translate(362.000000, 430.000000)">
                                    <circle id="Oval" style="mix-blend-mode: multiply;" cx="782.5" cy="581.5" r="8.5"></circle>
                                    <circle id="Oval" style="mix-blend-mode: multiply;" cx="705" cy="507" r="18"></circle>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>

            <svg class="hidden lg:block absolute z-behind -right-4 -bottom-2 anime" width="40px" height="41px" viewBox="0 0 40 41" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_desktop_SEM" transform="translate(-1657.000000, -1512.000000)" fill="#4F77FF">
                        <g id="Secondary-section" transform="translate(-13.000000, 205.000000)">
                            <g id="Secondar-background" transform="translate(0.000000, 410.000000)">
                                <g id="geometric-shapes" transform="translate(362.000000, 430.000000)">
                                    <rect id="Rectangle" style="mix-blend-mode: darken;" x="1308" y="467" width="40" height="40.2246941" rx="4"></rect>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <div ref="anime" class="lg:hidden absolute -bottom-2 right-1 w-5 h-5 bg-blue-500 rounded-full anime" style=""></div>
            <div ref="anime" class="lg:hidden absolute -bottom-7 -right-2 w-5 h-8 rounded-xl anime" style="background-color: #4F77FF"></div>
        </div>
          <svg ref="anime" class="lg:hidden relative top-4 left-16 anime" width="13px" height="13px" x="300px" y="150px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_mobile_SAMD" transform="translate(-302.000000, -871.000000)" fill="#4BBFE1">
                    <g id="Product-Development.---Column-1" transform="translate(29.000000, 871.000000)">
                        <circle id="Oval" style="mix-blend-mode: multiply;" cx="281.5" cy="8.5" r="8.5"></circle>
                    </g>
                </g>
            </g>
          </svg>
        </div>
    </div>
    <footer class="w-screen">
      <p class="text-gray-600 text-xs text-center p-5 bg-transparent">&copy; 2021 IDEA EVOLVER. All rights reserved.</p>
    </footer>
  </section>
</div>
</template>

<script>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default {
    head: {
        title: 'Search Experience Marketing: Content, SEO, & PPC Services',
        meta: [
          {
            name: 'Description',
            content: 'Learn more about our Content, SEO, and Paid Search (PPC) services that help you achieve the right outcome with the right audiences.'
          }
        ],
    },
  layout: "scroller",
    mounted() {
    const targetElement = document.querySelector('body');
    clearAllBodyScrollLocks(targetElement);
    // SCROLL BUTTON
    let scrollArrow = document.getElementById("scrollArrow");
    let rootElement = document.documentElement;
    let scrollDistance = document.documentElement.clientHeight;

    function scrollToContent () {
        rootElement.scrollTo({
            top: scrollDistance,
            behavior: "smooth"
        })
    }

    scrollArrow.addEventListener("click", scrollToContent);

    gsap.utils.toArray('.anime').forEach(box => {
        gsap.fromTo(box, {
            autoAlpha: 0, 
            opacity: .7,
            scale: .2,
            }, {
            scrollTrigger: {
            trigger: box,
            once: true,
            start: "center bottom",
            },
            duration: 1.3,
            delay: .2,
            autoAlpha: 1, 
            scale: 1,
            opacity: 1,
            yoyo: true,
            ease: "expo",
        });
    });
    gsap.fromTo('.first', {
        opacity: 1,
        y:  200,
        },
        {
        y: 0,
        yoyo: true,
        duration: 2,
        immediateRender:false
    })

    gsap.fromTo('.second', {
        opacity: 1,
        y:  200,
        },
        {
        y: 325,
        yoyo: true,
        duration: 2,
        immediateRender:false
    })

    gsap.fromTo('.third', {
        opacity: 1,
        x:  200,
        },
        {
        rotation: 0,
        x: 450,
        yoyo: true,
        duration: 2,
        immediateRender:false
    })

    gsap.timeline()
        .from('.icon2', { opacity: 0, scale: 0, duration: .2, ease: 'ease' })
        .from('.icon3', { opacity: 0, scale: 0, duration: .2, ease: 'ease' })
        .from('.icon4', { opacity: 0, scale: 0, duration: .2, ease: 'ease' })
        .from('.icon5', { opacity: 0, scale: 0, duration: .2, ease: 'ease' })
        .from('.icon6', { opacity: 0, scale: 0, duration: .2, ease: 'ease' })
        .from('.icon7', { opacity: 0, scale: 0, duration: .2, ease: 'ease' })
        .from('.icon8', { opacity: 0, scale: 0, duration: .2, ease: 'ease' })
        .from('.icon9', { opacity: 0, scale: 0, duration: .2, ease: 'ease' })
        .from('.icon10', { opacity: 0, scale: 0, duration: .2, ease: 'ease' })
        .from('.icon11', { opacity: 0, scale: 0, duration: .2, ease: 'ease' })

        gsap.fromTo('.mfirst', {
            autoAlpha: 0, 
            opacity: .7,
            scale: .2,
            }, {
            scrollTrigger: {
            trigger: 'mfirst',
            once: true,
            start: "center bottom",
            },
            duration: 1.3,
            delay: .2,
            autoAlpha: 1, 
            scale: 1,
            opacity: 1,
            yoyo: true,
            ease: "expo",
        });
        gsap.fromTo('.msecond', {
            autoAlpha: 0, 
            opacity: .7,
            scale: .2,
            }, {
            scrollTrigger: {
            trigger: 'msecond',
            once: true,
            start: "center bottom",
            },
            duration: 1.3,
            delay: .2,
            autoAlpha: 1, 
            scale: 1,
            opacity: 1,
            yoyo: true,
            ease: "expo",
        });
        gsap.fromTo('.mthird', {
            autoAlpha: 0, 
            opacity: .7,
            scale: .2,
            }, {
            scrollTrigger: {
            trigger: '.mthird',
            once: true,
            start: "center bottom",
            },
            duration: 1.3,
            delay: .2,
            autoAlpha: 1, 
            scale: 1,
            opacity: 1,
            yoyo: true,
            ease: "expo",
        });
    }
};
</script>

<style scoped>
.filter-light {
    filter: opacity(.3);
}
/* 
@media (min-width: 640px) {
    .screenHeightCalc {
        height: calc(100vh - 1rem);
    }
} */

@media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
  .screenHeightCalc {
    height: 50%;
  }
  .scrollArrow {
      width: 100%;
  }
}

@media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
  .content {
    height: calc(100vh - 10rem);
  }
}
</style>