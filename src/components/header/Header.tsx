'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex items-center p-4 justify-center w-full">
      <Image
        src="https://i.imgur.com/EWRikSi.png" // Replace with the path to your image
        width={5000}
        height={5000}
        className="w-[250px] h-[60px]"
        alt="sdsmmd"
      />
      {/* <svg width={293} height={80} viewBox="0 0 293 80" fill="none" className="h-auto w-[160px]">
        <g clipPath="url(#clip0_1578_140118undefined)">
          <path
            d="M133.461 18.6951H147.398V26.5015C151.964 19.4857 157.219 18.6951 164.911 18.6951V32.4906H161.408C152.19 32.4906 147.778 36.8281 147.778 45.4202V60.0842H133.461V18.6951Z"
            style={{ fill: 'currentColor' }}
            className="default-transition text-trustBlue [transition-property:color] dark:text-trustGreen"
          />
          <path
            d="M211.41 60.0842H197.097V56.1385C193.971 59.7655 189.711 61.3419 184.459 61.3419C174.485 61.3419 168.846 55.4281 168.846 44.5517V18.6951H183.16V41.3236C183.16 46.4443 185.673 49.4389 189.935 49.4389C194.197 49.4389 197.094 46.5198 197.094 41.5571V18.6951H211.408V60.0842H211.41Z"
            style={{ fill: 'currentColor' }}
            className="default-transition text-trustBlue [transition-property:color] dark:text-trustGreen"
          />
          <path
            d="M214.908 47.3054H228.314C228.925 50.3 230.981 51.5601 235.926 51.5601C239.964 51.5601 242.324 50.6162 242.324 48.8817C242.324 47.5389 241.181 46.6705 237.911 45.9626L227.098 43.5177C219.863 41.866 216.207 37.6867 216.207 30.9823C216.207 22.1493 222.678 17.5784 235.243 17.5784C247.807 17.5784 253.974 22.0326 255.044 31.5759H241.721C241.495 29.0556 238.901 27.5133 234.639 27.5133C231.214 27.5133 229.01 28.6153 229.01 30.2744C229.01 31.6926 230.453 32.7946 233.352 33.5098L244.696 36.2709C252.157 38.0808 255.74 41.8684 255.74 48.0157C255.74 56.5324 248.352 61.5778 235.795 61.5778C223.237 61.5778 214.93 56.1383 214.93 47.3054H214.915H214.908Z"
            style={{ fill: 'currentColor' }}
            className="default-transition text-trustBlue [transition-property:color] dark:text-trustGreen"
          />
          <path
            d="M293.858 31.5687V18.6951H258.526V31.576H269.069V60.0842H283.31V31.5687H293.858Z"
            style={{ fill: 'currentColor' }}
            className="default-transition text-trustBlue [transition-property:color] dark:text-trustGreen"
          />
          <path
            d="M129.476 31.5687V18.6951H94.1469V31.576H104.69V60.0842H118.933V31.5687H129.476Z"
            style={{ fill: 'currentColor' }}
            className="default-transition text-trustBlue [transition-property:color] dark:text-trustGreen"
          />
          <path
            d="M1.47009 11.4213L36.6098 0V79.0661C11.5096 68.523 1.47009 48.3173 1.47009 36.8985V11.4213Z"
            style={{ fill: 'currentColor' }}
            className="default-transition text-trustBlue [transition-property:color] dark:text-trustGreen"
          />
          <path
            d="M71.7523 11.4213L36.6127 0V79.0661C61.7128 68.523 71.7523 48.3173 71.7523 36.8985V11.4213Z"
            fill="url(#paint0_linear_1578_140118undefined)"
            className="default-transition opacity-0 [transition-property:opacity] dark:opacity-100"
          />
          <path
            d="M71.7523 11.4213L36.6127 0V79.0661C61.7128 68.523 71.7523 48.3173 71.7523 36.8985V11.4213Z"
            fill="url(#paint0_linear_1578_102342undefined)"
            className="default-transition opacity-100 [transition-property:opacity] dark:opacity-0"
          />
        </g>
        <defs>
          <linearGradient id="paint0_linear_1578_140118undefined" x1="35.1288" y1="89.0035" x2="63.8924" y2="-15.0289" gradientUnits="userSpaceOnUse">
            <stop offset="0.26" stopColor="#48FF91" />
            <stop offset="0.66" stopColor="#0094FF" />
            <stop offset="0.8" stopColor="#0038FF" />
            <stop offset="0.89" stopColor="#0500FF" />
          </linearGradient>
          <linearGradient id="paint0_linear_1578_102342undefined" x1="61.762" y1="-4.56968" x2="35.2193" y2="78.953" gradientUnits="userSpaceOnUse">
            <stop offset="0.02" stopColor="#0000FF" />
            <stop offset="0.08" stopColor="#0094FF" />
            <stop offset="0.16" stopColor="#48FF91" />
            <stop offset="0.42" stopColor="#0094FF" />
            <stop offset="0.68" stopColor="#0038FF" />
            <stop offset="0.9" stopColor="#0500FF" />
          </linearGradient>
          <clipPath id="clip0_1578_140118undefined">
            <rect width="291.936" height="79.0661" fill="white" transform="translate(0.814331)" />
          </clipPath>
        </defs>
      </svg> */}
    </div>
  );
}
