<template>
<div class="fade-in">
  <div class="relative w-screen screenHeightCalc">
    <div class="relative justify-items-center z-1 xl:pt-6" style="mix-blend-mode: multiply;">
      <svg class="w-screen my-8 md:h-48 lg:h-56 lg:hidden" width="100%" height="105px" viewBox="0 0 104 105" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="mix-blend-mode: multiply;">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="IE_mobile_SAMD" transform="translate(-134.000000, -116.000000)">
                  <g id="Icon-2" transform="translate(134.000000, 116.000000)">
                      <ellipse id="Oval" fill="#4BBFE1" cx="21.3870968" cy="52.08" rx="21.3870968" ry="21"></ellipse>
                      <rect id="Rectangle" fill="#966CE0" style="mix-blend-mode: multiply;" x="21.8064516" y="0" width="82.1935484" height="105" rx="6"></rect>
                      <rect id="Rectangle" fill="#B594F0" x="50.3225806" y="84" width="26.8387097" height="4.2"></rect>
                  </g>
              </g>
          </g>
      </svg>
      <div class="flex">
        <div class="md:mx-20 lg:ml-20 lg:mt-20 xl:ml-40 xl:mt-0 relative xl:py-20 xl:bg-transparent lg:w-2/4 xl:w-2/5">
            <h1 class="mx-12 mb-4 text-3xl tracking-wide leading-normal text-ie-purple lg:mx-0 lg:text-4xl xl:text-5xl">
            Custom Software Development
            </h1>
            <p class="mx-12 mr-10 lg:text-lg leading-normal lg:mx-0 lg:leading-loose text-gray-600 pb-6">
            We minimize the guesswork associated with feature planning and requirements gathering by starting with user behavior research. Our Quality
            Management System is certified with ISO 13485 and IEC 62304. Building on a scalable infrastructure, we implement the right languages and
            frameworks, so your applications are reliable, fast and intuitive.
            </p>
            <button ref="scrollArrow" class="scrollArrow" id="scrollArrow">
                <svg class="w-screen md:w-full lg:w-10 filter-light" width="100%" height="13px" viewBox="0 0 23 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
        <svg class="hidden lg:block z-2 lg:h-100 lg:pr-16 xl:w-3/5 xl:m-auto lg:mr-16" width="924px" height="584px" viewBox="0 0 924 584" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Software Development Process</title>
            <defs>
                <polygon id="path-1" points="873.888947 295.169905 537.17257 442.805778 50.7849609 202.486681 375.647357 71.4092541"></polygon>
                <filter x="-4.1%" y="-7.1%" width="108.9%" height="119.7%" filterUnits="objectBoundingBox" id="filter-2">
                    <feOffset dx="3" dy="10" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="10.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.937075408   0 0 0 0 0.937075408   0 0 0 0 0.937075408  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                </filter>
                <polygon id="path-3" points="0.055321853 0.142553744 369.640594 0.142553744 369.640594 153.645554 0.055321853 153.645554"></polygon>
                <path d="M15.9572272,43.7380157 C36.9785153,53.7402799 71.0605273,53.740618 92.0814052,43.7383537 C113.101873,33.7367657 113.101463,17.5196828 92.0797643,7.51741862 C81.5680948,2.51561036 67.7944233,0.0152133404 54.01706,0.0152133404 C40.2429784,0.0158894889 26.4656151,2.51628651 15.9564068,7.51674247 C-5.06447113,17.5190067 -5.06406092,33.7357514 15.9572272,43.7380157 Z" id="path-5"></path>
            </defs>
            <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_desktop_SaMD" transform="translate(-909.000000, -241.000000)">
                    <g id="Secondary-section" transform="translate(-34.000000, 241.000000)">
                        <g id="Software-Development-Process" transform="translate(943.000000, 0.000000)">
                            <g id="Phone-graphic-" transform="translate(462.000000, 299.500000) rotate(-1.000000) translate(-462.000000, -299.500000) translate(5.000000, 54.000000)">
                                <g id="Fill-2">
                                    <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                                    <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                                </g>
                                <g id="Group-14" style="mix-blend-mode: multiply;" transform="translate(286.706977, 146.484105)" fill="#966CE0">
                                    <path ref="bar-2" class="bar-2" d="M423.730281,46.4941451 L99.8598056,173.811016 C94.8263845,175.789707 89.2061794,175.645534 84.2808287,173.411375 L10.6886312,140.02966 C8.17383243,138.888938 7.05992375,135.925552 8.2006465,133.410753 C8.73348096,132.236085 9.69965964,131.312779 10.8972873,130.833772 L330.522136,2.99567022 C334.166897,1.53790107 338.237883,1.56699236 341.861438,3.07670093 L423.82396,37.2253564 C426.372993,38.287379 427.578454,41.2147179 426.516431,43.7637509 C425.995707,45.0135762 424.990376,45.9987887 423.730281,46.4941451 Z" id="Fill-8"></path>
                                </g>
                                <g id="Group-26" transform="translate(420.184775, 164.397969)" fill="#4F77FF">
                                    <g id="Group-10" transform="translate(0.111677, 0.413622)">
                                        <path ref="bar-3" class="bar-3" d="M442.195065,99.2238054 L111.435108,234.224927 C106.314716,236.314837 100.557503,236.191203 95.5315502,233.883403 L38.6279092,207.75458 C36.1183982,206.602271 35.0181685,203.63378 36.1704773,201.124269 C36.6981426,199.975114 37.6416206,199.068568 38.8109196,198.587186 L367.250334,63.3739912 C370.936628,61.8564035 375.075395,61.8686163 378.752669,63.4079326 L442.236298,89.9823445 C444.78355,91.0486309 445.98411,93.9779829 444.917824,96.5252352 C444.40481,97.7507744 443.425134,98.7217477 442.195065,99.2238054 Z" id="Fill-16"></path>
                                    </g>
                                </g>
                                <g id="Group-39" transform="translate(38.718330, 0.459335)">
                                    <g id="Group-36" transform="translate(80.520587, 0.033605)">
                                        <mask id="mask-4" fill="white">
                                            <use xlink:href="#path-3"></use>
                                        </mask>
                                        <g id="Clip-35"></g>
                                    </g>
                                    <path ref="bar-1" class="bar-1" d="M404.066476,72.2745513 L83.2420053,195.23118 C78.2174718,197.156843 72.6289529,196.976636 67.7389183,194.731268 L10.8306026,168.600557 C8.32108726,167.448258 7.22084638,164.479771 8.3731458,161.970255 C8.91205815,160.796594 9.88419869,159.876981 11.0859553,159.404025 L321.721425,37.1522211 C329.060567,34.2638732 337.241927,34.3818632 344.494723,37.4806532 L404.241607,63.0077792 C406.780965,64.0927315 407.959994,67.0308156 406.875042,69.5701737 C406.343378,70.8145451 405.330047,71.7902851 404.066476,72.2745513 Z" id="Fill-28" fill="#966CE0" style="mix-blend-mode: multiply;"></path>
                                </g>
                                <g id="Group-48" style="mix-blend-mode: multiply;" transform="translate(593.080475, 191.544314)">
                                    <mask id="mask-6" fill="white">
                                        <use xlink:href="#path-5"></use>
                                    </mask>
                                    <g id="Clip-47"></g>
                                    <path ref="bar-4" class="bar-4" d="M15.9572272,43.7380157 C36.9785153,53.7402799 71.0605273,53.740618 92.0814052,43.7383537 C113.101873,33.7367657 113.101463,17.5196828 92.0797643,7.51741862 C81.5680948,2.51561036 67.7944233,0.0152133404 54.01706,0.0152133404 C40.2429784,0.0158894889 26.4656151,2.51628651 15.9564068,7.51674247 C-5.06447113,17.5190067 -5.06406092,33.7357514 15.9572272,43.7380157 Z" id="Fill-46" fill="#4BBFE1" style="mix-blend-mode: multiply;" mask="url(#mask-6)"></path>
                                </g>
                            </g>
                            <path d="M781.12777,170 L786.87223,170 C788.655267,170 789.30184,170.185651 789.953691,170.534265 C790.605543,170.88288 791.11712,171.394457 791.465735,172.046309 C791.814349,172.69816 792,173.344733 792,175.12777 L792,180.87223 C792,182.655267 791.814349,183.30184 791.465735,183.953691 C791.11712,184.605543 790.605543,185.11712 789.953691,185.465735 C789.30184,185.814349 788.655267,186 786.87223,186 L781.12777,186 C779.344733,186 778.69816,185.814349 778.046309,185.465735 C777.394457,185.11712 776.88288,184.605543 776.534265,183.953691 C776.185651,183.30184 776,182.655267 776,180.87223 L776,175.12777 C776,173.344733 776.185651,172.69816 776.534265,172.046309 C776.88288,171.394457 777.394457,170.88288 778.046309,170.534265 C778.69816,170.185651 779.344733,170 781.12777,170 Z" id="Rectangle" fill="#966CE0" style="mix-blend-mode: darken;"></path>
                            <g id="Icon-2" transform="translate(565.000000, 0.000000)">
                                <rect ref="sd1" class="sd1" id="Rectangle" fill="#966CE0" x="10.0351662" y="0" width="35.8398793" height="45.8584599" rx="6"></rect>
                                <ellipse ref="sd2" class="sd2" id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="9.6767674" cy="22.5764726" rx="9.6767674" ry="9.17169199"></ellipse>
                                <rect ref="sd3" class="sd3" id="Rectangle" fill="#B594F0" x="22.2207251" y="36.6867679" width="12.185559" height="2.1165443"></rect>
                            </g>
                            <path d="M80.1277704,46 L103.87223,46 C105.655267,46 106.30184,46.1856512 106.953691,46.5342654 C107.605543,46.8828796 108.11712,47.3944567 108.465735,48.0463086 C108.814349,48.6981604 109,49.3447329 109,51.1277704 L109,74.8722296 C109,76.6552671 108.814349,77.3018396 108.465735,77.9536914 C108.11712,78.6055433 107.605543,79.1171204 106.953691,79.4657346 C106.30184,79.8143488 105.655267,80 103.87223,80 L80.1277704,80 C78.3447329,80 77.6981604,79.8143488 77.0463086,79.4657346 C76.3944567,79.1171204 75.8828796,78.6055433 75.5342654,77.9536914 C75.1856512,77.3018396 75,76.6552671 75,74.8722296 L75,51.1277704 C75,49.3447329 75.1856512,48.6981604 75.5342654,48.0463086 C75.8828796,47.3944567 76.3944567,46.8828796 77.0463086,46.5342654 C77.6981604,46.1856512 78.3447329,46 80.1277704,46 Z" id="Rectangle" fill="#966CE0" style="mix-blend-mode: darken;"></path>
                            <ellipse ref="sd4" class="sd4" id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="793.5" cy="173" rx="8.5" ry="8"></ellipse>
                            <circle ref="sd5" class="sd5" id="Oval" fill="#4BBFE1" cx="745.5" cy="551.866501" r="10.5"></circle>
                            <rect ref="sd6" class="sd6" id="Rectangle" fill="#966CE0" style="mix-blend-mode: multiply;" x="739" y="552.366501" width="28" height="31" rx="4"></rect>
                            <g id="Icon-2" transform="translate(199.000000, 488.000000)">
                                <rect ref="sd7" class="sd7" id="Rectangle" fill="#966CE0" x="0.035166195" y="0" width="35.8398793" height="45.8584599" rx="6"></rect>
                                <rect ref="sd8" class="sd8" id="Rectangle" fill="#B594F0" x="12.2207251" y="36.6867679" width="12.185559" height="2.1165443"></rect>
                            </g>
                            <circle ref="sd9" class="sd9" id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="227" cy="492.43631" r="14"></circle>
                            <circle ref="sd10" class="sd10" id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="64" cy="95" r="8"></circle>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      </div>
    </div>
  </div>
  <section class="relative z-1" style="background: #efefef url('/images/background-pattern.svg') center -5px/100% repeat">
  <div class="relative">
    <div class="relative z-1 py-8 mt-12 lg:mt-0 lg:mb-20">
      <svg class="w-screen lg:h-72 lg:w-100 lg:m-auto md:w-screen lg:hidden" width="100%" height="300px" viewBox="0 0 353 194" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="IE_mobile_SAMD" transform="translate(-6.000000, -707.000000)">
                  <g id="Software-Development-Process" transform="translate(6.000000, 707.000000)">
                      <circle ref="anime" class="anime" id="Oval" fill="#4BBFE1" cx="279.5" cy="35.5" r="9.5"></circle>
                      <rect ref="anime" class="anime" id="Rectangle" fill="#966CE0" style="mix-blend-mode: multiply;" x="280" y="13" width="22" height="23" rx="3"></rect>
                      <g id="Phone-graphic-" transform="translate(176.448480, 96.596445) rotate(-1.000000) translate(-176.448480, -96.596445) translate(1.948480, 3.096445)">
                          <polygon id="Fill-2" fill="#FFFFFF" points="333.983005 111.897806 205.531504 167.94749 19.9830045 76.7107921 143.912416 26.9474905"></polygon>
                          <g ref="mobile-bar-1" class="mobile-bar-1" id="Group-14" style="mix-blend-mode: multiply;" transform="translate(110.120187, 56.227947)" fill="#966CE0">
                              <path d="M161.098993,17.7050733 L38.9448682,65.4632212 C36.4389661,66.4429445 33.6439857,66.3715191 31.1913952,65.2650822 L4.30259027,53.1347385 C3.29573576,52.6805163 2.84773874,51.4960796 3.30196091,50.4892251 C3.51524884,50.016439 3.90386581,49.6450025 4.3858065,49.4532954 L125.380716,1.32376593 C127.074282,0.650096824 128.963822,0.663546741 130.647626,1.36125628 L161.136346,13.994714 C162.156781,14.4175464 162.641233,15.5875453 162.218401,16.6079798 C162.010072,17.1107477 161.605854,17.5069081 161.098993,17.7050733 Z" id="Fill-8"></path>
                          </g>
                          <g id="Group-26" transform="translate(160.797591, 62.193814)" fill="#4F77FF">
                              <g ref="mobile-bar-2" class="mobile-bar-2" id="Group-10" transform="translate(0.042688, 0.158688)">
                                  <path d="M168.845503,38.1414185 L43.5529673,89.4691053 C40.9854589,90.5209179 38.0963646,90.4587191 35.5765029,89.2973813 L14.9325636,79.7831347 C13.9294058,79.3208057 13.4909773,78.1327939 13.9533063,77.129636 C14.1642354,76.6719638 14.5401634,76.3107877 15.0059085,76.1183394 L139.883878,24.5181043 C141.609093,23.8052367 143.547576,23.8109717 145.268542,24.5340349 L168.862031,34.44683 C169.88037,34.8746846 170.359052,36.0470562 169.931197,37.0653951 C169.726047,37.5536741 169.335598,37.9406449 168.845503,38.1414185 Z" id="Fill-16"></path>
                              </g>
                          </g>
                          <g ref="mobile-bar-3" class="mobile-bar-3" id="Group-39" transform="translate(14.998245, 0.612413)">
                              <g id="Group-36" transform="translate(30.645802, 0.012838)">
                                  <mask id="mask-2" fill="white">
                                      <use xlink:href="#path-1"></use>
                                  </mask>
                                  <g id="Clip-35"></g>
                              </g>
                              <path d="M153.58177,27.6889373 L32.6324669,74.2165156 C30.1127637,75.1858117 27.3081958,75.0951394 24.8563642,73.9651126 L4.31040608,64.495668 C3.3072548,64.0333247 2.86884329,62.8453067 3.33118656,61.8421554 C3.54663752,61.3746891 3.93402397,61.0082867 4.4127525,60.8191759 L120.676609,14.8918061 C124.602388,13.3410172 128.98193,13.4043461 132.861227,15.0679977 L153.651973,23.9841885 C154.667129,24.4195419 155.137152,25.5954119 154.701798,26.6105677 C154.489172,27.1063687 154.085271,27.4952474 153.58177,27.6889373 Z" id="Fill-28" fill="#966CE0" style="mix-blend-mode: multiply;"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
          <g ref="mobile-bar-4" class="mobile-bar-4" id="Group-48" style="mix-blend-mode: multiply;" transform="translate(227.251506, 73.180322)">
            <g  ref="mobile-bar-4" class="mobile-bar-4" id="Clip-47"></g>
            <path d="M6.06425856,16.17175 C14.0530228,19.87 27.0052814,19.870125 34.9938897,16.171875 C42.9823422,12.473875 42.9821863,6.47775 34.9932662,2.7795 C30.9984943,0.930125 25.764057,0.005625 20.5282167,0.005625 C15.2936236,0.005875 10.0577833,0.930375 6.06394677,2.77925 C-1.9246616,6.4775 -1.9245057,12.4735 6.06425856,16.17175 Z" id="Fill-46" fill="#4BBFE1" style="mix-blend-mode: multiply;" mask="url(#mask-4)"></path>
          </g>
        <svg class="lg:hidden" width="17px" height="17px" x="300px" y="150px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_mobile_SAMD" transform="translate(-302.000000, -871.000000)" fill="#4BBFE1">
                    <g id="Product-Development.---Column-1" transform="translate(29.000000, 871.000000)">
                        <circle id="Oval" style="mix-blend-mode: multiply;" cx="281.5" cy="8.5" r="8.5"></circle>
                    </g>
                </g>
            </g>
        </svg>
      </svg>

      <svg class="lg:hidden" width="100%" height="26px" viewBox="0 0 25 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="IE_mobile_SAMD" transform="translate(-71.000000, -922.000000)" fill="#966CE0">
                  <g id="Product-Development.---Column-1" transform="translate(29.000000, 871.000000)">
                      <rect id="Rectangle" style="mix-blend-mode: multiply;" x="-50" y="70" width="25" height="26" rx="4"></rect>
                  </g>
              </g>
          </g>
      </svg>
      <div class="relative md:flex xl:mx-40 xl:pt-24">
        <div class="relative p-8 mx-8 lg:ml-8 lg:mx-4 xl:mx-0 text-gray-600 bg-white lg:mt-0 xl:mt-0 xl:p-14 xl:flex-1 xl:h-1/6 lg:h-1/6 xl:mr-4">

        <svg class="hidden lg:block absolute top-4 -left-4 z-behind anime" width="57px" height="56px" viewBox="0 0 57 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_desktop_SaMD" transform="translate(-229.000000, -1079.000000)" fill="#4BBFE1">
                    <g id="Secondary-section" transform="translate(-34.000000, 241.000000)">
                        <g id="geometric-shapes-" transform="translate(263.000000, 838.000000)">
                            <ellipse id="Oval" style="mix-blend-mode: multiply;" cx="28.5" cy="28" rx="28.5" ry="28"></ellipse>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
          <h4 class="text-xl md:text-2xl lg:text-3xl pb-2">
            Product Development
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
            Our objective for developing digital software products is to cultivate, maintain and increase a company's market share by satisfying
            consumer demand. A product/market fit can be established through our research process before any development begins. Services
            include the conceptualization, design, and development of newly created or newly rebranded digital products and med tech device software.
          </p>

        <svg class="hidden lg:block absolute z-behind -bottom-4 -left-2 anime" width="54px" height="45px" viewBox="0 0 54 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_desktop_SaMD" transform="translate(-240.000000, -1546.000000)">
                    <g id="Secondary-section" transform="translate(-34.000000, 241.000000)">
                        <g id="geometric-shapes-" transform="translate(263.000000, 838.000000)">
                            <circle id="Oval" fill="#4BBFE1" cx="54.5" cy="501.5" r="10.5"></circle>
                            <rect id="Rectangle" fill="#966CE0" style="mix-blend-mode: multiply;" x="11" y="467" width="46" height="39" rx="4"></rect>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
          <div class="absolute lg:hidden -bottom-2.5 right-10 w-5 h-6 rounded-md" style="background-color: #966CE0"></div>
        </div>
        <div class="relative mx-8 lg:mx-8 lg:mt-16 text-gray-600 bg-white lg:mt-0 p-8 mt-16 xl:mt-16 xl:p-14 xl:flex-1 xl:h-1/6 lg:h-1/6">
          <div ref="anime" class="absolute lg:hidden -top-6 left-20 w-10 h-6 rounded-sm anime" style="background-color: #966CE0"></div>
          <div ref="anime" class="absolute lg:hidden -top-3 w-6 h-3 bg-blue-500 rounded-full anime" style="mix-blend-mode: multiply; left: 6.7rem; border-bottom-left-radius: 4rem; border-bottom-right-radius: 4rem;"></div>
          <div ref="anime" class="absolute lg:hidden -top-1.5 left-56 w-3 h-1.5 bg-blue-500 rounded-full anime" style="mix-blend-mode: multiply; border-bottom-left-radius: 4rem; border-bottom-right-radius: 4rem;"></div>

        <svg class="hidden lg:block absolute -top-14 right-6 z-behind anime" width="68px" height="64px" viewBox="0 0 68 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_desktop_SaMD" transform="translate(-1557.000000, -1089.000000)">
                    <g id="Secondary-section" transform="translate(-34.000000, 241.000000)">
                        <g id="geometric-shapes-" transform="translate(263.000000, 838.000000)">
                            <rect id="Rectangle" fill="#966CE0" style="mix-blend-mode: multiply;" x="1352" y="10" width="44" height="46" rx="4"></rect>
                            <circle id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="1347.5" cy="54.5" r="19.5"></circle>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
          <h4 class="text-xl md:text-2xl lg:text-3xl pb-2">
            Medical Device Software
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
            Medical device software (SaMD) has a long history of living within proprietary hardware devices, but in recent years,
            has taken home inside our everyday devices like phones and watches. The software living in common devices is reaching
            more people and solving old problems on larger scales.
          </p>
          <p class="pt-4 lg:text-lg">
            Clients appreciate our harmonious blend of regulatory rigor, scalable development practices, and engaging design patterns.
            Our ISO 13485 certified Quality Management System (QMS) guides our regulated technology practices to ensure safe and successful
            product launches under any safety classification. We build medical device software on modern technology stacks designed for security,
            scalability, fast responses, and best in class user design. The validated tools and infrastructure we offer beneath your custom
            software layer facilitates a fast and cost-efficient program.
          </p>
        <div class="flex pt-4 iso-cert items-center">
          <img class="w-20 h-28" src="images/certificate.png" alt="ISO certificate">
          <a class="pl-4" href="images/ISO.pdf" download>Idea Evolver ISO 13485 Certificate</a>
        </div>

        <svg class="hidden lg:block absolute z-behind bottom-8 -left-4 anime" width="48px" height="39px" viewBox="0 0 48 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_desktop_SaMD" transform="translate(-974.000000, -1707.000000)" fill="#966CE0">
                    <g id="Secondary-section" transform="translate(-34.000000, 241.000000)">
                        <g id="geometric-shapes-" transform="translate(263.000000, 838.000000)">
                            <rect id="Rectangle" style="mix-blend-mode: multiply;" x="745" y="628" width="48" height="39" rx="4"></rect>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

        <svg class="hidden lg:block absolute z-behind -bottom-6 right-4 anime" width="21px" height="21px" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="New-2021" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="IE_desktop_SaMD" transform="translate(-1598.000000, -1843.000000)" fill="#4BBFE1">
                    <g id="Secondary-section" transform="translate(-34.000000, 241.000000)">
                        <g id="geometric-shapes-" transform="translate(263.000000, 838.000000)">
                            <circle id="Oval" style="mix-blend-mode: multiply;" cx="1379.5" cy="774.5" r="10.5"></circle>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        </div>
        <div class="absolute lg:hidden -bottom-3 right-24 h-5 w-5 rounded-full bg-blue-500" style="mix-blend-mode: multiply"></div>
      </div>
      <div ref="anime" class="absolute lg:hidden bottom-0 left-24 w-7 h-10 rounded-xl anime" style="background-color: #966CE0"></div>
      <div ref="anime" class="absolute lg:hidden bottom-2 w-6 h-6 bg-blue-500 rounded-full anime" style="mix-blend-mode: multiply; left: 5.3rem;"></div>
    </div>
  </div>
    <footer class="w-screen">
      <p class="text-gray-600 text-xs text-center p-5 bg-transparent">&copy; 2021 IDEA EVOLVER. All rights reserved.</p>
    </footer>
  </section>
</div>
</template>

<script>
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default {
  layout: "scroller",
  mounted() {

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
    gsap.fromTo(".bar-1", {
        autoAlpha: 0, 
        y: 200,
        delay: 1,
        }, {
        duration: 4, 
        autoAlpha: 1, 
        ease: "expo",
        y: 0,
    });
    gsap.fromTo(".bar-2", {
        autoAlpha: 0, 
        y: -200,
        delay: 1.5,
        }, {
        duration: 4, 
        autoAlpha: 1, 
        ease: "expo",
        y: 0,
    });
    gsap.fromTo(".bar-3", {
        autoAlpha: 0, 
        y: 100,
        delay: 2.5,
        }, {
        duration: 4, 
        autoAlpha: 1, 
        ease: "expo",
        y: 0,
    });
    gsap.fromTo(".bar-4", {
        autoAlpha: 0, 
        y: -100,
        delay: 2,
        }, {
        duration: 4, 
        autoAlpha: 1, 
        ease: "bounce",
        y: 0,
    });
    gsap.timeline()
        .from('.sd1', { opacity: 0, scale: 0, x: 0, duration: .4, ease:'ease' })
        .from('.sd2', { opacity: 0, scale: 0, x: 0, duration: .4, ease:'back' })
        .from('.sd3', { opacity: 0, scale: 0, x: 0, duration: .4, ease: 'back' })
        .from('.sd4', { opacity: 0, scale: 0, x: 0, duration: .4, ease:'back' })
        .from('.sd5', { opacity: 0, scale: 0, x: 0, duration: .4, ease: 'back' })
        .from('.sd6', { opacity: 0, scale: 0, x: 0, duration: .4, ease: 'back' })
        .from('.sd7', { opacity: 0, scale: 0, x: 0, duration: .4, ease:'back' })
        .from('.sd8', { opacity: 0, scale: 0, x: 0, duration: .4, ease:'back' })
        .from('.sd9', { opacity: 0, scale: 0, x: 0, duration: .4, ease:'back' })
        .from('.sd10', { opacity: 0, scale: 0, x: 0, duration: .4, ease:'back' })
    gsap.fromTo(".mobile-bar-1", {
        autoAlpha: 0, 
        y: 200,
        delay: .5,
        }, {
        scrollTrigger: {
        trigger: ".mobile-bar-1",
        once: true
        },
        duration: 3, 
        autoAlpha: 1, 
        ease: "expo",
        y: 60,
    });
    gsap.fromTo(".mobile-bar-2", {
        autoAlpha: 0, 
        y: -200,
        delay: .5,
        }, {
        scrollTrigger: {
        trigger: ".bar-2",
        once: true
        },
        duration: 3, 
        autoAlpha: 1, 
        ease: "expo",
        y: 0,
    });
    gsap.fromTo(".mobile-bar-3", {
        autoAlpha: 0, 
        y: 100,
        delay: .5,
        }, {
        scrollTrigger: {
        trigger: ".bar-3",
        once: true
        },
        duration: 3, 
        autoAlpha: 1, 
        ease: "expo",
        y: 0,
    });
    gsap.fromTo(".mobile-bar-4", {
        autoAlpha: 0, 
        y: -100,
        delay: .5,
        }, {
        scrollTrigger: {
        trigger: ".bar-4",
        once: true
        },
        duration: 3, 
        autoAlpha: 1, 
        ease: "bounce",
        y: 80,
    });
  }
};
</script>

<style scoped>
.filter-light {
    filter: opacity(.3);
}

@media (min-width: 640px) {
    .screenHeightCalc {
        height: calc(100vh - 9rem);
    }
}

.iso-cert a{
    color: #A3238E;
}
</style>