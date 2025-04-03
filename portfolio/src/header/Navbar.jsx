import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-500 border-b border-gray-200 fixed w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section - Enhanced Responsiveness */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3"
          >

            <svg width="200" height="100" viewBox="0 0 1975 750" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1975" height="750" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M345.977 402.896C347.848 405.931 347.932 407.886 345.312 410.588C339.116 416.909 333.212 423.437 325.852 428.427C321.943 431.13 317.785 433.625 313.003 433.666C307.514 433.708 309.219 437.45 308.886 440.278C308.512 443.521 309.593 444.935 313.169 445.101C319.115 445.351 321.943 448.428 321.943 454.291C321.984 462.192 321.735 470.051 321.61 477.951C321.569 478.409 321.153 478.866 320.529 479.989C318.325 475.248 319.406 469.593 314.874 466.641C314.5 464.687 313.377 463.481 311.381 463.148C309.427 460.362 306.558 459.738 303.397 459.78C299.322 458.117 295.497 458.2 292.17 461.61C295.913 460.362 299.738 459.946 303.647 459.905C306.197 461.014 308.761 462.122 311.339 463.231C311.949 464.895 313.086 466.031 314.749 466.641C317.327 472.795 319.864 478.908 316.745 485.769C312.836 494.418 303.855 498.742 294.54 496.123C285.392 493.545 280.153 485.02 281.816 475.415C282.232 472.878 282.357 470.217 283.812 467.93C281.65 471.215 280.527 474.916 278.698 478.658C278.698 469.177 278.698 459.655 278.739 450.175C278.739 449.842 278.947 449.384 279.197 449.177C281.359 447.472 282.897 444.603 286.182 444.977C290.465 445.434 291.63 443.605 291.505 439.488C291.38 435.787 291.089 433.708 286.473 433.625C280.694 433.459 275.912 430.007 271.379 426.639C265.35 422.148 260.152 416.701 254.746 411.503C251.586 408.509 251.337 406.222 253.665 402.438C263.894 385.847 273.666 368.965 283.812 352.332C285.683 349.297 285.559 347.134 283.646 344.265C274.165 329.878 265.017 315.241 255.37 300.895C252.584 296.779 253.291 294.99 257.574 293.161C261.524 291.498 265.433 289.502 268.967 287.048C279.197 279.771 290.382 277.692 302.857 278.191C311.173 278.524 318.616 279.688 325.644 284.262C331.008 287.714 336.663 290.666 342.401 293.452C346.31 295.365 347.058 297.028 344.439 300.937C335.083 314.742 326.226 328.921 316.911 342.768C314.292 346.635 313.834 349.421 316.454 353.663C326.559 369.921 336.081 386.512 345.977 402.896ZM316.246 478.908C316.371 469.385 309.219 462.067 299.78 461.984C290.59 461.901 283.355 469.011 283.188 478.242C283.022 487.307 290.299 494.792 299.405 494.917C308.678 495.042 316.163 487.931 316.246 478.908ZM304.437 297.111C304.395 292.828 301.526 293.743 299.031 293.494C295.247 293.119 294.831 295.282 294.79 298.317C294.249 330.834 295.122 363.268 299.655 395.619C299.863 395.245 299.988 395.078 299.988 394.912C304.437 362.436 304.894 329.795 304.437 297.111Z" fill="#16A34A" />
              <path d="M454.838 312C444.359 311.584 434.587 308.383 425.564 302.935C423.901 301.896 421.946 299.027 420.45 300.357C418.329 302.228 417.331 305.472 417.622 308.591C417.747 310.046 418.37 311.501 418.994 312.832C420.782 316.948 420.075 318.653 415.169 317.78C405.189 316.034 395.126 314.703 385.146 312.998C374.668 311.252 363.524 311.127 355.249 303.019C352.172 300.025 350.841 301.147 349.136 304.266C341.984 317.447 334.791 330.629 327.389 343.686C325.601 346.846 325.643 349.341 327.098 352.543C333.959 367.554 340.446 382.731 347.307 397.742C348.429 400.237 347.806 406.267 353.918 402.524C354.417 402.233 355.873 403.397 356.871 403.938C366.476 409.427 376.04 414.999 385.729 420.404C388.473 421.943 389.679 423.814 389.804 427.058C390.136 438.285 390.677 449.553 391.342 460.822C391.55 464.149 390.76 466.976 389.18 469.887C381.196 484.566 373.296 499.286 365.478 514.047C364.605 515.752 362.068 518.081 363.815 519.37C365.894 520.95 369.221 520.617 371.799 519.203C372.838 518.663 373.462 517.249 374.21 516.168C383.774 502.238 393.297 488.266 402.944 474.42C404.149 472.631 404.815 470.885 404.898 468.723C405.48 453.171 406.104 437.578 406.894 422.026C407.06 418.658 406.104 416.537 403.401 414.417C392.506 405.851 381.778 397.035 370.967 388.262C369.262 386.848 367.391 385.559 366.351 383.438C361.736 374.207 356.995 365.017 352.338 355.828C351.59 354.331 350.758 352.834 352.255 351.17C356.995 345.848 360.655 338.945 369.512 339.652C371.549 339.819 373.628 339.32 375.666 339.112C389.138 337.864 389.097 337.906 394.793 350.006C409.264 380.735 423.818 411.423 438.247 442.152C439.494 444.813 441.033 447.225 444.068 445.77C446.813 444.439 444.234 442.152 443.694 440.53C432.384 407.722 420.949 374.955 409.68 342.147C407.06 334.496 406.478 335.286 414.67 334.122C417.165 333.789 419.618 332.708 421.78 335.536C423.942 338.322 422.695 340.692 421.448 342.812C418.495 347.719 419.327 351.004 424.857 352.917C425.564 353.166 426.229 353.582 426.812 354.04C429.39 355.994 430.97 355.869 432.883 352.709C439.411 341.898 447.311 332.084 456.875 323.81C459.038 321.938 459.578 319.901 459.329 317.24C460.077 313.705 459.121 312.167 454.838 312Z" fill="black" />
              <path d="M273.25 345.762C265.308 331.5 257.407 317.237 249.631 302.891C248.259 300.313 247.261 300.189 245.14 302.101C241.232 305.636 236.907 308.962 231.626 309.877C215.368 312.788 199.067 315.241 182.767 317.903C179.441 318.485 178.734 317.196 179.773 314.243C180.979 310.709 182.227 307.341 180.605 303.39C179.233 299.981 178.36 299.565 175.283 301.852C166.633 308.256 156.695 311.457 146.009 312.331C144.138 312.497 141.144 311.083 140.728 313.828C140.27 316.78 139.106 320.481 141.892 322.892C152.246 331.833 160.396 342.561 167.631 354.037C168.338 355.16 168.962 355.909 170.75 355.368C178.9 352.956 180.938 349.463 177.653 341.771C176.322 338.61 176.572 335.866 179.191 334.411C182.85 332.332 187.009 334.161 190.543 335.409C193.038 336.24 190.917 339.068 190.335 340.814C183.682 360.524 176.96 380.22 170.168 399.902C165.344 413.915 160.313 427.845 155.406 441.859C154.949 443.148 153.618 444.936 155.448 445.809C157.111 446.599 159.19 446.391 160.23 444.187C160.618 443.355 161.02 442.51 161.436 441.651C176.156 410.63 190.876 379.61 205.513 348.59C210.669 337.654 210.627 337.903 222.769 338.901C231.876 339.692 240.525 340.357 245.93 349.505C247.635 352.332 248.176 354.079 246.637 356.948C242.812 364.059 239.153 371.252 235.743 378.571C233.622 383.103 230.795 386.804 226.844 389.881C216.49 397.948 206.344 406.348 196.074 414.498C193.911 416.202 192.414 417.783 192.581 420.984C193.412 436.37 193.953 451.755 194.452 467.14C194.577 470.509 195.658 473.211 197.57 475.914C206.635 488.846 215.825 501.653 224.391 514.877C227.676 519.908 231.21 521.239 236.741 519.201C236.2 517.995 235.784 516.789 235.202 515.667C226.886 500.323 218.569 484.979 210.295 469.635C209.255 467.681 208.008 465.81 208.132 463.356C208.714 450.965 209.172 438.574 209.588 426.224C209.629 423.646 210.502 422.149 212.789 420.86C222.769 415.288 232.666 409.508 242.604 403.811C243.81 403.104 245.265 401.482 246.596 402.771C249.174 405.35 249.756 403.561 250.671 401.482C258.155 384.489 265.682 367.51 273.25 350.544C273.998 348.881 274.206 347.467 273.25 345.762Z" fill="black" />
              <path d="M542.036 304.389C527.482 298.318 512.846 292.496 498.25 286.633C494.258 285.011 489.976 283.889 486.774 280.853C483.988 278.15 480.994 277.735 477.543 278.899C472.012 280.687 466.648 278.109 463.654 274.865C458.623 269.335 452.011 267.88 445.94 266.757C439.453 265.509 433.757 264.553 430.139 258.524C429.141 256.819 427.769 255.738 425.607 255.738C422.363 255.696 419.452 254.407 416.459 253.201C398.578 245.924 380.698 238.648 362.735 231.537C361.321 230.996 359.366 228.626 357.911 231.121C356.747 233.242 358.368 235.03 359.99 236.402C361.293 237.511 362.624 238.564 363.982 239.562C379.159 250.914 394.378 262.183 409.431 273.66C412.092 275.656 414.629 276.279 417.789 275.822C424.983 274.741 432.26 273.867 439.453 272.911C442.031 272.537 444.111 275.157 443.196 275.905C440.036 278.566 442.738 278.774 444.235 279.356C447.895 280.77 451.637 282.059 455.379 283.307C456.211 283.598 457.874 283.806 457.957 283.598C460.036 277.942 460.951 282.225 462.24 284.013C464.112 286.633 466.357 288.962 467.895 291.706C472.553 299.815 479.081 303.474 488.728 304.139C506.068 305.387 523.366 308.131 540.664 310.21C542.951 309.794 546.278 311.042 546.86 307.798C547.4 304.68 543.783 305.137 542.036 304.389Z" fill="#16A34A" />
              <path d="M143.015 283.766C143.14 283.807 143.348 283.641 143.556 283.558C147.589 282.102 151.664 280.647 155.698 279.109C156.363 278.859 157.527 278.901 157.319 277.445C156.696 273.121 156.945 273.038 161.062 273.537C168.297 274.41 175.615 275.158 183.142 275.99C185.761 276.78 187.841 275.325 190.044 273.703C205.679 262.018 221.356 250.375 236.99 238.732C238.363 237.734 239.693 236.612 240.816 235.406C241.98 234.158 243.061 232.578 241.772 230.873C240.4 229.085 239.028 230.832 237.781 231.331C227.343 235.447 216.948 239.814 206.469 243.889C196.323 247.839 186.593 252.912 175.99 255.407C172.58 256.197 170.168 257.153 168.422 260.189C165.511 265.345 160.022 266.343 154.991 267.008C147.755 268.048 141.477 270.127 135.78 274.992C132.37 277.82 127.713 280.398 122.889 279.15C118.607 278.069 115.238 278.485 112.078 281.562C110.124 283.392 107.587 284.223 105.134 285.221C88.5843 291.791 72.0347 298.403 55.485 305.056C54.2376 305.555 52.1169 305.555 52.408 307.675C52.6991 309.713 54.4871 310.253 56.2751 310.212C59.269 310.129 62.2629 309.962 65.2568 309.63C79.2284 307.883 93.1167 305.139 107.13 304.598C119.022 304.141 127.131 299.65 133.368 289.795C135.239 286.843 136.113 279.691 143.015 283.766Z" fill="#16A34A" />
              <path d="M458.788 292.664C455.17 291.624 450.804 292.414 448.101 288.755C450.804 289.42 453.507 290.21 456.251 290.668C457.457 290.834 459.536 292.248 459.91 289.836C460.202 287.965 458.122 288.339 457 288.173C450.471 287.009 444.192 285.304 438.62 281.645C437.664 281.021 436.5 280.231 435.627 281.27C434.504 282.559 435.751 283.641 436.5 284.638C432.425 282.767 430.429 283.807 429.223 288.464C426.853 297.487 426.52 297.487 435.169 301.354C438.704 302.976 442.446 304.265 446.23 305.305C457.041 308.257 457.707 307.675 461.324 297.196C462.405 294.119 461.532 293.412 458.788 292.664Z" fill="black" />
              <path d="M152.704 305.553C155.739 304.722 158.775 303.682 161.727 302.476C172.372 298.069 172.913 296.572 168.921 286.01C167.923 283.432 166.842 282.891 164.43 284.222C160.854 286.176 157.361 288.505 153.12 289.004L153.161 288.962C153.161 288.962 153.244 288.879 153.286 288.838H153.328C153.3 288.838 153.286 288.838 153.286 288.838C153.258 288.838 153.244 288.851 153.244 288.879C149.419 291.956 144.595 291.998 140.188 292.996C137.61 293.578 137.36 294.534 137.942 296.821C140.645 307.05 142.641 308.339 152.704 305.553Z" fill="black" />
              <path d="M275.954 464.686C275.746 451.504 277.409 453.084 268.635 452.96C261.982 452.876 261.441 453.5 261.441 460.444C261.441 462.856 261.483 465.309 261.483 467.763C261.441 476.578 261.441 476.287 270.09 476.453C274.789 476.537 276.536 474.915 275.995 470.299C275.787 468.47 275.954 466.557 275.954 464.686Z" fill="black" />
              <path d="M331.131 452.796C326.225 452.879 323.73 453.96 324.52 459.283C324.769 460.946 324.561 462.651 324.561 464.314C324.506 464.314 324.45 464.314 324.395 464.314C324.395 466.019 324.603 467.724 324.353 469.387C323.688 474.211 324.977 476.622 330.507 476.331C337.119 475.999 338.325 475.25 338.408 469.138C338.408 466.144 338.117 463.108 338.45 460.156C339.115 454.418 336.786 452.713 331.131 452.796Z" fill="black" />
              <path d="M163.806 281.808C162.767 280.644 161.935 280.852 161.104 281.434C155.241 285.384 148.671 287.422 141.768 288.462C140.77 288.586 139.107 288.254 139.315 289.917C139.564 291.996 141.311 290.915 142.433 290.915C146.217 290.998 149.461 288.42 153.286 288.836C156.197 285.634 161.519 285.883 163.806 281.808Z" fill="black" />
              <path d="M460.577 269.001C461.492 268.294 460.826 267.338 460.452 266.548C458.747 262.639 454.88 261.932 449.059 264.843C452.136 267.338 455.421 268.045 458.498 269.168C459.08 269.376 460.078 269.334 460.577 269.001Z" fill="black" />
              <path d="M138.357 269.335C142.807 269.21 146.341 267.381 150.125 265.01C143.514 261.476 140.478 262.64 138.357 269.335Z" fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M311.963 478.366C311.797 484.894 306.1 490.466 299.655 490.466C292.919 490.466 287.721 485.227 287.638 478.283C287.555 471.38 292.711 466.016 299.447 466.016C306.474 465.974 312.13 471.588 311.963 478.366ZM298.2 473.293C298.241 471.796 297.534 470.798 295.954 470.715C294.54 470.839 293.418 471.338 293.251 472.918C293.043 474.748 293.958 475.704 295.746 475.704C297.243 475.663 298.158 474.79 298.2 473.293Z" fill="black" />
              <path d="M617.543 295.638H648.299L724.257 418.196H724.723V295.638H752.45V462H721.694L645.969 339.675H645.27V462H617.543V295.638ZM838.352 465.262C828.722 465.262 820.101 463.709 812.489 460.602C805.033 457.34 798.665 452.913 793.383 447.321C788.257 441.729 784.296 435.05 781.5 427.283C778.86 419.516 777.539 410.973 777.539 401.653C777.539 392.488 778.86 384.023 781.5 376.256C784.296 368.489 788.257 361.81 793.383 356.218C798.665 350.626 805.033 346.277 812.489 343.17C820.101 339.908 828.722 338.277 838.352 338.277C847.983 338.277 856.526 339.908 863.982 343.17C871.594 346.277 877.962 350.626 883.088 356.218C888.37 361.81 892.331 368.489 894.971 376.256C897.767 384.023 899.165 392.488 899.165 401.653C899.165 410.973 897.767 419.516 894.971 427.283C892.331 435.05 888.37 441.729 883.088 447.321C877.962 452.913 871.594 457.34 863.982 460.602C856.526 463.709 847.983 465.262 838.352 465.262ZM838.352 444.292C844.255 444.292 849.381 443.049 853.73 440.564C858.08 438.079 861.652 434.817 864.448 430.778C867.244 426.739 869.264 422.235 870.506 417.264C871.904 412.138 872.603 406.934 872.603 401.653C872.603 396.527 871.904 391.401 870.506 386.275C869.264 381.149 867.244 376.644 864.448 372.761C861.652 368.722 858.08 365.46 853.73 362.975C849.381 360.49 844.255 359.247 838.352 359.247C832.45 359.247 827.324 360.49 822.974 362.975C818.625 365.46 815.052 368.722 812.256 372.761C809.46 376.644 807.363 381.149 805.965 386.275C804.723 391.401 804.101 396.527 804.101 401.653C804.101 406.934 804.723 412.138 805.965 417.264C807.363 422.235 809.46 426.739 812.256 430.778C815.052 434.817 818.625 438.079 822.974 440.564C827.324 443.049 832.45 444.292 838.352 444.292ZM909.365 341.539H938.257L968.78 434.04H969.246L998.604 341.539H1026.1L982.993 462H953.169L909.365 341.539ZM1147.85 462H1121.76V445.224H1121.29C1118.03 451.282 1113.14 456.175 1106.61 459.903C1100.24 463.476 1093.72 465.262 1087.04 465.262C1071.2 465.262 1059.7 461.379 1052.56 453.612C1045.57 445.69 1042.07 433.807 1042.07 417.963V341.539H1068.63V415.4C1068.63 425.963 1070.65 433.419 1074.69 437.768C1078.73 442.117 1084.4 444.292 1091.7 444.292C1097.29 444.292 1101.95 443.438 1105.68 441.729C1109.41 440.02 1112.44 437.768 1114.77 434.972C1117.1 432.021 1118.73 428.526 1119.66 424.487C1120.75 420.448 1121.29 416.099 1121.29 411.439V341.539H1147.85V462Z" fill="black" />
              <path d="M1195.9 423.322C1196.68 431.089 1199.63 436.525 1204.76 439.632C1209.88 442.739 1216.02 444.292 1223.16 444.292C1225.65 444.292 1228.44 444.137 1231.55 443.826C1234.81 443.36 1237.84 442.583 1240.64 441.496C1243.43 440.409 1245.69 438.855 1247.39 436.836C1249.26 434.661 1250.11 431.865 1249.96 428.448C1249.8 425.031 1248.56 422.235 1246.23 420.06C1243.9 417.885 1240.87 416.177 1237.14 414.934C1233.57 413.536 1229.45 412.371 1224.79 411.439C1220.13 410.507 1215.4 409.497 1210.58 408.41C1205.61 407.323 1200.79 406.002 1196.13 404.449C1191.63 402.896 1187.51 400.799 1183.79 398.158C1180.21 395.517 1177.34 392.178 1175.16 388.139C1172.99 383.945 1171.9 378.819 1171.9 372.761C1171.9 366.237 1173.46 360.8 1176.56 356.451C1179.82 351.946 1183.86 348.374 1188.68 345.733C1193.65 342.937 1199.09 340.995 1204.99 339.908C1211.05 338.821 1216.79 338.277 1222.23 338.277C1228.44 338.277 1234.35 338.976 1239.94 340.374C1245.69 341.617 1250.81 343.714 1255.32 346.665C1259.98 349.616 1263.78 353.5 1266.73 358.315C1269.84 362.975 1271.78 368.645 1272.56 375.324H1244.83C1243.59 368.955 1240.64 364.684 1235.98 362.509C1231.47 360.334 1226.27 359.247 1220.37 359.247C1218.5 359.247 1216.25 359.402 1213.61 359.713C1211.12 360.024 1208.72 360.645 1206.39 361.577C1204.21 362.354 1202.35 363.596 1200.79 365.305C1199.24 366.858 1198.46 368.955 1198.46 371.596C1198.46 374.858 1199.55 377.499 1201.73 379.518C1204.06 381.537 1207.01 383.246 1210.58 384.644C1214.31 385.887 1218.5 386.974 1223.16 387.906C1227.82 388.838 1232.64 389.848 1237.61 390.935C1242.42 392.022 1247.16 393.343 1251.82 394.896C1256.48 396.449 1260.6 398.546 1264.17 401.187C1267.9 403.828 1270.85 407.167 1273.02 411.206C1275.35 415.245 1276.52 420.215 1276.52 426.118C1276.52 433.263 1274.89 439.321 1271.63 444.292C1268.36 449.263 1264.09 453.301 1258.81 456.408C1253.69 459.515 1247.94 461.767 1241.57 463.165C1235.2 464.563 1228.91 465.262 1222.7 465.262C1215.09 465.262 1208.02 464.408 1201.49 462.699C1195.13 460.99 1189.53 458.427 1184.72 455.01C1180.06 451.437 1176.33 447.088 1173.53 441.962C1170.89 436.681 1169.5 430.467 1169.34 423.322H1195.9ZM1378 381.848C1376.92 374.392 1373.89 368.8 1368.92 365.072C1364.1 361.189 1357.97 359.247 1350.51 359.247C1347.09 359.247 1343.44 359.868 1339.56 361.111C1335.68 362.198 1332.1 364.373 1328.84 367.635C1325.58 370.742 1322.86 375.169 1320.69 380.916C1318.51 386.508 1317.42 393.886 1317.42 403.051C1317.42 408.022 1317.97 412.992 1319.06 417.963C1320.3 422.934 1322.16 427.361 1324.65 431.244C1327.29 435.127 1330.63 438.312 1334.67 440.797C1338.7 443.127 1343.6 444.292 1349.35 444.292C1357.11 444.292 1363.48 441.884 1368.45 437.069C1373.58 432.254 1376.76 425.497 1378 416.798H1404.57C1402.08 432.487 1396.1 444.525 1386.63 452.913C1377.31 461.146 1364.88 465.262 1349.35 465.262C1339.87 465.262 1331.48 463.709 1324.18 460.602C1317.04 457.34 1310.98 452.991 1306.01 447.554C1301.04 441.962 1297.23 435.36 1294.59 427.749C1292.1 420.138 1290.86 411.905 1290.86 403.051C1290.86 394.042 1292.1 385.576 1294.59 377.654C1297.08 369.732 1300.8 362.897 1305.77 357.15C1310.74 351.247 1316.88 346.665 1324.18 343.403C1331.64 339.986 1340.34 338.277 1350.28 338.277C1357.27 338.277 1363.87 339.209 1370.08 341.073C1376.45 342.782 1382.04 345.422 1386.86 348.995C1391.83 352.568 1395.87 357.072 1398.97 362.509C1402.08 367.946 1403.94 374.392 1404.57 381.848H1378ZM1481.38 465.262C1471.75 465.262 1463.13 463.709 1455.51 460.602C1448.06 457.34 1441.69 452.913 1436.41 447.321C1431.28 441.729 1427.32 435.05 1424.53 427.283C1421.89 419.516 1420.56 410.973 1420.56 401.653C1420.56 392.488 1421.89 384.023 1424.53 376.256C1427.32 368.489 1431.28 361.81 1436.41 356.218C1441.69 350.626 1448.06 346.277 1455.51 343.17C1463.13 339.908 1471.75 338.277 1481.38 338.277C1491.01 338.277 1499.55 339.908 1507.01 343.17C1514.62 346.277 1520.99 350.626 1526.11 356.218C1531.4 361.81 1535.36 368.489 1538 376.256C1540.79 384.023 1542.19 392.488 1542.19 401.653C1542.19 410.973 1540.79 419.516 1538 427.283C1535.36 435.05 1531.4 441.729 1526.11 447.321C1520.99 452.913 1514.62 457.34 1507.01 460.602C1499.55 463.709 1491.01 465.262 1481.38 465.262ZM1481.38 444.292C1487.28 444.292 1492.41 443.049 1496.76 440.564C1501.11 438.079 1504.68 434.817 1507.47 430.778C1510.27 426.739 1512.29 422.235 1513.53 417.264C1514.93 412.138 1515.63 406.934 1515.63 401.653C1515.63 396.527 1514.93 391.401 1513.53 386.275C1512.29 381.149 1510.27 376.644 1507.47 372.761C1504.68 368.722 1501.11 365.46 1496.76 362.975C1492.41 360.49 1487.28 359.247 1481.38 359.247C1475.48 359.247 1470.35 360.49 1466 362.975C1461.65 365.46 1458.08 368.722 1455.28 372.761C1452.49 376.644 1450.39 381.149 1448.99 386.275C1447.75 391.401 1447.13 396.527 1447.13 401.653C1447.13 406.934 1447.75 412.138 1448.99 417.264C1450.39 422.235 1452.49 426.739 1455.28 430.778C1458.08 434.817 1461.65 438.079 1466 440.564C1470.35 443.049 1475.48 444.292 1481.38 444.292ZM1564.27 341.539H1589.2V364.839H1589.67C1590.45 361.577 1591.92 358.393 1594.1 355.286C1596.43 352.179 1599.15 349.383 1602.25 346.898C1605.51 344.257 1609.09 342.16 1612.97 340.607C1616.85 339.054 1620.81 338.277 1624.85 338.277C1627.96 338.277 1630.06 338.355 1631.14 338.51C1632.39 338.665 1633.63 338.821 1634.87 338.976V364.606C1633.01 364.295 1631.07 364.062 1629.05 363.907C1627.18 363.596 1625.32 363.441 1623.45 363.441C1618.95 363.441 1614.68 364.373 1610.64 366.237C1606.76 367.946 1603.34 370.586 1600.39 374.159C1597.44 377.576 1595.11 381.848 1593.4 386.974C1591.69 392.1 1590.83 398.003 1590.83 404.682V462H1564.27V341.539ZM1724.81 391.168C1724.5 386.974 1723.56 382.935 1722.01 379.052C1720.61 375.169 1718.59 371.829 1715.95 369.033C1713.47 366.082 1710.36 363.752 1706.63 362.043C1703.06 360.179 1699.02 359.247 1694.52 359.247C1689.86 359.247 1685.58 360.101 1681.7 361.81C1677.97 363.363 1674.71 365.616 1671.92 368.567C1669.27 371.363 1667.1 374.703 1665.39 378.586C1663.84 382.469 1662.98 386.663 1662.83 391.168H1724.81ZM1662.83 408.643C1662.83 413.303 1663.45 417.808 1664.69 422.157C1666.09 426.506 1668.11 430.312 1670.75 433.574C1673.39 436.836 1676.73 439.477 1680.77 441.496C1684.81 443.36 1689.62 444.292 1695.22 444.292C1702.98 444.292 1709.2 442.661 1713.86 439.399C1718.67 435.982 1722.24 430.933 1724.57 424.254H1749.74C1748.34 430.778 1745.93 436.603 1742.51 441.729C1739.1 446.855 1734.98 451.204 1730.17 454.777C1725.35 458.194 1719.91 460.757 1713.86 462.466C1707.95 464.33 1701.74 465.262 1695.22 465.262C1685.74 465.262 1677.35 463.709 1670.05 460.602C1662.75 457.495 1656.54 453.146 1651.41 447.554C1646.44 441.962 1642.63 435.283 1639.99 427.516C1637.51 419.749 1636.27 411.206 1636.27 401.886C1636.27 393.343 1637.59 385.265 1640.23 377.654C1643.02 369.887 1646.91 363.13 1651.88 357.383C1657 351.48 1663.14 346.82 1670.28 343.403C1677.43 339.986 1685.51 338.277 1694.52 338.277C1703.99 338.277 1712.46 340.296 1719.91 344.335C1727.52 348.218 1733.82 353.422 1738.79 359.946C1743.76 366.47 1747.33 374.004 1749.5 382.547C1751.83 390.935 1752.46 399.634 1751.37 408.643H1662.83Z" fill="#16A34A" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M850.326 400.35C850.16 406.878 844.463 412.45 838.018 412.45C831.282 412.45 826.084 407.211 826.001 400.267C825.918 393.364 831.074 388 837.81 388C844.838 387.959 850.493 393.572 850.326 400.35ZM836.563 395.277C836.604 393.78 835.898 392.782 834.317 392.699C832.904 392.824 831.781 393.323 831.615 394.903C831.407 396.732 832.321 397.689 834.109 397.689C835.606 397.647 836.521 396.774 836.563 395.277Z" fill="black" />
            </svg>

          </Link>

          {/* Desktop Navigation with 860px Breakpoint */}
          <ul className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6 xl:space-x-6">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "WHAT WE OFFER", path: "/WhatWeOffer" },
              { name: "CAREERS", path: "/careers" },
              { name: "BLOG", path: "/blog" },
              { name: "CONTACT US", path: "/contact" },
            ].map((item) => (
              <motion.li key={item.name} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item.path}
                  className="group relative text-xs md:text-sm lg:text-base font-medium text-gray-700 hover:text-black focus:text-black transition focus:outline-none"
                >
                  {item.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
                </Link>

              </motion.li>
            ))}

            {/* Call to Action Button - More Responsive Sizing */}
            <li>
              <button className="bg-green-800 text-white text-xs md:text-sm px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md hover:bg-green-600 transition">
                <Link to='/becomepartner'>BECOME A PARTNER</Link>
              </button>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Slide Down */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            <ul className="pt-2 pb-4 space-y-1 text-gray-500">
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT", path: "/about" },
                { name: "WHAT WE OFFER", path: "/WhatWeOffer" },
                { name: "CAREERS", path: "/careers" },
                { name: "BLOG", path: "/blog" },
                { name: "CONTACT US", path: "/contact" },
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-gray-500 hover:bg-green-500 hover:text-white focus:bg-gray-100 focus:text-black transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>

                </motion.li>
              ))}

              {/* Mobile CTA Button */}
              <li className="px-4 pt-2">
                <button className="block w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
                  <Link to='/becomepartner'  onClick={() => setIsOpen(false)}>BECOME A PARTNER</Link>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}